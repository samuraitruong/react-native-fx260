import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

import MathEngine from '../Services/MathEngine'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MathTypes } from '../Redux/MathRedux'


/* ------------- Sagas ------------- */

import { keypress } from './MathSagas'
import { startup } from './StartupSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(MathTypes.KEY_PRESS, keypress, MathEngine),
    // some sagas receive extra parameters in addition to an action
  ])
}

import {call, put} from 'redux-saga/effects'
import {path} from 'ramda'
import MathActions from '../Redux/MathRedux'

export function * keypress(engine, action) {
    const {current, shiftOn, key} = action;
    try {
        const response = yield call(engine.processKey, current, shiftOn, key)
        console
            .tron
            .display({name: 'return from process key', value: response})
        if (response.ok) {

            if (response.shiftOn != null && response.shiftOn != shiftOn) {
                yield put(MathActions.toggleShiftKey(response.shiftOn))
            } else
                if(response.memory) {
                    yield put(MathActions.addMemoryItem(response.memory))
                } 
                else
                yield put(MathActions.onKeyboardProcessed(response.data))
        }
    } catch (error) {
        yield put(MathActions.onError('Error'))
    }
}
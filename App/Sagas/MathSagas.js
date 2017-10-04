import {call, put} from 'redux-saga/effects'
import {path} from 'ramda'
import MathActions from '../Redux/MathRedux'

export function * keypress(engine, action) {
    const {current, shiftOn, key, hyp, memories} = action;
    try {
        const response = yield call(engine.processKey, current, shiftOn, key,hyp, memories)
        console
            .tron
            .display({name: 'return from process key', value: response})
        if (response.ok) {
            const {hyp, memory, data} = response;

            if(hyp != null) {
                yield put(MathActions.toggleHyp(hyp))
            }
            else
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

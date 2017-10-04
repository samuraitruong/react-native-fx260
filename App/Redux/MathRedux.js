import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  keyPress: ['current','shiftOn','key', 'hyp', 'memories'],
  onKeyboardProcessed: ['result'],
  mathSuccess: ['payload'],
  toggleShiftKey : ['shiftOn'],
  mathFailure: null,
  onError : ['error'],
  addMemoryItem: ['memoryItem'],
  toggleHyp: ['hyp']
})

export const MathTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  shiftOn: false,
  error: null,
  current: {},
  keyChain: [],
  memories: [],
  hyp: false

})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { result } = action
  return state.merge({ fetching: false, error: null, current : result })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const toggleShiftKey = (state, {shiftOn}) =>
  state.merge({ shiftOn })

export const error = (state, {error})=> state.merge({error, current: {}})
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.KEY_PRESS]: request,
  [Types.ON_KEYBOARD_PROCESSED]: success,
  [Types.MATH_FAILURE]: failure,
  [Types.ON_ERROR] : error,
  [Types.TOGGLE_SHIFT_KEY] : toggleShiftKey,
  [Types.ADD_MEMORY_ITEM] : (state, {memoryItem})=> state.merge({memories: [memoryItem, ...state.memories]}),
  [Types.TOGGLE_HYP] : (state, {hyp}) => state.merge({hyp})
})

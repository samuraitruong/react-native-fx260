import Persitence from './ImmutablePersistenceTransform'
import ExprEval from '../expr-eval/index'
var math = require('mathjs');

const processKey =  (currentState,shiftOn, key, hyp, memories) => {
    console.tron.display({name: 'process key', value: key})
    const newState = {...currentState};

    if(newState.reset && ((shiftOn && !key.shift.aggregate) ||
      (!shiftOn && !key.normal.aggregate))) {
      console.tron.display({name: 'resetted reseted', value: key})
        newState.display = '';
        newState.expr ='';
        newState.reset = null;

    }
    else{
      newState.reset = null;
    }

    let {display, expr, lcdDisplay, cmd} = shiftOn?key.shift: key.normal;
    display = lcdDisplay || display;

    if(typeof cmd == 'function') {
        console.tron.display({name: 'key has command', value: {key, hyp, memories}})
        return cmd(currentState, shiftOn, key, hyp, memories);
    }

    display =  display || (shiftOn?key.shift : key.normal);

    expr =  expr || (shiftOn?key.shift : key.normal);

    newState.display = (newState.display? newState.display: '') +  display;
    newState.expr = (newState.expr? newState.expr: '') +  expr;

    newState.lastKey = key;

    return Promise.resolve({
        ok: true,
        data: newState
    });
}
export const clearCommand = (currentState, shiftOn, key) => {
    return Promise.resolve({
        ok: true,
        data: {display: '', reset: null, expr: ''}
    });
}
export const randomNumber = (currentState, shiftOn, key) => {
  const rnd = Math.round(Math.random() * 1000)/1000

  return Promise.resolve({
      ok: true,
      data: {...currentState, display: currentState.display + rnd,  expr: currentState.expr + rnd}
  });
}

export const evalExpr = (currentState, shiftOn, key) => {

    const parser= new ExprEval.Parser();
    parser.unaryOps = {...parser.unaryOps, cbrt: Math.cbrt}
    const expr = parser.parse(currentState.expr)
    return {
        ok: true,

        data: {...currentState,display: expr.evaluate().toString(), reset: true}
    }
}
export const shiftOn = (currentState, shiftOn, key, hyp) => {
     return {
         ok: true,
         shiftOn: shiftOn?false:true,
         data: {...currentState}
     }
 }

 export const toggleHyp = (currentState, shiftOn, key, hyp) => {
    return {
        ok: true,
        hyp: !hyp
    }
}

export const saveMemory = (currentState, shiftOn, key, hyp) => {
  const parser= new ExprEval.Parser();
  parser.unaryOps = {...parser.unaryOps, cbrt: Math.cbrt}
  const expr = parser.parse(currentState.expr);

    return {
        ok: true,
        memory: {...currentState, value: expr.evaluate()}
    }
}

export const recallMemory = (currentState, shiftOn, key, hyp, memories) => {
  if(memories) {
    const total = memories.reduce((total, value) => total.value + value.value);
    return {
      ok: true,
      data: {...currentState,display: currentState.display+'MR('+total+')', expr: currentState.expr +total}
    }
  }
  return {
      ok: true,
  }
}


 export const tenPowX = (currentState, shiftOn, key) => {
    const result = evalExpr(currentState, shiftOn, key)
    let clone = Object.assign({}, result.data);

    let value = Math.pow(10, parseFloat(clone.display));

    return    {
        data : {display: value.toString(), expr: value},
        ok: true
    }

}

export const logaritX = (currentState, shiftOn, key) => {
    const result = evalExpr(currentState, shiftOn, key)
    let value = Math.exp(parseFloat(result.data.display));

    return    {
        data : {display: value.toString(), expr: value},
        ok: true
    }
}


export default {
    processKey
}

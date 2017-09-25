import Persitence from './ImmutablePersistenceTransform'
var Parser = require('expr-eval').Parser;
var math = require('mathjs');

const processKey =  (currentState,shiftOn, key) => {
    console.tron.display({name: 'process key', value: key})
    const newState = {...currentState};
    
    if(newState.reset) {
        newState.display = '';
        newState.expr ='';
        newState.reset = null;
    }

    let {display, expr, lcdDisplay, cmd} = shiftOn?key.shift: key.normal;
    display = lcdDisplay || display;
    
    if(typeof cmd == 'function') {
        console.tron.display({name: 'key has command', value: key})
        return cmd(currentState, shiftOn, key);
    }
    console.tron.display({name: 'process key get display value', value: display})
    
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
export const evalExpr = (currentState, shiftOn, key) => {
   
    const parser= new Parser();
    const expr = parser.parse(currentState.expr)
    return {
        ok: true, 

        data: {...currentState,display: expr.evaluate().toString(), reset: true}
    }
}
export const shiftOn = (currentState, shiftOn, key) => {
     return {
         ok: true, 
         shiftOn: shiftOn?false:true,
         data: {...currentState}
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
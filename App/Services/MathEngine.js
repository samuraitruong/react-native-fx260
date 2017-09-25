import Persitence from './ImmutablePersistenceTransform'
var Parser = require('expr-eval').Parser;


const processKey =  (currentState,shiftOn, key) => {
    console.tron.display({name: 'process key', value: key})
    const newState = {...currentState};
    
    if(newState.reset) {
        newState.display = '';
        newState.expr ='';
        newState.reset = null;
    }

    let {display, expr, lcdDisplay} = key.normal;
    display = lcdDisplay || display;
    
    if(typeof key.normal.cmd == 'function') {
        console.tron.display({name: 'key has command', value: key})
        return key.normal.cmd(currentState, shiftOn, key);
    }
    console.tron.display({name: 'process key get display value', value: display})
    if(!display && key.normal)
    display =  key.normal;

    if(!expr && key.normal)
    expr =  key.normal;

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
    console.tron.display({name: 'eval expression ', value: currentState})
    const expr = parser.parse(currentState.expr)
    return {
        ok: true, 

        data: {...currentState,display: expr.evaluate().toString(), reset: true}
    }
}
export const shiftOn = (currentState, shiftOn, key) => {
     return {
         ok: true, 
         shiftOn: !shiftOn,
         data: {...currentState}
     }
 }

export default {
    processKey
}
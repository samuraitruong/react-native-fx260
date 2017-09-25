import {evalExpr, clearCommand, shiftOn, tenPowX,logaritX} from './Services/MathEngine'

export default  keyboard = [
    [{normal: {display: 'shift on', cmd: shiftOn}, shift: {display: 'shift off', cmd: shiftOn}},{normal:'MODE', shift: null},{normal:{display:'x²', lcdDisplay:'²',expr: '^2'}, shift: {display: '√', lcdDisplay : '√(', expr: 'sqrt('}},{normal:{display : 'log', lcdDisplay: 'log(', expr: 'log(' }, shift: {display: '10^x', cmd: tenPowX}},{normal:{display : 'ln', lcdDisplay: 'ln(', expr: 'ln(' }, shift: {display: 'e^x', cmd:logaritX}},{normal:'On', shift: 'On'} ],
    [{normal:'ab/c', shift:'d/c'},{normal:'∘,,,', shift: '⬅'},{normal:'hyp', shift: ''},{normal:{display: 'sin', lcdDisplay: 'sin(', expr:'sin('}, shift: 'sin^-1'},{normal:{display: 'cos', lcdDisplay: 'cos(', expr:'cos('}, shift: 'cos^-1'},{normal:{display: 'tan', lcdDisplay: 'tan(', expr:'tan('}, shift: 'tan^-1'} ],
    [{normal:'±', shift:'∛'},{normal:'🞂', shift: 'x^y'},{normal:{display: '[(...', lcdDisplay: '(',expr:'('}, shift: 'x ⭤ y'},{normal:{lcdDisplay: ')',display: '...)]', expr: ')'}, shift: '1/x'},{normal:'x^y', shift: 'xv^y'},{normal:'MR', shift: 'Min'} ],
    [{normal:'7', shift:'x->'},{normal:'8', shift: 'ơn'},{normal:'9', shift: 'ơn-1'},{normal: { display: 'C', cmd: clearCommand}, shift: 'x ⭤ M'},{normal:'AC', shift: 'SAC'} ],
    [{normal:'4', shift:'⅀x^2'},{normal:'5', shift: '⅀x'},{normal:'6', shift: 'n'},{normal:{ display: '×', expr:'*'}, shift: 'ENG'},{normal: {display: '÷', expr: '/'}, shift: 'ENG'} ],
    [{normal:'1', shift:'nPr'},{normal:'2', shift: 'nCr'},{normal:'3', shift: 'x!'},{normal:{display:'+',expr: '+'}, shift: 'R=P'},{normal: {display: '-', expr: '-'}, shift: 'P=R'} ],
    [{normal:'0', shift:'RND'},{normal: {display:'.', expr: '.'}, shift: 'RND#'},{normal:'EXP', shift: 'π'},{normal: {display:  '=', cmd: evalExpr}, shift: '%'},{normal:'M+', shift: 'M-'} ]
         
]
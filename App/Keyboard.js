import {evalExpr, clearCommand, shiftOn} from './Services/MathEngine'

export default  keyboard = [
    [{normal: {display: 'shift on', cmd: shiftOn}, shift:'shift off'},{normal:'MODE', shift: null},{normal:'x^2', shift: '√'},{normal:'log', shift: '10^x'},{normal:'ln', shift: 'e^x'},{normal:'On', shift: 'On'} ],
    [{normal:'ab/c', shift:'d/c'},{normal:'∘,,,', shift: '⬅'},{normal:'hyp', shift: ''},{normal:'sin', shift: 'sin^-1'},{normal:'cos', shift: 'cos^-1'},{normal:'tan', shift: 'tan^-1'} ],
    [{normal:'±', shift:'∛'},{normal:'🞂', shift: 'x^y'},{normal:{display: '[(...', lcdDisplay: '(',expr:'('}, shift: 'x ⭤ y'},{normal:{lcdDisplay: ')',display: '...)]', expr: ')'}, shift: '1/x'},{normal:'x^y', shift: 'xv^y'},{normal:'MR', shift: 'Min'} ],
    [{normal:'7', shift:'x->'},{normal:'8', shift: 'ơn'},{normal:'9', shift: 'ơn-1'},{normal: { display: 'C', cmd: clearCommand}, shift: 'x ⭤ M'},{normal:'AC', shift: 'SAC'} ],
    [{normal:'4', shift:'⅀x^2'},{normal:'5', shift: '⅀x'},{normal:'6', shift: 'n'},{normal:{ display: '×', expr:'*'}, shift: 'ENG'},{normal: {display: '÷', expr: '/'}, shift: 'ENG'} ],
    [{normal:'1', shift:'nPr'},{normal:'2', shift: 'nCr'},{normal:'3', shift: 'x!'},{normal:{display:'+',expr: '+'}, shift: 'R=P'},{normal: {display: '-', expr: '-'}, shift: 'P=R'} ],
    [{normal:'0', shift:'RND'},{normal:'⦁', shift: 'RND#'},{normal:'EXP', shift: 'π'},{normal: {display:  '=', cmd: evalExpr}, shift: '%'},{normal:'M+', shift: 'M-'} ]
         
]
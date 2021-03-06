import {evalExpr,
  clearCommand,
  shiftOn,
  tenPowX,
  logaritX,
  saveMemory,
  toggleHyp,
  randomNumber,
  recallMemory,
  reverseNumber} from './Services/MathEngine'
import MathActions from './Redux/MathRedux'

const pi = Math.PI;

export default  keyboard = [
    [{normal: {display: 'shift on', cmd: shiftOn}, shift: {display: 'shift off', cmd: shiftOn}},{normal:'MODE', shift: null},{normal:{display:'x²', lcdDisplay:'²',expr: '^2', aggregate : true}, shift: {display: '√', lcdDisplay : '√(', expr: 'sqrt('}},{normal:{display : 'log', lcdDisplay: 'log(', expr: 'log(' }, shift: {display: '10^x', cmd: tenPowX}},{normal:{display : 'ln', lcdDisplay: 'ln(', expr: 'ln(' }, shift: {display: 'e^x', cmd:logaritX}},{normal:'On', shift: 'On'} ],
    [{normal:'ab/c', shift:'d/c'},{normal:'∘,,,', shift: '⬅'},{normal:{display: 'hyp', cmd: toggleHyp}, shift:{display: 'hyp', cmd: toggleHyp}},{hyp:false, normal:{display: 'sin', lcdDisplay: 'sin(', expr:'sin('}, shift: {display:'sin⁻¹', lcdDisplay:'sin⁻¹(', expr: '1/sin('}},{hyp:false, normal:{display: 'cos', lcdDisplay: 'cos(', expr:'cos('}, shift: {display:'cos⁻¹', lcdDisplay:'cos⁻¹(', expr: '1/cos('}},{hyp:false, normal:{display: 'tan', lcdDisplay: 'tan(', expr:'tan('}, shift: {display:'tan⁻¹', lcdDisplay:'tan⁻¹(', expr: '1/tan('}}, {hyp: true, normal:{display: 'sinh', lcdDisplay: 'sinh(', expr:'sinh('}, shift: {display:'sinh⁻¹', lcdDisplay:'sinh⁻¹(', expr: '1/sinh('}},{hyp: true, normal:{display: 'cosh', lcdDisplay: 'cosh(', expr:'cosh('}, shift: {display:'cosh⁻¹', lcdDisplay:'cosh⁻¹(', expr: '1/cosh('}},{hyp: true, normal:{display: 'tanh', lcdDisplay: 'tanh(', expr:'tanh('}, shift: {display:'tanh⁻¹', lcdDisplay:'tanh⁻¹(', expr: '1/tanh('}} ],
    [{normal:{display:'±', cmd:reverseNumber}, shift:{display: '∛', lcdDisplay: '∛(', expr: 'cbrt('}},{normal:'🞂', shift: {display:'x³', lcdDisplay: '³', expr: '^3'}},{normal:{display: '[(...', lcdDisplay: '(',expr:'('}, shift: {display:'x^y', lcdDisplay: '^', expr:'^'}},{normal:{lcdDisplay: ')',display: '...)]', expr: ')'}, shift: {display:'1/x', lcdDisplay: '1/(', expr:'1/('}},{normal:'x^y', shift: 'x^1/y'},{normal:{display: 'MR', cmd: recallMemory}, shift: 'Min'} ],
    [{normal:'7', shift:'x->'},{normal:'8', shift: 'ơn'},{normal:'9', shift: 'ơn-1'},{normal: { display: 'C', cmd: clearCommand}, shift: 'x ⭤ M'},{normal:'CE', shift: 'SAC'} ],
    [{normal:'4', shift:'⅀x^2'},{normal:'5', shift: '⅀x'},{normal:'6', shift: 'n'},{normal:{ display: '×', expr:'*', aggregate : true}, shift: 'ENG'},{normal: {display: '÷', expr: '/', aggregate : true}, shift: 'ENG'} ],
    [{normal:'1', shift:{display:'nPr', lcdDisplay: '[nPr]',expr: ' nPr '}},{normal:'2', shift: {display: 'nCr', lcdDisplay: '[nCr]', expr: ' nCr '}},{normal:'3', shift: {display:'x!', lcdDisplay:'!', expr: '!'}},{normal:{display:'+',expr: '+', aggregate : true}, shift: 'R=P'},{normal: {display: '-', expr: '-',aggregate : true}, shift: 'P=R'} ],
    [{normal:'0', shift:'RND'},{normal: {display:'.', expr: '.'}, shift: {display: 'RND#', cmd: randomNumber}},{normal:{display:'EXP', expr: '*10^'}, shift: {display: 'π', expr: pi}},{normal: {display:  '=', cmd: evalExpr}, shift: {display:'%', expr: '/100'}},{normal:{ display:'M+', cmd: saveMemory}, shift: {display: 'M-', cmd: recallMemory}} ]

]

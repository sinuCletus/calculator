const sum = (a,b) => a + b;
const difference = (a,b) => a - b;
const product = (a,b) => a * b;
const quotient = (a,b) => a / b;

const total = window.document.getElementById('total');
const current = window.document.getElementById('current');
const buttons = Array.from(window.document.getElementsByTagName('button'));
let operator = '';
let operandA = '';
let operandB = '';

//FUNCTIONS add, subtract, multiply, divide, and operation

const operation = (operator, a, b) => 

    (operator == '+') ? sum(a,b) 
    : (operator == '-') ? difference(a,b)
    : (operator == 'x') ? product(a,b) 
    : (operator == '/') ? quotient(a,b)
    : console.log(NaN);

//-------------------------------------------------------

//Display Functionality

buttons.map( button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText) {
        //Clears entire calculator
        case 'Clear': 
            current.innerHTML = '';
            total.innerHTML = '';
            break;
        //Deletes one number or operator at a time
        case 'Delete': 
            current.innerHTML = current.innerHTML.slice(0,-1);
            break;
        //Operators, only able to apply an operator once 
        case '+':
            operator = e.target.innerText;

            if(!current.innerHTML.includes(operator) && !current.innerHTML.includes('x')
            && !current.innerHTML.includes('-') && !current.innerHTML.includes('/')) {

                current.innerText += e.target.innerText;
            }
            break;
        case '-':
            operator = e.target.innerText;

            if(!current.innerHTML.includes(operator) && !current.innerHTML.includes('x')
            && !current.innerHTML.includes('+') && !current.innerHTML.includes('/')) {
               
                current.innerText += operator;
            }
            break;
        case 'x':
            operator = e.target.innerText;

            if(!current.innerHTML.includes(operator) && !current.innerHTML.includes('+')
            && !current.innerHTML.includes('-') && !current.innerHTML.includes('/')) {
               
                current.innerText += e.target.innerText;
            }
            break;
        case '/':
            operator = '/';

            if(!current.innerHTML.includes(operator) && !current.innerHTML.includes('x')
            && !current.innerHTML.includes('-') && !current.innerHTML.includes('+')) {
               
                current.innerText += e.target.innerText;
            }
            break;
        //Calls the operation function once = is pressed
        case '=':
            let operands = current.innerText.split(operator);
            
            operandA = operands[0];
            operandB = operands[1];

            current.innerHTML = ''

            total.innerHTML = operation(operator, parseFloat(operandA), parseFloat(operandB));
            break;
        default:
            current.innerText += e.target.innerText;
       }
    });
});



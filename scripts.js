//FUNCTIONS add, subtract, multiply, divide

const sum = (a,b) => a + b;
const differene = (a,b) => a - b;
const product = (a,b) => a * b;
const quotient = (a,b) => a / b;

const operation = (operator, a, b) => 

    (operator == '+') ? sum(a,b) 
    : (operator == '-') ? differene(a,b)
    : (operator == '*') ? product(a,b) 
    : (operator == '/') ? quotient(a,b)
    : console.log(NaN);

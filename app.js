//1davaleba


let year = Number(prompt('Enter a Year'));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(`${year} is a leap`)
}
else {
    alert(`${year} is not leap year`);
}


//2davaleba

let browser = prompt('Enter a browser');


if (browser === 'Edge') {
    alert("You've got the Edge!");

}

else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert('Okay we support these browsers too');

}

else {
    alert('We hope that this page looks ok!');
}



//3davaleba

let number1 = Number(prompt('Enter number 1'));
let number2 = Number(prompt('Enter number 2'));
let operation = prompt('Enter operation');
let result;

if (isNaN(number1) || isNaN(number2)) {
    alert('please enter only number');
} else {
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
         case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    alert(`The resul is ${result}`);
}




//4davaleba

let number = prompt('enter number');

while (isNaN(number)) {
    alert('you entered wrong number');
    number = prompt('enter number again');

}

alert('you got the point');



























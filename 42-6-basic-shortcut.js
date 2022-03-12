//false value
//'', 0, false, null, undefined;

//truthy value
//'shimul', 4, true, {}, [],






let myValue = 4;
//check any turithy value
if (myValue) {
    myValue = myValue * 50;
}
else {
    myValue = 0;
}



let myMoney = 50;
// check any falsy value anithig
if (!myMoney) {

}


const money = 80;
let food;
if (money > 100) {
    food = 'briyani khabo'
}
else {
    food = 'biskut khabo'
}




// tarnary operator    ......condition check korbe ,,jodi condition na  hoi tahole porer ta show korbe

let food1 = money > 100 ? 'briyani khabo' : 'biskut khabo'
console.log(food1);



let drink = (money > 100 && myVar > 100) ? 'chock' : 'filter pani';
console.log(drink)



// number to string convertion
const num1 = 43;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);


// string to number convertion 

const input = '53453';
const inputNum = +input;
console.log(inputNum);




// tarnary operator

const isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be excuted

isActive && showUser();


// use || if the left side is false then right side wiil be  excuted

isActive || showUser();


// toggle boolbean

isActive = !isActive;
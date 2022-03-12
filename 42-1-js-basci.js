let number = 43;
number = 55;
console.log(number)

const name = 'Shimul';
console.log(name);



let numbers = 345;
if (numbers < 100) {
    console.log(numbers)
}
else {
    console.log(2345);
}


//array

const result = [78, 98, 56, 88, 44, 85];
result.push(121);
result.pop();
result[0] = 100;
console.log(result);

//for loop
for (let i = 0; i < result.length; i++) {
    const res = result[i];
    console.log(res);
}

//function

function multiply(num1, num2) {
    const output = num1 * num2;
    return output;
}
const mark = multiply(55, 23);
//console.log(mark)


//objects

const students = {
    neme: 'Shuvo',
    roll: 1,
    city: 'Dhaka',
    hobby: ['cricket', 'football']

}
console.log(students.neme);
console.log(students['hobby']);




const stud = 'city';
console.log(students[stud]);
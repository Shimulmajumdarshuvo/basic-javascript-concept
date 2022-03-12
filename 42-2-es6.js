const result = [78, 98, 56, 88, 44, 85];
const student = {
    neme: 'Shuvo',
    roll: 1,
    city: 'Dhaka',
    hobby: ['cricket', 'football']

}
//tamplate string

const about = `My name ${student.neme}.My city is ${student.city} . My hobby is ${student.hobby[0]} .Has number is ${result[1]}`;
//console.log(about);


//arraw function 

const markingNumber = num => num * 3;
const mark = markingNumber(5);
console.log(mark);


const doMath = (num1, num2) => {
    const sum = num1 * num2;
    return sum;
}
console.log(doMath(5, 2));


//spread operator

const newNumber = [...result, 100, 45345];
console.log(result)
console.log(newNumber);
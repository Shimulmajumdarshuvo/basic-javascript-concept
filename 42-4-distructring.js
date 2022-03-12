

const numbers = [34, 66];
const x = numbers[0];
const y = numbers[1];
console.log(x, y);


//array distructring

const [num1, num2] = [54, 66];
console.log(num1, num2);


function boxify(a, b) {
    const result = [a, b];
    return result;
}
console.log(boxify(90, 544));



const student = {
    neme: 'Shuvo',
    roll: 1,
    city: 'Dhaka',
    hobby: ['cricket', 'football']

}
const [hobby1, hobby2] = student.hobby;
console.log(hobby1, hobby2);

// object distructuring ........ object er moto hole 2 pase ei object er moto kore declear korte hobe

const { name, age } = { name: 'shakib', age: 32 };
console.log(name, age);



const employ = {
    ide: 'vs code',
    designatin: 'developer',
    language: ['html', 'css', ' javascript', 'python'],
    specficition: {
        height: 5.3,
        weight: 60,

        address: {
            location: 'Dhaka',
            branch: 'mirpur'
        }

    }
}
const { ide, language } = employ;
console.log(ide, language);

// destructuring korar somoy value gula jodi array er moto thake tahole arr[] er moto kore likte  hobe ,
// destructuring korar somoy value gula jodi object er moto thake tahole object{} er moto kore likte  hobe ,



const { height, } = employ.specficition;
console.log(height,);

const { location, branch } = employ.specficition.address;
console.log(location, branch)

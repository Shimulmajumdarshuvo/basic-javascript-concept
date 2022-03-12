const student = {
    neme: 'Shuvo',
    roll: 1,
    city: 'Dhaka',
    hobby: ['cricket', 'football']

}
console.log(student);

// json .stringify ..........korle property gula string er moddhe thakbe sob property gula

// abr jai variable e rakha file ke json.parse korle ager mote object e change hoye jabe


const studentJson = JSON.stringify(student);
const studetnParse = JSON.parse(studentJson);
console.log(studetnParse);
console.log(studentJson);




// fetch ..........je vabe kaj kore sai main part ta bujte hobe

// const url = `   ........................................................................    `;
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))


//  keys, values

const keys = Object.keys(student);
const valus = Object.values(student)
console.log(keys, valus);


const numbers = [23, 5434, 66, 77, 523, 77, 87, 88];
numbers.forEach(num => console.log(num));
numbers.map(num => console.log(num * 2));

// for of on array like object
// loop on an object using for in 





// add or remove on array

const products = [
    { name: 'laptop', price: 30000, brand: 'HP', color: 'silver' },
    { name: 'phon', price: 10000, brand: 'samsung', color: 'black' },
    { name: 'laptop', price: 25000, brand: 'asus', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'iphon', color: 'pink' },
    { name: 'dress', price: 1000, brand: 'jamdani', color: 'white' },
    { name: 'book', price: 300, brand: 'update', color: 'purpole' },
    { name: 'laptop', price: 50000, brand: 'iphon', color: 'silver' }
]

const newProduct = { name: 'webcame', pirce: 700, brand: 'samsung' }

// copy projucts array then add new priduch

const newProducts = [...products, newProduct];
console.log(newProducts);




//create a new array without one specfific item
// remove phone means create a new array without the item

const remaining = products.filter(p => p.name !== 'phon');
console.log(remaining);

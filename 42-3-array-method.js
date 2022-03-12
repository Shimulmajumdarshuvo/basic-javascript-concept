const products = [
    { name: 'laptop', price: 30000, brand: 'HP', color: 'silver' },
    { name: 'phon', price: 10000, brand: 'samsung', color: 'black' },
    { name: 'laptop', price: 25000, brand: 'asus', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'iphon', color: 'pink' },
    { name: 'dress', price: 1000, brand: 'jamdani', color: 'white' },
    { name: 'book', price: 300, brand: 'update', color: 'purpole' },
    { name: 'laptop', price: 50000, brand: 'iphon', color: 'silver' }
]

//map ............map array hisabe return kore
const result = products.map(product => product.name);
console.log(result);


// forEach .......property gula show kore but array hisabe return kore nah


products.forEach(popduct => console.log(popduct));
products.forEach(popduct => console.log(popduct.price));


// filter ......condition er moto kaj kore ,,,je jula match korbe je gula array ar moddhe return kore dibe


const prices = products.filter(product => product.price <= 5000);
console.log(prices);



//filter .....spacific letter ase ki ai ta filter diye then includes korte hobe ,,match korle saita console kore dakhabe 


const namerMatch = products.filter(product => product.name.includes('s'));
console.log(namerMatch);


//find .... find er kaj hocce khuje ber kora ...first jaita pabe  saita  print kore dakhabe

const special = products.find(p => p.name.includes('p'));

console.log(special)

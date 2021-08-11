// think in Javascript

/* 
recursion function :- Recursion is a process of calling itself. A function that calls itself is called a recursive function.
*/

// add calculated recursion function
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(10));

// factorial calculated recursion function
function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    return factorial(fact - 1) * fact;
}
console.log(factorial(5));

// fibonacci series calculated recursion function 
function fibonacci(fibo) {
    if (fibo == 0) {
        return 0;
    }
    if (fibo == 1) {
        return 1;
    }
    
    return fibonacci(fibo - 1) + fibonacci(fibo - 2);
}
console.log(fibonacci(6));


/* 
For in Loop and For of Loop
*/

// For of Loop
const names = ['s1', 's2', 's3', 's12', 123];

    for (const name of names) {
        console.log(name);
    }

// For in Loop 

const students={
    Id : 101,
    Name : 'Md shafikul islam',
    CGPA : 3.35
};
for(let x in students) {
    console.log(`${x} : ${students[x]}`);
}


// Find the matching product by searching products
const products = [{
        name: 'Mi note 5 pro phone',
        price: 24000
    },
    {
        name: 'Mi note 6 pro phone',
        price: 28000
    },
    {
        name: 'Nokia 1200',
        price: 4000
    },
    {
        name: ' Vivo A3 phone',
        price: 24000
    },
    {
        name: 'Max pro 1A',
        price: 24000
    }
];


function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}

const matchedProduct = searchProducts(products, 'phone');
console.log(matchedProduct);


/*
মনে করো  একটা Array  ভিতরে এলিমেন্ট হিসেবে object থাকবে। তোমার কাজ হচ্ছে একটা ফাংশন লেখা যে ফাংশনের কাজ হচ্ছে কোন একটা Array 
কে সে ইনপুট হিসেবে নিবে সেই Array ভিতরে object থাকলে সেই objectের প্রপার্টি ও ভ্যালুকে এক্সেস করে তা array আকারে পাঠাবে।
*/
// problem solving jam

const person = [{
        name: 'John',
        age: 34
    },
    {
        name: 'shafikul',
        age: 36
    },
    {
        name: 'Rubel',
        age: 36
    },
    {
        name: 'fahim',
        age: 36
    }
];

function objectAccess(person) {
    const values = [];

    for (let i = 0; i < person.length; i++) {
        let text = '';
        const element = person[i];
        for (let property in element) {
            text += property + ' : ' + element[property] + ' ,'
        }
        values.push(text);
    }
    return values;
}

console.log(objectAccess(person));






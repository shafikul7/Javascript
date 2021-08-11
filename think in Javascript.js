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






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

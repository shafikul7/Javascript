// Document Object Model

// Returns a reference to the element by its ID.
document.getElementById('someid');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI');

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass');

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');

// create new elments
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode('This is a nice header text!');
var pText= document.createTextNode('This is a nice paragraph text!');

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.

// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);


// 
const newButton = document.getElementById("buttonJs1");
newButton.onclick = makeButtonClick;

function makeButtonClick() {
    document.body.style.backgroundColor = "red";
}

// 
const newButton1 = document.getElementById("buttonJs2");
newButton1.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// 
document.getElementById("buttonJs3").addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow"
})

// 
function functionOne() {
    const onOne1 = document.getElementById("cking");
    onOne1.innerText = 'set by using by function';
}
// 
document.getElementById("delete-confirm").addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById("delete-btn");
    if (event.target.value == 'delete') {
        deleteBtn.removeAttribute('disabled');
    } else {
        deleteBtn.setAttribute('disabled', true);
    }
});

document.getElementById("login-Submit").addEventListener("click", function () {
    //get user gmail
    const emailField = document.getElementById("user-gmail");
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    // condition
    if (userEmail == 'shafikul@gmail.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }
})


//banking
// bank user
const depositAmount = document.getElementById("deposit-btn").addEventListener('click', function () {
    // input depositAmount
    const depositAmountInput = document.getElementById("depositInput");
    const depositAmountInputText = depositAmountInput.value;
    const previousDepositInput = parseFloat(depositAmountInputText)
    // current deposit
    const depositInputAccount = document.getElementById("depositTotal");
    const depositText = depositInputAccount.innerText;
    const previousDeposit = parseFloat(depositText);
    depositInputAccount.innerText = previousDeposit + previousDepositInput;
    // balance update
    const balanceUpdate = document.getElementById("balance-total");
    const balanceTotalText = balanceUpdate.innerText;
    const previousDepositBalance = parseFloat(balanceTotalText);
    balanceUpdate.innerText = previousDepositInput + previousDepositBalance;
    // clear input field
    depositAmountInput.value = ' ';
});
// withdraw
const withdrawAmount = document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmountInput = document.getElementById("withdrawInput");
    const withdrawAmountText = withdrawAmountInput.value;
    const previousWithdrawBalance = parseFloat(withdrawAmountText);
    // withdraw current deposit
    const withdrawInputAmount = document.getElementById("withdrawTotal");
    const withdrawAmountInnerText = withdrawInputAmount.innerText;
    const previousWithdrawNumber = parseFloat(withdrawAmountInnerText);
    withdrawInputAmount.innerText = previousWithdrawNumber + previousWithdrawBalance;
    // balance update
    const balanceUpdate = document.getElementById("balance-total");
    const balanceTotalText = balanceUpdate.innerText;
    const previousDepositBalance = parseFloat(balanceTotalText);
    balanceUpdate.innerText = previousDepositBalance - previousWithdrawBalance;
    // clear input field
    withdrawAmountInput.value = ' ';

});
//
// SyntaxError::

// যখন  কোডে কোনো  মিসিং থাকে  অথবা  কোনো সিনটেক্সট ভুল (ব্রাকেট ,কোলন ,সেমিকোলন) থাকে  তখন  সিনটেক্সট এরর দেয় 


// solution=>সল্যুশন এর  উপায় হচ্ছে  কোড  কমেন্ট করে  করে  বের করা  যে  আসলে  আমাদের   কোডের  কোন  অংশে  এরর টা দিচ্ছে  তাহলে  খুব  দ্রুত  সল্ভ করে ফেলা যাবে 

SyntaxError: Identifier 'a' has already been declared
const a= 5;
const a= 5;

function sum(a,b) {
    const total=a+b;
    return  total;
}
const result=sum(1,3);
console.log(result)

// 1) মাঝে মাঝে  অবজেক্ট এর মধ্যে  কোলন মিস্টেকে করে সেমিকোলন দিয়ে  দেই 
const obj={
    name:"kolim uddin"
}
const result= obj.name;
console.log(result)



// ReferenceError
// In JavaScript, a reference error is thrown when a code attempts to reference a non-existing variable.

// অর্থাৎ  খাঁটি বাংলায়  আমরা যখন  কোনো ভ্যারিয়েবল  বা  এক্সপ্রেশন  ব্যবহার  করি যা   আসলে  এক্সিস্ট না  তখন  রেফেরারেন্স  এরর  দিবে 
// Uncaught ReferenceError: Cannot access 'a' before initialization


console.log(a) // hoisting
const a= 5;
console.log(b)
var b=10;


// ReferenceError: b is not defined
const x= "hero alom";
console.log(b);


// ReferenceError: abcd is not defined
const abc="HelloReferenceError: abcd is not defined world";
console.log(abcd);

অবজেক্ট এর উপর  লুপ চালাইলে  not  iterable  এই  এরর  টা  দিবে 

const obj={name:"hello"};
obj.forEach(pd=>pd)


TypeError
var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}

// map  is not a function 
let obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

//আমরা যেই মেথড/প্রোপার্টি ব্যবহার করার ট্রাই করতেছি, সেটা বর্তমান টাইপ এর অব্জেক্ট এর উপর ব্যবহার করা যায় না।



// null  অথবা  undefine  এর  উপর  কিছু  সেট করতে গেলে  টাইপ এরর  দিবে ; কারণ  null  একটা  ভ্যালিড  অবজেক্ট  না 



// >TypeError: Cannot read property 'map' of undefined
const a= undefined;

a.map(pd=>pd);

a=null;
a.map(pd=>pd)


try{
    alert("i am from try block");
}
catch(err){
    alert("i am from catch block");
}
finally{
    alert("i am from finally block");
}

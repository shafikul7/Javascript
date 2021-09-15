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
// console.log(sum(10));

// factorial calculated recursion function
function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    return factorial(fact - 1) * fact;
}
// console.log(factorial(5));

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
// console.log(fibonacci(6));


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
// console.log(matchedProduct);

function addNumbers(num1, num2) {
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 45, 76, 198, 901);
// console.log(sum);


function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);

function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(1245);
// console.log(myBigBuddy);

if (friends.indexOf('Fox') != -1) {
    console.log('Lion exists');
}
else {
    console.log("Fox doesn't exists")
}
// includes
if (friends.includes('Lion')) {
    console.log('Lion exits using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);


// 
//যে রকম  আমাদের  ফ্যামিলির  সবাই  মিলে একটা  পরিবার    তাহলে  আমি যদি   বলি  পরিবার  তাহলে কি  বুঝবে  ?  যে  পরিবার এর  ভিতর  অনেকগুলা  পরিবার এর  সদস্য আছে  

const a=1;
const b=2;
const c=3;
const d=4;
const result = [a,b,c,d];
console.log(result);

const array=[1,2,3,4,5,6,7,8];

//একটা  এরে  এর  সব গুলা  উপাদান কে  কপি করার  জন্য  ...( থ্রি ডটস ) ব্যবহার   করতে হয়  যে টা কে আমরা  স্প্রেড অপারেটর বলি 
const numbers=[1,2,3,4];
console.log(...numbers);

const output =[...numbers,"hero alom"];
console.log(output)


const [first, second, third]=numbers;
console.log(first);



// লেট্  এবং  কনস্ট্যান্ট 

 const x=10;
 x = 200;          //এভাবে  আমরা  সরাসরি চেঞ্জ করতে পারবো না 
console.log(x)

 let y=20;
 y=40;          //কিন্তু আমরা  লেট্  কে  সরাসরি  চেঞ্জ করে  দিতে  পারি 
 console.log(y)

//যখন  আমরা  কোনো  ভ্যারিয়েবল এর মান আমরা  অনেক জায়গায়  ব্যবহার করবো কিন্তু  সরাসরি  চেঞ্জ করবো না  তাহলে  const  ভ্যারিয়েবল  ব্যবহার করবো  আর  যদি  চেঞ্জ করতে চাই  তাহলে  let  ব্যবহার করবো 




//Object
//অবজেক্ট  মানে  বস্তু 
 //আমরা যদি  কোনো কিছুর  বৈশিষ্ট  দিয়ে  বুঝতে চাই  তখন  আমাদের  অবজেক্ট  তৈরী  করতে  হয়  
//আর  বৈশিষ্ট  কিন্তু    অনেক  হইতে পারে 


const mobile={
    id:01,
    name:"apple",
    price:300,
    color:"black",
    madeIn:"china",
    IMEI:"1245478546"
}

console.log(mobile);

// অবজেক্ট এর প্রপার্টি / ভ্যালু  গুলা কে আমরা কিভাবে  একসেস  করবো ?

//এখানেই  আমরা চাইলে  অবজেক্ট  ডিস্ট্রাক্চারিং  ব্যবহার করবো 

const price=mobile.price;
console.log(price);

const {price,name} = mobile;
// console.log(price)




// for loop 

const numbers=[1,2,3,4,5,6,7,8];

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])

//আমরা এত্ত বার  না  করে শুধু ফর লুপ ব্যবহার করে  করে  ফেলতে   পারি 

for (let i = 1; i < numbers.length; i++) {
    const element = numbers[1];
    console.log(element);
}



//Arrow Functions

function sum(num1,num2){
    const result=num1+num2;       //আমরা চাইলে  সরাসরি  রিটার্ন করতে পারি 
    return result;
}

const result =function(num1,num2){
    return num1 + num2;
};
console.log(result(10,20))


const result=(num1,num2)=>{
    return num1 + num2;
}

console.log(result(10,20));

const result2=(num1,num2)=>num1 + num2;
console.log(result2(15,17));






//If , else-if, else  Statement

const num1=5;

if (num1 %2 == 0) {
    console.log("this is even")
}
else{
    console.log("this is odd");
}

//যখন  অনেক  গুলা   কন্ডিশন  ব্যবহার করতে হবে  তখন  আমরা  else if  ব্যবহার করবো 

const num2=0;

if (num2 > 0) {
    console.log("this is positive number")
}
else if(num2<0){
    console.log("this is negative number");
}
else{
    console.log("this is Zero")
}

//তাহলে  এখনই    টারনারী  অপারেটর  নিয়ে  আলোচনা করে ফেলি 

num2>0?console.log("this is positive number"):console.log("this is negative number");

//মাল্টিপল  কন্ডিশন  with  টারনারী  অপারেটর 
num2>0?console.log("this is positive number"):num2<0 ?console.log("this is negative number"):console.log("this is Zero");
//মাল্টিপল  কন্ডিশন এর জন্য  টারনাড়ি  অপারেটর   স্ট্যান্ডর্ড না   if  else  দিয়ে  করা  স্ট্যান্ডার্ড 

// লেটার গ্রেড কিভাবে  বের  করবেন  







// ম্যাপ কি ?  কিভাবে  কাজ করে ?


// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে 
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে। 
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে


const numbers = [1, 2, 4, 6, 5, 10];

function sum(x) {
  return x * x;
}
const result = numbers.map(
  (x = function (x) {
    return x * x;
  })
);
// console.log(result);

// এক লাইনেই  ম্যাপ করে   ফেলা 
const output = numbers.map(x => x * x);
console.log(output)






// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে  

const numbers = [1, 2, 4, 6, 5, 10];
const newArray = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = sum(element);
  newArray.push(result);
}

console.log(newArray)


// এক লাইনেই  ম্যাপ করে   ফেলা 
const output = numbers.map(x => x * x);
console.log(output)










//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
    {id:1,name:"apple",price:500,color:"golden"},
    {id:2,name:"xiaomi",price:124,color:"black"},
    {id:3,name:"samsung",price:200,color:"black"},
    {id:4,name:"samsung2",price:200,color:"black"},
    {id:5,name:"lenovo",price:300,color:"pink"},
    {id:6,name:"xiaomi",price:100,color:"pink"},
    {id:7,name:"lenovo",price:300,color:"pink"},
]

const output = products.filter(pd => pd.name == "lenovo");
console.log(output)


// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া 
const output = products.filter(pd => pd.color !== "pink");
console.log(output)



// ভিন্ন চোখে  ফিল্টার  কে দেখা  (এডভান্স )

// filter with three arguments


const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2.filter(function (element,index,arr) {
    console.log(index);
    console.log(arr)
    return element > 2;
})
console.log(result)







// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

const output = products.find(pd => pd.color == "black");
console.log(output)

//একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে 









//সময় চলে এসেছে  callback  function  নিয়ে  কিছু কথা  বলার 


function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}

function greetMorning(name) {
    console.log('Good morning', name);
}


welcomeMessage('Tom Hanks', greetMorning);

// 
// const result = [1,2,3,4,5,6,7,8,9,10,11];

// // console.log(...result)

// const newArray=[...result,"hero alom"];
// console.log(newArray)

// const numbers=[10,20,30,40,50,60];

// const [first, second, third, fourth]=numbers;

// console.log(first)

// let x=10;
// x=20;
// console.log(x)

// function sum(num1) {
//     const result ="dsdsdsdsd";
// console.log(result)
// }

// sum()





//Object
//অবজেক্ট  মানে  বস্তু 
 //আমরা যদি  কোনো কিছুর  বৈশিষ্ট  দিয়ে  বুঝতে চাই  তখন  আমাদের  অবজেক্ট  তৈরী  করতে  হয়  
//আর  বৈশিষ্ট  কিন্তু    অনেক  হইতে পারে 


// const mobile={
//     id:01,
//     name:"apple",
//     price:300,
//     color:"black",
//     madeIn:"china",
//     IMEI:"1245478546",
//     friends:["hero","alom","bd"]
// }

// const friends = mobile.friends;


// for(friend of friends){
//     console.log(friend)
// }
// console.log(mobile);

// const name= mobile.name;
// const price= mobile.price;

// const {name,price}= mobile;

// console.log(name,price)







// অবজেক্ট এর প্রপার্টি / ভ্যালু  গুলা কে আমরা কিভাবে  একসেস  করবো ?

//এখানেই  আমরা চাইলে  অবজেক্ট  ডিস্ট্রাক্চারিং  ব্যবহার করবো 

// const price=mobile.price;
// console.log(price);

// const {price} = price;
// console.log(price)





// loop 

// const numbers=[1,2,3,4,5,6,7,8];
// numbers[0]

// for(let i=0; i<numbers.length; i++){
// const element = numbers[i];
// console.log(element)
// }



// const num1=5;


// if (num1 % 2 == 0) {
//     console.log("this is even")
// }
// else{
//     console.log("this is odd");
// }


// const num2 = 0;


// const result= num2>0 ? "positive":num2<0 ? "negative" :"zero"

// console.log(result)





// if(num2>0){
// console.log("positive");
// }

// else if (num2<0) {
//     console.log("negative")
// }
// else{
//     console.log("tumi akta zero")
// }





// if (num2 > 0) {
//     console.log("this is positive number")
// }
// else if(num2<0){
//     console.log("this is negative number");
// }
// else{
//     console.log("this is Zero")
// }







// arrow  =>


// function sum(num1,num2) {
//      return num1 +num2;
// }


// const sum2=(num1,num2)=>{
//     const result= "hero alom";
//     return result;
// };

// const output= sum2(15,17);
// console.log(output)



// const numbers = [{name:"hero aalom"}, 2, 4, 6, 5, 10];



// function sum(x) {
//   return x * x;
// }

// const result = numbers.map((x)=>x * x);

// console.log(result)





//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |
// const result =products.filter(pd=>pd.price!==200)
// console.log(result)








// const products = [
//     {id:1,name:"apple",price:500,color:"golden"},
//     {id:2,name:"xiaomi",price:124,color:"black"},
//     {id:3,name:"samsung",price:200,color:"black"},
//     {id:4,name:"samsung2",price:200,color:"black"},
//     {id:5,name:"lenovo",price:300,color:"pink"},
//     {id:6,name:"xiaomi",price:100,color:"pink"},
//     {id:7,name:"lenovo",price:300,color:"pink"},
// ]

// const result =products.find(pd=>pd.color=="black")
// console.log(result)





// function welcomeMessage(name, greetHandler) {
//     greetHandler(name)
// }

// function  greetMorning(name){
// console.log("good evening ", name)
// }

// welcomeMessage("hero alom",greetMorning)



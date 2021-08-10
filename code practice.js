//Exercicio 1:
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};
const { rua, numero, bairro, cidade, uf } = endereco;
console.log(`O usuário mora em ${cidade} / ${uf}, no bairro
${bairro}, na rua "${rua}" com nº ${numero}.`);

/*--------------------------------------------------------------------------------------------------*/
//Exercicio 2:
const pares = (x, y) => {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
pares(1, 20);
/*--------------------------------------------------------------------------------------------------*/
//Exercicio 3:
const validaSkill = skills => {
  if (skills.indexOf("Javascript") !== -1) {
    return console.log("Tem a skill");
  } else {
    console.log("Não tem a skill");
  }
};
var skills = ["Boostrap", "React", "CSS", "HTML"];
validaSkill(skills);
validaSkill([...skills, "Javascript"]);
/*--------------------------------------------------------------------------------------------------*/
//Exercício 4:
const calcExp = age => {
  switch (true) {
    case age >= 0 && age <= 1:
      console.log(`Você tem ${age} anos de exp, seu nível é: Iniciante`);
      break;
    case age >= 1 && age <= 3:
      console.log(`Você tem ${age} anos de exp, seu nível
é: Intermediário`);
      break;
    case age >= 3 && age <= 6:
      console.log(`Você tem
${age} anos de exp, seu nível é: Avançado`);
      break;
    default:
      console.log(`Você
tem ${age} anos de exp, seu nível é: Jedi Master `);
      break;
  }
};
calcExp(1);
calcExp(3);
calcExp(6);
calcExp(10);
/*--------------------------------------------------------------------------------------------------*/
//Exercício 5

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
];

const showMessage = usuarios => {
  for (const user of usuarios) {
    const { nome, habilidades } = user;
    console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
  }
};


/*

1st problem solving (seerToMon)

*/

// seerToMon function
function seerToMon(seerInputNumber) {
    let counter = 0;
    if (seerInputNumber > counter) {
        const monCalculated = seerInputNumber / 40;
        return monCalculated;
    } else if (seerInputNumber < counter) {
        //error message 
        return 'Your input is incorrect ,Please input the 0 greater than Number';
    } else {
        //error message 
        return 'Your input is incorrect';
    }
}
//function called seerToMoon
let monCount = seerToMon(400);
// output printed
console.log(monCount);



/*

2nd problem solving (totalSales)

*/

// totalSales function
function totalSales(shirtsquantity, pantsquantity, shoesquantity) {
    // custom variables
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    const count = 0;

    if (perShirtPrice > count && perPantPrice > count && perShoePrice > count) {
        let totalShirtsPrice = shirtsquantity * perShirtPrice;
        let totalPantsPrice = pantsquantity * perPantPrice;
        let totalShoesPrice = shoesquantity * perShoePrice;

        let totalSalesPrice = totalShirtsPrice + totalPantsPrice + totalShoesPrice;
        return totalSalesPrice;
    } else {
        //error message
        return 'Your input is incorrect ,Please input the 0 greater than Number';
    }
}
//function called
const totalPriceAmount = totalSales(5, 2, 1);
// output printed
console.log(totalPriceAmount);

/*

3rd problem solving (deliveryCost)

*/


// numberOfShirts function
function deliveryCost(numberOfShirts) {
     // custom variables
    const shirt100 = 100;
    const shirt200 = 80;
    const shirt300 = 50;
    if (numberOfShirts > 0) {
        if (numberOfShirts <= 100) {
            let shirtFirstCount = numberOfShirts * shirt100;
            return shirtFirstCount;
        } else if (numberOfShirts <= 200) {
            const firstCount = 100 * shirt100;
            const secondCount = numberOfShirts - 100;
            const thirdCount = secondCount * shirt200;
            const totalCount = firstCount + thirdCount;
            return totalCount;
        } else {
            const firstCount1 = 100 * shirt100;
            const firstCount2 = 100 * shirt200;
            const secondCount1 = numberOfShirts - 200;
            const thirdCount1 = secondCount1 * shirt300;
            const totalCount2 = firstCount1 + firstCount2 + thirdCount1;
            return totalCount2;
        }
    }else{
         //error message
        return 'Your input is incorrect ,Please input the 0 greater than Number ';
    }
}
// function called
const totalDeliveryCost = deliveryCost(230);
// output printed
console.log(totalDeliveryCost);

/*

4th problem solving (perfectFriend)

*/
function perfectFriend(friends) {

    const firstFriend = friends;

    for (let i = 0; i < friends.length; i++) {
        // error message
        if (!friends.length) {
            return 'Your input is incorrect ,Please input array String'
        }
        if (friends[i].length == 5) {
            return firstFriend[i];
        }
    }
}
//function called
const friendsArray = ['shafikul', 'Rubel', 'shakil', 'Farzana', 'Rahim', 'babu'];
// output printed
console.log(perfectFriend(friendsArray));

//2D Array
// first array equivalent to rows 
let a = new Array(3);

// inner array equivalent to columns
for (i=0; i < a.length; i++) {
  a[i] = new Array(2);
}

// now assign values
a[0][0] = "1";
a[0][1] = "2";

a[1][0] = "1";
a[1][1] = "2";

a[2][0] = "1";
a[2][1] = "2";

let out = "";
for (let i=0; i < a.length; i++) {
  for (let j=0; j < a[i].length; j++) {
    out = out + a[i][j];
  }
}

console.log(output);


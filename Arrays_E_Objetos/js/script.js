//1 - arrays
/*const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const arr = ["a", "b", "c", "d", "d"]

console.log(arr[0])


//2 - propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers['length']);

const myName = "Pablo";

console.log(myName.length);


//4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text ="algum texto";

console.log(text.toLocaleUpperCase());

console.log(text.indexOf("g"));


//5 - objetos
const person = {
    name: "Pablo",
    age: 21,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);


//6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);


//7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

console.log(obj2);

Object.assign(obj2, obj)

console.log(obj2);


//8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));


//9 -  Mutação
const a ={
    name: "Pablo",
};
const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a)
console.log(b);

delete b.age;

console.log(b);



//10 - Loop em Array
const users = ["Pablo", "Miguel", "Bastos","Souza"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}


//11 - push e pop

const array = ["a", "b", "c"]

console.log(array)

array.push("d", "e")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const intemRemovido = array.pop()
console.log(intemRemovido)

console.log(array)


console.log("\n 12 - shift e unshift")
//12 - shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")

console.log(letters)


//13 - indexOf e lastIndexOf
console.log("\n 13 - indexOf e lastIndexOf")
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))


//14 - Slice
console.log("14 - Slice")
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(subArray)
console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3)

const subArray4 = testeSlice.slice(2)
console.log(subArray4)


//15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero)=>{
    console.log(`O número é ${numero}`);
});

const posts =[
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
    {title: "Quarto post", category: "Java"},
];

posts.forEach((post) =>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

//16 - includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))
console.log(brands.includes("Kia"))

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW!")
}


//17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

//Para Strings V V V

//18 - Trim
const trimTeste = " testando \n  "

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length);


//19 - PadStart
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);


//20 - Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase);


//21 - Join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)


//22 - repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));
//Fim de operações para String


//23 - Rest Parameters/Rest Operator
const somaInfinita = (...args) => {

    let total = 0;

    for(let i =0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 420, 572, 1803));


//24 - For of
const somaInfinita2 = (...args) =>{

    let total = 0

    for(num of args){
        total += num;
    }

    return total
}

console.log(somaInfinita2(1, 2, 3, 4));

console.log(somaInfinita2(5, 35, 22));


//25 - Destructuring em objetos
const userDetails = {
    firstName: "Pablo",
    lastName: "Souza",
    job: "Programador"
}

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

//renomear varíaveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName)

console.log(primeiroNome)


//26 - Destructuring em Arrays
const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA)
console.log(veiculoB)
console.log(veiculoC)*/ 


//27 - Json
const myJson = '{"name": "Pablo", "age": 21, "skills": ["Java", "HTML", "JavaScript"]}';


//28 - JSON para objeto & objeto para JSON
const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

//json invalido
//const badJson = '{"name": Pablo, "age": 21}'

//const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);
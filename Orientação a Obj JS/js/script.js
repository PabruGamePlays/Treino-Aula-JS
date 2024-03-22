//1 - metodos
/*const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au Au");
    },
};

console.log(animal.nome)

animal.latir();


//2 - aprofundando em metodos
const pessoa = {
    nome: "pablo",

    getNome: function(){
        return this.nome;
    },

    setNome: function (novoNome){
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Miguel");

console.log(pessoa.getNome());


//3 - prototype
const text = "Ads"

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));


//4 - mais sobre prototype
const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);*/


//5 - classes basicas
const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bullDog = Object.create(cachorro);

bullDog.raca = "BullDog";

console.log(bullDog);


//6 - função com classe - função construtura
function criarCachorro(nome, raca){

    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira Lata");

console.log(bob)

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));
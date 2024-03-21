/*const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par")
        return
    }

    console.log("Impar");
};

parOuImpar(5);

parOuImpar(10);

// mais sobre arrow functions
const raizQuadrada = (x) => {
    return x*x
}

console.log (raizQuadrada(4));

const raizQuadrada2 = (x) => x*x

console.log (raizQuadrada(5));

console.log (raizQuadrada(12));

const helloWorld = () => console.log("Hello World");

console.log(helloWorld());

// paramentro opcional
const multiplication = function(m, n){
    if(n === undefined){
        return m * 2
    } else{
       return m * n
    }
}

console.log(multiplication(5));

console.log(multiplication(2,4));

const greeting = (name) => {
    if(!name){
        console.log("Olá!")
    }

    console.log(`Olá ${name}`)
}

greeting();

greeting("Pablo");


// valor default

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Pablo"))

console.log(customGreeting("João", "Bom dia"))

const repeatText = (text, repeat = 2) => {

    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Agora repita 10 vezes", 10);

// Closure

function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction();

//mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n*m;
    }
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure (10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));*/
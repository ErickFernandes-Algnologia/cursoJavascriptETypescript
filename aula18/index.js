
function soma(n = 1, n1 = 1) {
    const resultado = n + n1;
    return resultado;

<<<<<<< HEAD
}

console.log(soma(4));
//arrow function
let media = (a, b, c) => {

    const mediaPontos = a + b + c / 3;
    const mediaFinal = mediaPontos.toFixed(2);

    if (mediaPontos >= 7) {
        return `meus parabéns vc tirou a pontuação ${mediaFinal}`;
    }
    else if (mediaPontos < 7 && mediaPontos >= 5) {
        return `Corre vc ainda tem chance de se superar, ganhe mais pontos, seu ponto atual é de ${mediaFinal}`;
    } else {
        return `Vc perdeu sua pontuação foi de ${mediaFinal}`
    }

}

console.log(media(10, 10, 10));
console.log(media(1, 5, 8));
console.log(media(5, 5, 7));


console.log("\nfunção de raiz quadrada: ")

//função anonima
const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz3 = a => a ** 1/3//raiz cúbica

console.log(raiz3(27));
=======

// saudacao("Erick")
// saudacao("José")
// saudacao("Maria")

// let fumcaoArrow = (nome) => {
    //     return `Seja bem vindo ${nome}`
    // }
    
    // let nomes = function(nome) {
        
        // }


// função que retorna uma string
// function saudacao(nome) {
//     return `Bom dia ${nome}!`
// }

// let variavel = saudacao("Luiz");

// console.log(variavel)


// função que retorna uma adição
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

>>>>>>> b608835d5abdd74b17a8800e165fc3b297ed468e

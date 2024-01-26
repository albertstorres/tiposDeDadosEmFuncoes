function imprimir(nome: string): string {  //FUNÇÃO QUE RECEBE STRING E RETORNA STRING
    return `Olá ${nome}`;
}

const imprimir2 = (nome: string): string => {//FUNÇÃO EM FLECHA QUE RECEBE STRING E RETORNA STRING
    return `Olá ${nome}`;
}

const imprimirMaiorIdade = (nome: string, idade: number, a: any): boolean => {  //FUNÇÃO COM PARÂMETROS DE TIPOS DIFERENTES E RETORNA UM BOOLEAN
    if (idade < 18) {
        return false;
    }
    return true;
}

const imprimirUsuario = (usuario: { nome: string, idade: number }): string => {  //FUNÇÃO QUE RECEBE UM OBJETO E RETORNA UMA DE SUAS PROPRIEDADE DO TIPO STRING
    return usuario.nome;
}

const imprimirArray = (array: string[]): string => { //FUNÇÃO QUE RECEBE UM ARRAY DO TIPO STRING E RETORNA UMA DE SUAS POSIÇÕES INDEX.
    return array[2];
}

const soma = (a: number, b: number): number => {
    return a + b;
}


console.log(imprimir("Anthony"));//ANTHONY
console.log(imprimir2("Albert"));//ALBERT
console.log(imprimirMaiorIdade("Sevy", 34, { nome: "Albert" }));//TRUE
console.log(imprimirUsuario({ nome: "Anthony", idade: 5 }));//ANTHONY
console.log(imprimirArray(["Albert", "Anthony", "Antonio"]));//ANTONIO
console.log(soma(5, 6));//11
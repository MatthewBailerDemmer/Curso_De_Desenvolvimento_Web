// Um array em JS é um objeto, que é uma função
// array literal = []
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Abia', 'Ana'];
aprovados.splice(1, 1)// 
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2');
console.log(aprovados)
//array.splice(de que indice comeca, quantos quero excluir, quantos quero adicionar)
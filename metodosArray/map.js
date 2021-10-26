// ==== M A P ==== //

let alunos = [
    'aNA julia', 'brenner', 'guSTavo', 'maria Fernanda'
];

const nomesAtualizados = alunos.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

console.log('\n === PONTO EXTRA ===');

const notas = [10, 9, 8.1, 7.6, 6];
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);
// ==== R E D U C E ==== //

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    return notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length;
}

console.log(' === MEDIA DAS SALAS ===');
console.log(`   JavaScript: ${mediaSala(salaJS)}`);
console.log(`   Java: ${mediaSala(salaJava)}`);
console.log(`   Python: ${mediaSala(salaPython)}`)

// const notas = [10, 6.5, 8, 7]
// const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length
// console.log(`\n ${media}`); 
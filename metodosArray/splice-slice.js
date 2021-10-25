// ==== SLICE() & SPLICE() ==== //

console.log('===== SLICE ===== \n');

const alunosMatriculados = [
    'Barbara', 'Brenner', 'Matheus', 'Emanoela', 'Maria Fernanda', 'Luis Felipe',
    'Guilherme', 'Brenda', 'Karina', 'Kaio', 'Daisy', 'Murilo', 'Gustavo'
];
    
const sala1 = alunosMatriculados.slice(0, alunosMatriculados.length/2);
const sala2 = alunosMatriculados.slice(alunosMatriculados.length/2);
    
console.log(`Sala 1 - ${sala1}`);
console.log(`Sala 2 - ${sala2} \n`);

console.log('===== SPLICE ===== \n');

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈', '🐒', '🦋'];

animaisDoAquario.splice(1,0,'🐠');
animaisDoAquario.splice(5,2,'🐟');

console.log(animaisDoAquario);

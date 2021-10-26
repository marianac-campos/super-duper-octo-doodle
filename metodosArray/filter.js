// ==== F I L T E R ==== //

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Alice'];
const notas = [9, 4.5, 8, 7.5, 3.8];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);

console.log(`REPROVADOS: ${reprovados}`);
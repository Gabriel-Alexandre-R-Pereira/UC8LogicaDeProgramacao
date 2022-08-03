//   Lista de Alunos: PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 14   //
let ListaAlunos = ['Amanda', 'Antônio', 'Antonio', 'Eduardo', 'Elioenai', 'Gabriel', 'Guilherme', 'Isaac', 'Júlio', 'Karina', 'Marcus', 'Matheus', 'Nelson', 'Pedro', 'Robson', 'Talita', 'Tamires', 'Tathyane', 'Thalia', 'Vinicius', 'Vinícius', 'Wilson'];

//   Contagem e Classificação de alunos da Lista de Alunos   //
for (let i = 0; i < ListaAlunos.length; i++) {

    if (i === 0) {
        console.log(`${ListaAlunos[i]}: Numero ${i + 1} - Impar`); // O sistema conta o indice da array a partir de 0, porém para o usuário a contagem começa a partir de 1, por isso "i + 1".
    } else if (i % 2 === 0) {
        console.log(`${ListaAlunos[i]}: Numero ${i + 1} - Impar`); // Mesmo que o resto da divisão de i por 2 seja 0, o que indica um número par, é apresentado como impar ao usuário, pois é somado 1 a i.
    } else {
        console.log(`${ListaAlunos[i]}: Numero ${i + 1} - Par`);
    }
}
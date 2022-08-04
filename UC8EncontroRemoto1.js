//   Lista de Peças   //
const Pecas = ['Furadeira', 'Martélo', 'Lajota', 'Tijolo', 'Cano', 'Chave de Fenda', 'Chave Inglesa', 'Fio', 'Torneira'];

//   Dados da Nova Peça   //
let NovaPeca = 'Voltímetro';
let NovaPecaGramas = 166;

//   Contagem e Critérios de Peças para Lista de Peças   //
if (Pecas.length < 10) {
    console.log(`Quantidade atual de peças: ${Pecas.length} / 10 - Sucesso.`);

    if (NovaPecaGramas > 100) {
        console.log(`Peso da peça ${NovaPecaGramas}g - Sucesso.`);

        if (NovaPeca.length > 2) {
            console.log(`Tamanho do nome da peça: ${NovaPeca.length} caracteres - Sucesso.`);
            Pecas.push(NovaPeca);
            console.log('Nova peça adicioada com sucesso.');
            console.log(Pecas);

        } else {
            console.log(`Tamanho do nome da peça: ${NovaPeca.length} caracteres - Falha.`);
            console.log('Falha ao adicionar nova peça. Tamanho do nome mínimo permitido de 3 caracteres.');
        }
    } else {
        console.log(`Peso da peça ${NovaPecaGramas}g - Falha.`);
        console.log('Falha ao adicionar nova peça. Peso mínimo permitido de 101g.');
    }
} else {
    console.log(`Quantidade atual de peças: ${Pecas.length} / 10 - Falha.`);
    console.log('Falha ao adicionar nova peça. Quantidade máxima suportada de 10 peças excedida.');
}
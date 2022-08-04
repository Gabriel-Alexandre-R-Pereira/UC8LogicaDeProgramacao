//   Dados da Data de Hoje   //
let DiaHoje = 4;
let MesHoje = 8;
let AnoHoje = 2022;

//   Dados do Novo Participante   //
let Nome = ' Exemplo Pessoa';
let Email = 'pessoa@exemplo.com';
let DiaNascimento = 31;
let MesNascimento = 12;
let AnoNascimento = 1999;

//   Verificação de idade do Novo Participante   //

let IdadeParticipante;

function CalcularIdade(DiaHj, MesHj, AnoHj, DiaNasc, MesNasc, AnoNasc) {
    IdadeParticipante = AnoHj - AnoNasc;

    if ((MesHj < MesNasc) ||
        ((MesHj == MesNasc) && (DiaHj < DiaNasc))) {
            
            IdadeParticipante -= 1;
    }
}

CalcularIdade(DiaHoje, MesHoje, AnoHoje, DiaNascimento, MesNascimento, AnoNascimento);

console.log(`Você tem ${IdadeParticipante} ano(s).`);

if (IdadeParticipante >= 18) {

    if ((MesHoje == MesNascimento) && (DiaHoje == DiaNascimento)) {
        console.log('Feliz Aniversário!');
    }
    console.log('Idade mínima de 18 anos - Sucesso');
    console.log(`Nome: ${Nome}`);
    console.log(`E-mail: ${Email}`);
    console.log('Registro efetuado com sucesso.');

} else {
    console.log('Idade mínima de 18 anos - Falha');

    if ((MesHoje == MesNascimento) && (DiaHoje == DiaNascimento)) {
        console.log('Feliz Aniversário! Porém.');
    }
    console.log('Cadastro apenas para pessoas a partir de 18 anos.');
    console.log('Em caso de nova tentativa de cadastro com data de nascimento falsa,');
    console.log('informamos que apresentação de RG é obrigatória na entrada do evento.');
}

//   Dados do Evento Desejado   //
let Evento = 'Exemplo de Evento';
let Palestrantes = ['Palestrante 1', ' Palestrante 2'];
let Participantes = ['Exemplo Pessoa 1', ' Exemplo Pessoa 2', ' Exemplo Pessoa 3', ' Exemplo Pessoa 4', ' Exemplo Pessoa 5'];
let LimiteParticipantes = 99;

let DiaEvento = 23;
let MesEvento = 11;
let AnoEvento = 2022;
let DataEvento = '' + ((DiaEvento < 10) ? '0' + DiaEvento : DiaEvento) + '/';
DataEvento += ((MesEvento < 10) ? '0' + MesEvento : MesEvento) + '/';
DataEvento += AnoEvento;

//   Verificação de Disponibilidade do Evento   //
if (IdadeParticipante >= 18) {

    if ((AnoEvento > AnoHoje) ||
        ((AnoEvento == AnoHoje) && (MesEvento > MesHoje)) ||
        ((AnoEvento == AnoHoje) && (MesEvento == MesHoje) && (DiaEvento > DiaHoje))) {
            console.log('Mínimo de 1 dia de antecedência para o evento - Sucesso');

            if (Participantes.length < LimiteParticipantes) {
                console.log(`Quantidade de participantes inscritos: ${Participantes.length} / ${LimiteParticipantes} - Sucesso`);

                Participantes.push (Nome);

                console.log(`Cadastro em evento ${Evento} efetuado com sucesso.`);
                console.log(`Palestrantes: ${Palestrantes}`);
                console.log(`Participantes: ${Participantes}`);
                console.log(`Data do evento: ${DataEvento}`);
                console.log('Você receberá novas informações e atualizações por e-mail.')

            } else {
                console.log(`Quantidade de participantes inscritos: ${Participantes.length} / ${LimiteParticipantes} - Falha`);
                console.log(`Número máximo de ${LimiteParticipantes} participantes excedido neste evento. Sugerimos escolher outro.`);
            }
    } else {
        console.log ('Mínimo de 1 dia de antecedência para o evento - Falha');

        if ((AnoEvento == AnoHoje) && (MesEvento == MesHoje) && (DiaEvento == DiaHoje)) {
            console.log('Este evento está acontecendo hoje. Sugerimos escolher outro.');
        } else {
            console.log('Este evento já aconteceu. Sugerimos escolher outro.');
        }
    }
}
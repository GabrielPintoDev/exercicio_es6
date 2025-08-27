const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 4 },
    { nome: "Carla", nota: 9 },
    { nome: "Lucas", nota: 6 },
    { nome: "Gabriel", nota: 10 }
];

function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
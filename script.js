// 1
const alunos = [
    { nome: "Kaue", estudando: true },
    { nome: "Felipe", estudando: false },
    { nome: "Gustavo", estudando: true }
  ];
  
  const escola = {
    curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    alunos,
    professor: "Welligton Cidade",
    turma: "1TDSPR",
    periodo: "Noite"
  };
 // a 
 const alunosEstudando = escola.alunos.filter(({ estudando }) => estudando);
 /*Saída: [
    {
        "nome": "Gustavo",
        "estudando": true
    },
    {
        "nome": "Kaue",
        "estudando": true
    }
 ]
 */
 //b 
 const aluno = alunos.find(({ nome }) => nome === "Gustavo");
 /*Saída: [
    {
        "nome": "Gustavo",
        "estudando": true
    },
 ]
 */
// 2
const funcionarios = [
    { 
        nome: "Felipe", 
        idade: 21, 
        sexo: "Masculino", 
        cargo: "Assistente administrativo", 
        salario: 2.900, 
        descontos: 400, 
        dataAdmissao: new Date('1999-02-27'), 
        dataDemissao: new Date("2014-11-02") 
    },
    { 
        nome: "Cristiano", 
        idade: 29, 
        sexo: "Masculino", 
        cargo: "Jornalista", 
        salario: 1.200, 
        descontos: 150, 
        dataAdmissao: new Date('2005-03-17'), 
        dataDemissao: new Date("2007-09-21") 
    },
    { 
        nome: "Katarina", 
        idade: 25, 
        sexo: "Feminino", 
        cargo: "Cozinheira", 
        salario: 2.700, 
        descontos: 280, 
        dataAdmissao: new Date('2017-02-01'), 
        dataDemissao: new Date("2019-04-10")  
    },
];
// a
    function estaNoIntervalo(data, inicio, fim) {
     return data.getFullYear() >= inicio && data.getFullYear() <= fim;
        }
  
    const admitidos = funcionarios.filter(item => estaNoIntervalo(item.dataAdmissao, 2000, 2010));
    /*Saída: [
        { 
        nome: "Cristiano", 
        idade: 29, 
        sexo: "Masculino", 
        cargo: "Jornalista", 
        salario: 1.200, 
        descontos: 150, 
        dataAdmissao: new Date('2005-03-17'), 
        dataDemissao: new Date("2007-09-21") 
    }
    ]
*/
// b
const demitidos = funcionarios.filter(({ dataDemissao }) => dataDemissao.getFullYear() > 2018);
/* Saída: [
    { 
        nome: "Katarina", 
        idade: 25, 
        sexo: "Feminino", 
        cargo: "Cozinheira", 
        salario: 2.700, 
        descontos: 280, 
        dataAdmissao: new Date('2017-02-01'), 
        dataDemissao: new Date("2019-04-10")  
    }
]
*/
// c 
const funcionario = funcionarios.map(({ nome, salario, descontos }) => ({ nome, salario, descontos }));
/* Saída: [
    {
        "nome": "Felipe",
        "salario": 2.9,
        "desconto": 400
    },
    {
        "nome": "Cristiano",
        "salario": 1.2,
        "desconto": 150
    },
    {
        "nome": "Katarina",
        "salario": 2.7,
        "desconto": 280
    }
]
 */
// d
const totalDesconto = funcionarios.reduce(
    (accumulator, { descontos }) => accumulator + descontos,
    0
);

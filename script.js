//1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
//O programa vai parar quando for digitada a idade 999. No final,
//mostre quantos alunos existem na turma e qual é a média de idade
//do grupo.

let alunos = 0;
let soma = 0;
let idade = 0;

while (idade != 999) {
    soma += idade;

    idade = Number(prompt("digite sua idade: "));

    if (idade === 999) {
        let media = soma / alunos;
        document.write(`<p>media de idade é ${media} </p>`);
        document.write(`<p>quantidade de alunos ${alunos}</p>`);
        }

    alunos++;
}

document.write('</br></br>')

// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
//funcionários. No final, mostre o total de salários pagos aos homens e
//o total pago às mulheres. O programa vai perguntar ao usuário se
//ele quer continuar ou não sempre que ler os dados de um
//funcionário.

let salarioHomens = 0;
let salarioMulheres = 0;
let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário "));
  let sexo = prompt("Digite o sexo (h ou m)");

  if (sexo === "h") {
    salarioHomens += salario;
  } else {
    salarioMulheres += salario;
  }

  continuar = confirm("Deseja continuar?");
}

document.write(`Total de salários pagos aos homens: R$${salarioHomens.toFixed(2)}<br>`)
document.write(`Total de salários pagos às mulheres: R$${salarioMulheres.toFixed(2)}<br>`);

document.write('</br></br>')

//3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
//o incremento, mostrando em seguida todos os valores no intervalo:
//Ex:
//Digite o primeiro Valor: 3
//Digite o último Valor: 10
//Digite o incremento: 2
//Contagem: 3 5 7 9 Acabou!

const numero1 = Number(prompt("insira o primeiro numero"));
const numero2 = Number(prompt("insira ultimo numero"));;
const numero3 = Number(prompt("insira o incremento"));;

for (let i = numero1; i <= numero2; i += numero3) {
    document.write(`${i} `);
}
document.write("Acabou!");

document.write('</br></br>')

//4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
//descontos para todos, mas especialmente para mulheres. Faça um
//programa que leia nome, sexo e o valor das compras do cliente e
//calcule o preço com desconto. Sabendo que:
//a. Homens ganham 5% de desconto
//b. Mulheres ganham 13% de desconto

let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo do cliente (h ou m):");
let valor = parseFloat(prompt("Digite o valor das compras do cliente:"));

if (sexo === "h") {
  valor *= 0.95;
} else {
  valor *= 0.87;
}

document.write(`O cliente ${nome} pagou: R$${valor.toFixed(2)}`);

document.write('</br></br>')

//5. Faça um algoritmo que pergunte a distância que um passageiro
//deseja percorrer em Km. Calcule o preço da passagem, cobrando
//R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
//longas.


let distância = Number(prompt("digite distancia: "));
if (distância < 200) {
    document.write(`Valor passagem é R$ ${distância * 0.5}`);
} else {
    distância > 200;
    document.write(`Valor passagem é R$ ${distância * 0.45}`);
}

document.write('</br></br>')

//6. Faça um programa que leia a largura e o comprimento de um
//terreno retangular, calculando e mostrando a sua área em m2. O
//programa também deve mostrar a classificação desse terreno, de
//acordo com a lista abaixo:
//Abaixo de 100m2 = TERRENO POPULAR
//Entre 100m2 e 500m2 = TERRENO MASTER
//Acima de 500m2 = TERRENO VIP


let comprimento = Number(prompt("digite o comprimento"));

let largura = Number(prompt("digite a largura"));

let area = comprimento * largura;
if (area < 100) {
    document.write("TERRENO POPULAR");
} else if (area > 100 && area < 500) {
    document.write("TERRENO MASTER");
} else {
    document.write("TERRENO VIP");
}
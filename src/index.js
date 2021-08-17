const readline = require("readline");

const sumAllMultiplesOf3And5SmallerThanValue = require("./sum_services");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro positivo: ", function (number) {
  const result = sumAllMultiplesOf3And5SmallerThanValue(number);
  console.log(
    `A soma de todos os números múltiplos de 3 e 5 menores do que ${number} é: ${result}.`
  );
  rl.close();
});

rl.on("close", function () {
  console.log("\nAté logo mais!");
  process.exit(0);
});

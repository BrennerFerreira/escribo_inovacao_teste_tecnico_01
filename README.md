# Teste técnico

Teste técnico desenvolvido com Javascript como requisito para a vaga de
Desenvolvedor Mobile Flutter.

## Descrição

O objetivo era escrever uma função que recebe como parâmetro um número inteiro,
positivo e retornar o somatório de todos os valores inteiros múltiplos de 3 ou 5
que sejam inferiores ao número passado.

Nenhum pacote externo foi utilizado para a construção do programa. O único
pacote externo é o `Jest`, utilizado para fazer os testes automatizados.

### Exemplos

Caso a função receba o inteiro 10, ela retornará o valor 23, resultante do
somatório dos números 3, 5, 6 e 9, que são menores do que 10.

Caso a função receba o inteiro 11, ela retornará o valor 33, resultante do
somatório dos números 3, 5, 6, 9 e 10, que são menores do que 11.

## Como rodar o programa

O prorama desenvolvido é um programa de linha de comando e, para rodá-lo, basta
seguir as instruções abaixo:

- Faça um clone do repositório.
- Abra um terminal dentro da pasta do projeto e rode o comando `npm install`.
- Rode o programa utilizando o comando `npm run start`.
- O programa irá te pedir para inserir um número e te retornará o resultado da
função.

## Estrutura

Todos os arquivos do programa estão dentro da pasta `src`. No arquivo `index.js`,
está a estrutura para rodar o programa na linha de comando, capturando o input
do usuário, inserindo na função como parâmetro e retornando o valor encontrado.

Para separar responsabilidades, a função que faz o cálculo da soma está separado
no arquivo `sumServices`. Primeiramente, a função valida se o valor informado
pelo usuário é realmente um número. Caso não seja, é retornado `undefined`.

Depois, há a validação se o valor informado é negativo. Caso seja, também é
retornado `undefined`.

Foram testados três tipos de loop para o cálculo da soma: utilizando `for`,
`forEach` e `reduce`. Utilizando do comando `console.time`, foi posível
verificar que o mais eficiente entre eles tanto para valores pequenos quanto
para valores grandes é o `for` loop. Apesar de o `forEach` ser um pouco mais
eficiente para valores pequenos, ele possa a ser muito mais lento para altos
valores. Por isso, optou-se por manter o `for` loop para este caso.

O loop passa por todos os valores menores do que o número informado. Caso o
resto da divisão do número por 3 ou por 5 seja zero, este valor é adicionado
à variável `totalSum`, que é devolvida ao final.

## Testes

Foram desenvolvidos testes simples para garantir que a função trabalha como
deveria. No arquivo `sumServices.test.js`, temos testes para verificar se a
função retorna o valor correto, caso o número inserido seja válido e também para
verificar se a função retorna `undefined`, caso o número informado seja negativo
ou se o parâmetro fornecido não é um número.

Para rodar os testes, basta utilizar o comando `npm run test`.

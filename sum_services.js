/**sumAllMultiplesOf3And5SmallerThanValue function receives a [value] as a
 * parameter and returns the sum of all numbers multiples of 3 and 5 that are
 * smaller than the value informed.
 * If the value informed is not a number or if it is negative, a string is
 * returned informing that the value is not valid.
 */
function sumAllMultiplesOf3And5SmallerThanValue(value) {
  const parsedValue = parseInt(value);

  if (isNaN(parsedValue)) {
    console.log(`Valor ${value} é inválido. Por favor, escreva um número.`);
    return;
  }

  if (parsedValue < 0) {
    console.log(
      `Valor ${value} é inválido. Por favor, escreva um número positivo.`
    );
    return;
  }

  let totalSum = 0;

  for (let i = 0; i < parsedValue; i++) {
    if (!(i % 3) || !(i % 5)) {
      totalSum += i;
    }
  }

  return totalSum;
}

module.exports = {
  sumAllMultiplesOf3And5SmallerThanValue,
};

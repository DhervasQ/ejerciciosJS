const numbersList = [];

const sum = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const father = (a, b, funcionLlamada) => {
  const resultado = funcionLlamada(a, b);
  numbersList.push(resultado);
};

father(8, 4, sum);
console.log(numbersList);
father(6, 2, substract);
console.log(numbersList);
father(1, 5, sum);
console.log(numbersList);
father(20, 110, substract);

console.log(numbersList);

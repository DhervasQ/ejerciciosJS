const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let toysAux = [];
for (const toy of toys) {
  if (toy.name.includes("gato")) {
    toysAux = toys.slice(0, toys.indexOf(toy) - 1);
  }
}
console.log(toysAux);
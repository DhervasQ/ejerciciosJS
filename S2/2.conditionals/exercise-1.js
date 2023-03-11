const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const key in alumns) {
  let contador = 0;
  if (alumns[key].T1 == true) {
    contador = contador + 1;
  }
  if (alumns[key].T2 == true) {
    contador = contador + 1;
  }
  if (alumns[key].T3 == true) {
    contador = contador + 1;
  }
  if (contador >= 2) {
    alumns[key].isApproved = true;
  } else {
    alumns[key].isApproved = false;
  }
  console.log(alumns[key]);
}

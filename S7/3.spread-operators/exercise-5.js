const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const copia = [colors[0],colors[1], ...colors.slice(3)];
console.log(copia)
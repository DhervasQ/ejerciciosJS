const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;
const [primeraItv, segundaItv, terceraItv] = itv;

console.log(
  `Primera ITV ${primeraItv} , Segunda ITV ${segundaItv}  y tercera ITV ${terceraItv} `
);

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
for (const key in products) {
  if (products[key].includes("Camiseta")) {
    console.log(products[key]);
  }
}

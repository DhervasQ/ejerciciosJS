let div = document.createElement("div");
div.textContent = "newdiv";
document.body.appendChild(div);

for (let index = 0; index < 6; index++) {
  let p = document.createElement("p");
  p.textContent = "un nuevo parrafo" + index;
  div.appendChild(p);
}

let divs$$ = document.querySelectorAll(".fn-insert-here");

divs$$.forEach(function (element) {
  let p = document.createElement("p");
  p.textContent = "texto en p";
  element.appendChild(p);
});

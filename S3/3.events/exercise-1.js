var handleClick = function (event) {
  console.log(event);
};
console.log(document.querySelector("btnToClick"));
document.querySelector("#btnToClick").addEventListener("click", handleClick);

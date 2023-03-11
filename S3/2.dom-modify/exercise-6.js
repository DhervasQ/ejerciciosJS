const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let ul = document.createElement("ul");
document.body.appendChild(ul);
for (let index = 0; index < apps.length; index++) {
  const li = document.createElement("li");
  li.textContent = apps["li"];
  ul.appendChild(li);
}

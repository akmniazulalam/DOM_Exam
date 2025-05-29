let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let ul = document.getElementById("ul");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Enter A Value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});

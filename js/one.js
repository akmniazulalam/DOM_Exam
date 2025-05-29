let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let form = document.getElementById("form");


addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Enter A Value");
  } 
  else {
    let ul = document.createElement("ul");
    form.appendChild(ul)
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});

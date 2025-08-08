let detail = document.querySelector(".details");
let left = document.querySelector(".left");

const description = document.getElementById("description");
const amount = document.getElementById("amount");
function addTranction(event) {
  event.preventDefault();
  const newCard = document.createElement("div");
  newCard.classList.add("details");
  let p1 = document.createElement("p");
  p1.textContent = description.value;
  p1.classList.add("name");

  let p2 = document.createElement("p");
  p2.textContent = amount.value;
  p2.classList.add("amt");
  newCard.appendChild(p1);
  newCard.appendChild(p2);
  left.appendChild(newCard);
  description.value = "";
  amount.value = "";
}

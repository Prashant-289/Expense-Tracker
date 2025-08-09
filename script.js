let detail = document.querySelector(".details");
let left = document.querySelector(".left");

const description = document.getElementById("description");
const amount = document.getElementById("amount");

let totalAmt = document.querySelector(".tamount");
let incomeAmt = document.querySelector(".incomeamt");
let expenseAmt = document.querySelector(".expenseamt");

let totalAmtNum = Number(totalAmt.textContent);
let incomeAmtNum = Number(incomeAmt.textContent);
let expenseAmtNum = Number(expenseAmt.textContent);

function addTranction(event) {
  event.preventDefault();
  const newCard = document.createElement("div");
  newCard.classList.add("details");
  let p1 = document.createElement("p");
  p1.textContent = description.value;
  p1.classList.add("name");

  let p2 = document.createElement("p");
  if (amount.value < 0) {
    p2.textContent = `-$${Math.abs(amount.value)}`;
  } else {
    p2.textContent = `$${amount.value}`;
  }
  let img = document.createElement("i");
  img.classList.add("fa-solid", "fa-trash");
  p2.classList.add("amt");

  let newDiv = document.createElement("div");
  newDiv.classList.add("deleteicon");

  newCard.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.appendChild(img);
  newCard.appendChild(newDiv);
  left.appendChild(newCard);

  totalAmtNum = 0;
  incomeAmtNum = 0;
  expenseAmtNum = 0;

  let transactionAmt = document.querySelectorAll(".amt");
  transactionAmt.forEach((tAmt) => {
    let value = Number(tAmt.textContent.replace("$", ""));

    if (value < 0) {
      expenseAmtNum += value;
    } else {
      incomeAmtNum += value;
    }
    incomeAmt.textContent = incomeAmtNum;
    expenseAmt.textContent = expenseAmtNum;
    totalAmt.textContent = incomeAmtNum + expenseAmtNum;
  });

  description.value = "";
  amount.value = "";
}

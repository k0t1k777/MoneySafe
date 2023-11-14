import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const financeReport = document.querySelector(".finance__report");
const report = document.querySelector(".report");

let amount =   0;
financeAmount.textContent = amount;

financeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const typeOperation = evt.submiter.dataset.typeOperation;

  const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

  if (typeOperation === "income") {
    amount += changeAmount;
  }

  if (typeOperation === "expenses") {
    amount -= changeAmount;
  }

  financeAmount.textContent = `${amount.toLocaleString()} руб.`;
});


financeReport.addEventListener("click", () => {
  report.classList.add("report__open")
});

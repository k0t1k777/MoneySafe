import { convertStringNumber } from "./convertStringNumber.js";
const API_URL = "https://substantial-heady-sort.glitch.me/api";

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const financeReport = document.querySelector(".finance__report");
const report = document.querySelector(".report");
const reportOperationList= document.querySelector(".report__operation-list");

let amount = 0;
financeAmount.textContent = amount;

const getData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`);
if (!response.ok) {
  throw new Error("HTTP error, status: ${response.status");
}
return await response.json()
  } catch (error) {
      console.error("Ошибка при получении данных", error);
      throw error;
      }
}

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

const closeReport = ({ target }) => {
  if (
    target.closest(".report__close") ||
    (!target.closest(".report") && target !== financeReport)
  ) {
    report.classList.remove("report__open");
    document.removeEventListener("click", closeReport);
  }
};

const openReport = () => {
  report.classList.add("report__open");
  document.addEventListener("click", closeReport);
};

const renderReport = (data) => {
  reportOperationList.textContent = ""
  const reportRows = data.map(item => {
    console.log('reportRows: ', reportRows);

  })
}

financeReport.addEventListener("click", async () => {
  openReport();
  const data = await getData("/test")
  // console.log('data: ', data);
  renderReport(data);
});

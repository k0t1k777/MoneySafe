export const convertStringNumber = (str) => {
    const noSpaceStr = str.replace(/\s+/g, "");
    const num = parseFloat(noSpaceStr);
    if (!isNaN(num)  && isFinite(num)) {
    return num
  } else {
    return false
  }
}

// financeReport.addEventListener("click", () => {
//   report.classList.add("report__open");
// document.addEventListener("click", ({ target }) => {
//   if (
//     target.closest(".report__close") ||
//     (!target.closest(".report") && target !== financeReport)
//   ) {
//     report.classList.remove("report__open");
//   }
// });
// });
document.addEventListener("DOMContentLoaded", () => {
  const incomeInput = document.querySelector("#income");
  const calculateButton = document.querySelector("#calculate");
  const taxOwed = document.querySelector("#taxOwed");

  function calculateTax() {
    const income = parseInt(incomeInput.value);
    let tax = 0;

    if (income <= 9275) {
      tax = income * 0.1;
    } else if (income <= 37650) {
      tax = 927.5 + (income - 9275) * 0.15;
    } else {
      taxOwed.textContent =
        "This calculator only handles the first two tax brackets.";
      return;
    }

    taxOwed.textContent = tax.toFixed(2);
  }

  calculateButton.addEventListener("click", calculateTax);
});

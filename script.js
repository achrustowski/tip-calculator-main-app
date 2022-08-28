const billAmount = document.getElementById("bill-total");
const noOfPeople = document.getElementById("people-number");
const tipPerson = document.getElementById("tip-person");
const totalPerson = document.getElementById("total-person");
const peopleWarning = document.querySelector(".people-warning");

const tip5 = document.getElementById("tip-5");
const tip10 = document.getElementById("tip-10");
const tip15 = document.getElementById("tip-15");
const tip25 = document.getElementById("tip-25");
const tip50 = document.getElementById("tip-50");
const tipCustom = document.getElementById("tip-amount");

const resetBtn = document.getElementById("reset-btn");

let totalPersonCalc = 0;
let tipPersonCalc = 0;

resetBtn.addEventListener("click", function () {
  init();
});

const init = function () {
  billAmount.textContent = 0;
  billAmount.value = "";
  noOfPeople.textContent = 0;
  noOfPeople.value = "";
  tipCustom.value = "";
  tipPerson.textContent = "$0.00";
  totalPerson.textContent = "$0.00";
  peopleWarning.classList.add("display-none");
};

billAmount.addEventListener("keyup", function () {
  if (noOfPeople.value == 0) {
    totalPerson.textContent = "$0.00";
  } else if (noOfPeople.value !== 0 || tipCustom.value !== 0) {
    tipPersonCalc =
      (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  } else {
    totalPersonCalc = billAmount.value / noOfPeople.value;
    totalFixed = totalPersonCalc.toFixed(2);
    totalPerson.textContent = "$" + totalFixed;
  }

  console.log(noOfPeople.value);
});

noOfPeople.addEventListener("keyup", function () {
  if (noOfPeople.value == 0) {
    totalPerson.textContent = "$0.00";
    peopleWarning.classList.remove("display-none");
  } else if (noOfPeople.value !== 0 || tipCustom.value !== 0) {
    tipPersonCalc =
      (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
    peopleWarning.classList.add("display-none");
  } else {
    totalPersonCalc = billAmount.value / noOfPeople.value;
    totalFixed = totalPersonCalc.toFixed(2);
    totalPerson.textContent = "$" + totalFixed;
  }

  console.log(noOfPeople.value);
});

/* Tip values */
tip5.addEventListener("click", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.05;
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

tip10.addEventListener("click", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.1;
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

tip15.addEventListener("click", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.15;
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

tip25.addEventListener("click", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.25;
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

tip50.addEventListener("click", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.5;
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

tipCustom.addEventListener("keyup", function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = "$0.00";
  } else {
    tipPersonCalc =
      (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    tipPerson.textContent = "$" + tipPersonCalc;
    totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
    totalPerson.textContent = "$" + totalCalc;
  }
});

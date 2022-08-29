const billAmount = document.getElementById('bill-total');
const noOfPeople = document.getElementById('people-number');
const tipPerson = document.getElementById('tip-person');
const totalPerson = document.getElementById('total-person');
const peopleWarning = document.querySelector('.people-warning');

const tip5 = document.getElementById('tip-5');
const tip10 = document.getElementById('tip-10');
const tip15 = document.getElementById('tip-15');
const tip25 = document.getElementById('tip-25');
const tip50 = document.getElementById('tip-50');
const tipCustom = document.getElementById('tip-amount');

const dollarSymbol = document.getElementById('dollar');
const poundSymbol = document.getElementById('pound');
const euroSymbol = document.getElementById('euro');

const dollarSignTip = document.querySelector('.dollar-sign-tip');
const dollarSignTotal = document.querySelector('.dollar-sign-total');

const darkModeBtn = document.getElementById('dark-mode-btn');

const body = document.querySelector('.body');
const elementFlex = document.querySelector('.element-flex');
const billTitle = document.querySelector('.bill-title');
const tipTitle = document.querySelector('.tip-title');
const peopleTitle = document.querySelector('.people-title');

const resetBtn = document.getElementById('reset-btn');

let totalPersonCalc = 0;
let tipPersonCalc = 0;

resetBtn.addEventListener('click', function () {
  init();
});

/* Reset to init */
const init = function () {
  billAmount.textContent = 0;
  billAmount.value = '';
  noOfPeople.textContent = 0;
  noOfPeople.value = '';
  tipCustom.value = '';
  tipPerson.textContent = '0.00';
  totalPerson.textContent = '0.00';
  dollarSignTip.textContent = '$';
  dollarSignTotal.textContent = '$';
  peopleWarning.classList.add('display-none');
};

/* Dark mode toggle */
const toggleMode = function () {
  /* Body */
  body.classList.toggle('bg-clr-neutral-300');
  body.classList.toggle('bg-clr-neutral-600');

  /* Element-flex */
  elementFlex.classList.toggle('bg-clr-neutral-100');
  elementFlex.classList.toggle('bg-clr-primary-100');

  /* Inputs */
  billAmount.classList.toggle('bg-clr-neutral-200');
  billAmount.classList.toggle('bg-clr-neutral-600');
  noOfPeople.classList.toggle('bg-clr-neutral-200');
  noOfPeople.classList.toggle('bg-clr-neutral-600');
  billAmount.classList.toggle('clr-neutral-200');
  billAmount.classList.toggle('clr-neutral-600');
  noOfPeople.classList.toggle('clr-neutral-200');
  noOfPeople.classList.toggle('clr-neutral-600');

  /* Title */
  billTitle.classList.toggle('clr-neutral-500');
  billTitle.classList.toggle('clr-neutral-600');
  tipTitle.classList.toggle('clr-neutral-500');
  tipTitle.classList.toggle('clr-neutral-600');
  peopleTitle.classList.toggle('clr-neutral-500');
  peopleTitle.classList.toggle('clr-neutral-600');
};

/* Currency exchange */
const convertPoundToDollar = function () {
  const convertTipEuro = tipPerson.textContent * 1.174949;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 1.174949;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};
const convertDollarToPound = function () {
  const convertTipEuro = tipPerson.textContent * 0.8511001;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 0.8511001;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};

const convertPoundToEuro = function () {
  const convertTipEuro = tipPerson.textContent * 1.17900257;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 1.17900257;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};
const convertEuroToPound = function () {
  const convertTipEuro = tipPerson.textContent * 0.8481212496;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 0.8481212496;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};

const convertDollarToEuro = function () {
  const convertTipEuro = tipPerson.textContent * 1.00345;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 1.00345;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};
const convertEuroToDollar = function () {
  const convertTipEuro = tipPerson.textContent * 0.9965;
  const tipEuro = convertTipEuro.toFixed(2);
  tipPerson.textContent = tipEuro;
  const convertTotalEuro = totalPerson.textContent * 0.9965;
  const totalEuro = convertTotalEuro.toFixed(2);
  totalPerson.textContent = totalEuro;
};

/* Bill and people inputs */
const summaryBill = function (tipBillPersonCalc) {
  const tipPersonFixed = tipBillPersonCalc.toFixed(2);
  tipPerson.textContent = tipPersonFixed;
  const totalCalc = billAmount.value / noOfPeople.value + tipBillPersonCalc;
  const totalFixedCalc = totalCalc.toFixed(2);
  totalPerson.textContent = totalFixedCalc;
};

const summaryElse = function (totalBillPersonCalc) {
  const totalFixed = totalBillPersonCalc.toFixed(2);
  totalPerson.textContent = totalFixed;
};

billAmount.addEventListener('keyup', function () {
  if (noOfPeople.value == 0) {
    totalPerson.textContent = '0.00';
  } else if (noOfPeople.value !== 0 || tipCustom.value !== 0) {
    const tipBillPersonCalc = (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    summaryBill(tipBillPersonCalc);
  } else {
    const totalBillPersonCalc = billAmount.value / noOfPeople.value;
    summaryElse(totalBillPersonCalc);
  }

  console.log(noOfPeople.value);
});

noOfPeople.addEventListener('keyup', function () {
  if (noOfPeople.value == 0) {
    totalPerson.textContent = '0.00';
    peopleWarning.classList.remove('display-none');
  } else if (noOfPeople.value !== 0 || tipCustom.value !== 0) {
    const tipBillPersonCalc = (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    summaryBill(tipBillPersonCalc);
    peopleWarning.classList.add('display-none');
  } else {
    const totalBillPersonCalc = billAmount.value / noOfPeople.value;
    summaryElse(totalBillPersonCalc);
  }

  console.log(noOfPeople.value);
});

const tipCalcEnd = function (tipPersonCalc) {
  const tipFixedCalc = tipPersonCalc.toFixed(2);
  tipPerson.textContent = tipFixedCalc;
  const totalCalc = billAmount.value / noOfPeople.value + tipPersonCalc;
  const totalFixedCalc = totalCalc.toFixed(2);
  totalPerson.textContent = totalFixedCalc;
};

/* Tip values */
tip5.addEventListener('click', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.05;
    tipCalcEnd(tipPersonCalc);
  }
});

tip10.addEventListener('click', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.1;
    tipCalcEnd(tipPersonCalc);
  }
});

tip15.addEventListener('click', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.15;
    tipCalcEnd(tipPersonCalc);
  }
});

tip25.addEventListener('click', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.25;
    tipCalcEnd(tipPersonCalc);
  }
});

tip50.addEventListener('click', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * 0.5;
    tipCalcEnd(tipPersonCalc);
  }
});

tipCustom.addEventListener('keyup', function () {
  if (noOfPeople.value == 0 || billAmount.value == 0) {
    totalPerson.textContent = '0.00';
  } else {
    const tipPersonCalc = (billAmount.value / noOfPeople.value) * (tipCustom.value * 0.01);
    tipCalcEnd(tipPersonCalc);
  }
});

/* Currency exchange buttons */
dollarSymbol.addEventListener('click', function () {
  dollarSignTip.textContent = '$';
  dollarSignTotal.textContent = '$';

  if (dollarSignTip.classList.contains('currency-pound')) {
    convertPoundToDollar();
  }

  if (dollarSignTip.classList.contains('currency-euro')) {
    convertEuroToDollar();
  }

  dollarSignTip.classList.add('currency-dollar');
  dollarSignTip.classList.remove('currency-pound');
  dollarSignTip.classList.remove('currency-euro');
  dollarSignTotal.classList.add('currency-dollar');
  dollarSignTotal.classList.remove('currency-pound');
  dollarSignTotal.classList.remove('currency-euro');
});

poundSymbol.addEventListener('click', function () {
  dollarSignTip.textContent = '£';
  dollarSignTotal.textContent = '£';

  if (dollarSignTip.classList.contains('currency-dollar')) {
    convertDollarToPound();
  }

  if (dollarSignTip.classList.contains('currency-euro')) {
    convertEuroToPound();
  }

  dollarSignTip.classList.add('currency-pound');
  dollarSignTip.classList.remove('currency-dollar');
  dollarSignTip.classList.remove('currency-euro');
  dollarSignTotal.classList.add('currency-pound');
  dollarSignTotal.classList.remove('currency-dollar');
  dollarSignTotal.classList.remove('currency-euro');
});

euroSymbol.addEventListener('click', function () {
  dollarSignTip.textContent = '€';
  dollarSignTotal.textContent = '€';

  if (dollarSignTip.classList.contains('currency-dollar')) {
    convertDollarToEuro();
  }

  if (dollarSignTip.classList.contains('currency-pound')) {
    convertPoundToEuro();
  }

  dollarSignTip.classList.add('currency-euro');
  dollarSignTip.classList.remove('currency-pound');
  dollarSignTip.classList.remove('currency-dollar');
  dollarSignTotal.classList.add('currency-euro');
  dollarSignTotal.classList.remove('currency-pound');
  dollarSignTotal.classList.remove('currency-dollar');
});

darkModeBtn.addEventListener('click', function () {
  darkModeBtn.classList.toggle('dark-enabled');

  if (darkModeBtn.classList.contains('dark-enabled')) {
    /* Dark Mode button */
    darkModeBtn.textContent = 'Dark mode';
    darkModeBtn.classList.toggle('bg-clr-neutral-450');
    darkModeBtn.classList.toggle('clr-neutral-300');
    darkModeBtn.classList.toggle('bg-clr-neutral-600');
    darkModeBtn.classList.toggle('clr-primary-100');

    toggleMode();
  } else {
    /* Dark Mode button */
    darkModeBtn.textContent = 'Light mode';
    darkModeBtn.classList.toggle('bg-clr-neutral-450');
    darkModeBtn.classList.toggle('clr-neutral-300');
    darkModeBtn.classList.toggle('bg-clr-neutral-600');
    darkModeBtn.classList.toggle('clr-primary-100');

    toggleMode();
  }
});

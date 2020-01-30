// Getting the element and setting it to a new value
const poundsInput = document.getElementById("pounds");
const gramsInput = document.getElementById("grams");
const ounceInput = document.getElementById("ounce");
const kilogramInput = document.getElementById("kilogram");

//converts pounds to each measuremnt
function poundsConversion() {
  const pWeight = parseFloat(poundsInput.value); // turns the string into a number which is used for each conversion in this function
  const gWeight = pWeight / 0.0022046;
  const oWeight = pWeight * 16;
  const kWeight = pWeight * 0.45359;
  gramsInput.value = gWeight.toFixed(3); //sets values to DOM using a fixed decimal input
  ounceInput.value = oWeight.toFixed(3);
  kilogramInput.value = kWeight.toFixed(3);
}

function gramsConversion() {
  const gWeight = parseFloat(gramsInput.value);
  const pWeight = gWeight * 0.0022046;
  const oWeight = gWeight * 0.035274;
  const kWeight = gWeight / 1000;
  poundsInput.value = pWeight.toFixed(3);
  ounceInput.value = oWeight.toFixed(3);
  kilogramInput.value = kWeight.toFixed(3);
}

function ounceConversion() {
  const oWeight = parseFloat(ounceInput.value);
  const pWeight = oWeight * 0.0625;
  const gWeight = oWeight / 0.035274;
  const kWeight = oWeight / 35.274;
  poundsInput.value = pWeight.toFixed(3);
  gramsInput.value = gWeight.toFixed(3);
  kilogramInput.value = kWeight.toFixed(3);
}

function kilogramConversion() {
  const kWeight = parseFloat(kilogramInput.value);
  const pWeight = kWeight / 0.45359;
  const gWeight = kWeight * 1000;
  const oWeight = kWeight * 35.274;
  poundsInput.value = pWeight.toFixed(3);
  gramsInput.value = gWeight.toFixed(3);
  ounceInput.value = oWeight.toFixed(3);
}

//Using a realtime value to convert when something is typed by using the "x" Conversion function
poundsInput.addEventListener("input", poundsConversion);
gramsInput.addEventListener("input", gramsConversion);
ounceInput.addEventListener("input", ounceConversion);
kilogramInput.addEventListener("input", kilogramConversion);

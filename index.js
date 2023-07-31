import analyzer from "./analyzer.js";
const reset = document.getElementById("reset-button");
reset.addEventListener("click", resetMetrics);


function displayCharacterCount(obj) {
  const countCharacter = analyzer.getCharacterCount(obj.value);
  const liComponent = document.querySelector('[data-testid="character-count"]');
  if (liComponent) {
    liComponent.innerHTML = "Caracteres: " + countCharacter;
  }
}
function displayCharacterCountExcludingSpaces(obj) {
  const countCharacter = analyzer.getCharacterCountExcludingSpaces(obj.value);
  const liComponent = document.querySelector('[data-testid="character-no-spaces-count"]');
  if (liComponent) {
    liComponent.innerHTML = "Caracteres Sin Espacios: " + countCharacter;
  }
}

function displayNumbersCount(obj) {
  const countCharacter = analyzer.getNumberCount(obj.value);
  const liComponent = document.querySelector('[data-testid="number-count"]');
  if (liComponent) {
    liComponent.innerHTML = "Numeros: " + countCharacter;
  }
}
function resetMetrics() {
  document.querySelector('[name="user-input"]').value = "";
  const obj = { value: "" };
  displayWordCount(obj);
  displayCharacterCount(obj);
  displayNumbersCount(obj);
  displayCharacterCountExcludingSpaces(obj);
  displayNumbersSum(obj);
  displayAverageWordLength(obj);
}

function displayNumbersSum(obj) {
  const countNumberSum = analyzer.getNumberSum(obj.value);
  const liComponent = document.querySelector('[data-testid="number-sum"]');
  if (liComponent) {
    liComponent.innerHTML = "Suma Numeros: " + countNumberSum;
  }
}
function displayWordCount(obj) {
  const wordCount = analyzer.getWordCount(obj.value);
  const liComponent = document.querySelector('[data-testid="word-count"]');
  if (liComponent) {
    liComponent.innerHTML = "Palabras: " + wordCount;
  }
}
function displayAverageWordLength(obj) {
  const averageWordLength = analyzer.getAverageWordLength(obj.value);
  const liComponent = document.querySelector('[data-testid="word-length-average"]');
  if (liComponent) {
    liComponent.innerHTML = "Promedio Longitud: " + averageWordLength;
  }

}
// FUNCIONALIDAD DEL TEXTAREA
const textarea = document.querySelector('[name="user-input"]');
textarea.addEventListener("keyup", function () {
  displayWordCount(textarea);
  displayCharacterCount(textarea);
  displayNumbersCount(textarea);
  displayCharacterCountExcludingSpaces(textarea);
  displayNumbersSum(textarea);
  displayAverageWordLength(textarea);
});

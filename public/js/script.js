// define variables
const generateBtn = document.getElementById('generate-btn');
const inputField = document.getElementById('input-field');
const finalPrompt = document.getElementById('final-prompt');

// define function to generate prompt
function generatePrompt() {
  const inputText = inputField.value;
  let promptText = inputText;

  // add styles
  const styleCards = document.querySelectorAll('.styles .card');
  styleCards.forEach(card => {
    const slider = card.querySelector('input[type="range"]');
    const value = slider.value;
    const styleName = card.querySelector('.card-title').innerText;
    if (value != 1) {
      promptText += `::${styleName}::${value}`;
    }
  });

  // add artists
  const artistCards = document.querySelectorAll('.artists .card');
  artistCards.forEach(card => {
    const artistName = card.querySelector('.card-title').innerText;
    if (card.querySelector('input[type="checkbox"]').checked) {
      promptText += `::${artistName}`;
    }
  });

  // add colors
  const colorCards = document.querySelectorAll('.colors .card');
  colorCards.forEach(card => {
    const slider = card.querySelector('input[type="range"]');
    const value = slider.value;
    const colorName = card.querySelector('.card-title').innerText;
    if (value != 1) {
      promptText += `::${colorName}::${value}`;
    }
  });

  finalPrompt.innerText = promptText;
}

// add event listener to generate button
generateBtn.addEventListener('click', generatePrompt);

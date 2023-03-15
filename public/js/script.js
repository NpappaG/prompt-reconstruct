// Get elements
const input = document.querySelector("#input");
const generateBtn = document.querySelector("#generate-btn");
const finalPrompt = document.querySelector("#final-prompt");
const styleSliders = document.querySelector(".style-sliders");
const lightingSliders = document.querySelector(".lighting-sliders");
const cameraSliders = document.querySelector(".camera-sliders");
const artistsSliders = document.querySelector(".artists-sliders");
const colorsSliders = document.querySelector(".colors-sliders");
const qualitySliders = document.querySelector(".quality-sliders");
const stylizeSliders = document.querySelector(".stylize-sliders");

// Update final prompt text
function updateFinalPrompt() {
  let promptText = input.value;
  
  promptText += styleSliders.querySelector("output").textContent;
  promptText += lightingSliders.querySelector("output").textContent;
  promptText += cameraSliders.querySelector("output").textContent;
  promptText += artistsSliders.querySelector("output").textContent;
  promptText += colorsSliders.querySelector("output").textContent;
  promptText += qualitySliders.querySelector("output").textContent;
  promptText += stylizeSliders.querySelector("output").textContent;

  finalPrompt.textContent = promptText;
}

// Add event listeners to sliders
styleSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

lightingSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

cameraSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

artistsSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

colorsSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

qualitySliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

stylizeSliders.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => {
    const output = slider.parentElement.querySelector("output");
    output.textContent = slider.value;
    updateFinalPrompt();
  });
});

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  updateFinalPrompt();
});

// Add event listener to Colors button
const colorsBtn = document.querySelector(".colors-btn");

colorsBtn.addEventListener("click", () => {
  colorsSliders.classList.toggle("hidden");
});

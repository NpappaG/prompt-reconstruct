// Get elements from the HTML
const inputText = document.getElementById('input-text');
const finalPrompt = document.getElementById('final-prompt');
const stylesBtn = document.getElementById('styles-btn');
const lightingBtn = document.getElementById('lighting-btn');
const cameraBtn = document.getElementById('camera-btn');
const artistsBtn = document.getElementById('artists-btn');
const colorsBtn = document.getElementById('colors-btn');
const materialsBtn = document.getElementById('materials-btn');
const sizeBtn = document.getElementById('size-btn');
const dofBtn = document.getElementById('dof-btn');
const qualityBtn = document.getElementById('quality-btn');
const stylizeBtn = document.getElementById('stylize-btn');

// Add event listeners to the buttons
stylesBtn.addEventListener('click', handleButtonClick);
lightingBtn.addEventListener('click', handleButtonClick);
cameraBtn.addEventListener('click', handleButtonClick);
artistsBtn.addEventListener('click', handleButtonClick);
colorsBtn.addEventListener('click', handleButtonClick);
materialsBtn.addEventListener('click', handleButtonClick);
sizeBtn.addEventListener('click', handleButtonClick);
dofBtn.addEventListener('click', handleButtonClick);
qualityBtn.addEventListener('click', handleButtonClick);
stylizeBtn.addEventListener('click', handleButtonClick);

// Handle button clicks
function handleButtonClick(event) {
    const buttonId = event.target.id;
    const subStyles = [
        { name: '16-Bit', image: '16-bit.png' },
        { name: '1800s', image: '1800s.png' },
        { name: '1980s', image: '1980s.png' },
        { name: '4-bit', image: '4-bit.png' },
        { name: 'Antimatter', image: 'antimatter.png' },
        { name: 'Black Hole', image: 'black-hole.png' },
        // Add more sub-styles here
    ];

    // Create the popup window
    const popup = window.open('', buttonId + '-popup', 'width=800,height=600');

    // Add the sub-styles to the popup window
    subStyles.forEach((subStyle) => {
        const subStyleElement = document.createElement('div');
        subStyleElement.classList.add('sub-style');
        subStyleElement.innerHTML = `
            <img src="/images/${subStyle.image}" alt="${subStyle.name}">
            <div class="sub-style-name">${subStyle.name}</div>
            <input type="range" min="-0.7" max="5" step="0.1" value="1">
        `;
        popup.document.body.appendChild(subStyleElement);
    });

    // Add event listeners to the input ranges
    const inputRanges = popup.document.querySelectorAll('input[type="range"]');
    inputRanges.forEach((inputRange) => {
        inputRange.addEventListener('input', handleInputRange);
    });

    // Handle input range changes
    function handleInputRange(event) {
        const subStyleName = event.target.parentElement.querySelector('.sub-style-name').textContent;
        const subStyleValue = parseFloat(event.target.value).toFixed(1);
        const currentPrompt = finalPrompt.textContent;
        const newPrompt = `${currentPrompt}:: ${subStyleName}:: ${subStyleValue}`;
        finalPrompt.textContent = newPrompt;
    }
}

// Handle input text changes
inputText.addEventListener('input', handleInputText);

// Handle input text changes
function handleInputText(event) {
    const currentPrompt = event.target.value;
    finalPrompt.textContent = currentPrompt;
}
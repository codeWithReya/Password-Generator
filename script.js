const inputSlider = document.getElementById("input-slider");
const sliderValue = document.getElementById("slider-value");
const passBox = document.getElementById("pass-box");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genButton = document.getElementById("gen-button");
const copyIcon = document.getElementById("copy-icon");
const clearButton = document.getElementById("clear-button")

// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value; // value gets change using slider
});

genButton.addEventListener('click', () => {
    passBox.value = generatePassword();
});

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*";

// function to generate password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    // condition for checkbox (if it checked or not)
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    return genPassword;
}

// copy icon
copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check"; //this show check after copying the password
        copyIcon.title = "Password Copied"; //this shows the text ... after clicking copy icon
        
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 2000)
    }
});

// password clears after 1 sec
clearButton.addEventListener('click', () => {
    passBox.value = "";
});

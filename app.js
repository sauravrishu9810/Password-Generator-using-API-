const inputBox = document.querySelector(".input-text");
const button = document.querySelector("#btn-box");
const copyIcon = document.querySelector("#copy");

const length = "8";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const allChars = uppercase + lowercase + number ;


function genratePassword(){

    let password = "";

    password += uppercase[Math.floor(Math.random()*uppercase.length)];

    password += lowercase[Math.floor(Math.random()*lowercase.length)];

    password += number[Math.floor(Math.random()*number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    inputBox.value = password;
}

button.addEventListener("click",genratePassword);

// Copy password on click
copyIcon.addEventListener("click", () => {
    if (inputBox.value) {
        navigator.clipboard.writeText(inputBox.value);
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy!");
    }
});


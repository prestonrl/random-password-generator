// Assignment code here


function generatePassword() {
  passLength = prompt("How many characters long would you like your password to be?");
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Please enter a number between 8 and 128");
  }
  console.log(passLength);

  var lowerCase = window.confirm("Include lower case characters?")
  

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

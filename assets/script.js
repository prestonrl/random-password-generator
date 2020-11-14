// Assignment code here
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


function generatePassword() {
  var newPass = "";
  var chosenChars = "";

  passLength = prompt("How many characters long would you like your password to be?");
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Please enter a number between 8 and 128");
  }
  console.log(passLength);

  var lowerCase = window.confirm("Include lowercase characters?");
  var upperCase = window.confirm("Include UPPERCASE characters?");
  var incNum = window.confirm("Include numbers?");
  var specChar = window.confirm("Include special characters?");

  console.log(lowerCase,upperCase,incNum,specChar);

  if (lowerCase === false && upperCase === false && incNum === false && specChar=== false) {
    alert("Selection must include at least one character type");
    return "Try Again"
  }

  if (lowerCase){
    chosenChars += lowerChars;
  }
  if (upperCase){
    chosenChars += upperChars;
  }
  if (incNum){
    chosenChars += numChars;
  }
  if (specChar){
    chosenChars += specialChars;
  }

  console.log(chosenChars);

  for (var i = 0; i < passLength; i++) {
    newPass += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
  }

  return newPass;

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

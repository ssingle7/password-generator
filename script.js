// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var generatePassword = "";

  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numericCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";
  var requiredCharacterString = "";
  var passwordLength = prompt(
    "How many characters would you like in your Password? \nPlease select a number between 8-128."
  );

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "The password must be between8 and 128 characters. \nPlease select a number between 8-128."
    );
  }

  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  
  if (includeLowerCase) {
    requiredCharacterString = requiredCharacterString.concat(
      lowerCaseLetters
    );
  }

  
  var includeUpperCase = confirm("Do you want to include Uppercase characters?");
  
  if (includeUpperCase) {
    requiredCharacterString = requiredCharacterString.concat(
      upperCaseLetters
    );
  }

  var includeNumeric = confirm("Do you want to include numeric characters?");
  
  if (includeNumeric) {
    requiredCharacterString = requiredCharacterString.concat(numericCharacters);
  }
  var special = confirm("Do you want to include special characters?");
  
  if (special) {
    requiredCharacterString = requiredCharacterString.concat(specialCharacters);
  }

  for (i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * requiredCharacterString.length);

    generatePassword = generatePassword.concat(
      requiredCharacterString.charAt(random)
    );

    console.log("Generate password is:" + generatePassword);
  }

  return generatePassword;
}

generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

function generatePassword(){
  return "temporary password";

  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numericCharacters = "1234567890"
  var specialCharacters = "!@#$%^&*()"

  var requiredCharacterString = ""

  var passwordLength = prompt("How many characters would you like in your Password?" \n(Please enter a number between 8-128.")

  while(passwordLength < 8 || passwordLength > 128 {
    passwordLength = prompt("The password must be between8 and 128 characters. \nPlease select a number between 8-128.")
  }

  var includeLowerCase = confirm("Do you want to include lowercase characters?"); 
if(includeLowerCase) { 
  requiredStrongCharacterString = requiredStrongCharacterString.concat(lowerCaseLetters);
}
  var includeUpperCase = confirm("Do you want to include uppercase characters?");
  console.log("Include uppercase characters: "+includeUpperCase); 

  if(includeUpperCase) {
    requiredStrongCharacterString = requiredStrongCharacterString.concat(upperCaseLetters);
  }
var includeNumeric = confirm("Do you want to include numeric characters?");
console.log("Include numeric characters: "+includeNumeric); 
if(includeNumeric) {
  requiredCharacterString = requiredCharacterString.concat(numericCharacters);

  var includeSpecial = confirm("Do you want to include special characters?"); 
  console.log("Include special characters: "+includeSpecial); 

  
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ```
// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters
// // WHEN I answer each prompts
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page
// ```


//length of user password
//criteria for user password 
//password of eight characters, no more than 128 characters 
//


var passwordLength = 
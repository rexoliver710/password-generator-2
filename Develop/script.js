// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x", "y", "z"]
var specialChar = ["@", "%", "&","*", "?"]
function generatePassword() {
  var possibleSelection = []
  var randomPassword =""
  var passwordLength = Number(prompt("how long would you like your password to be(between 8 and 128)?"));
  console.log("passwordLength", passwordLength)
  var includeLower = confirm("would you like to include lowercase?");
  console.log("includeLower", includeLower)
  var includeUpper = confirm("would you like to include uppercase?");
  console.log("includeUpper", includeUpper)
  var includeNumbers = confirm("would you like to include numbers?");
  console.log("includeNumbers", includeNumbers)
  var includeSpecial = confirm("would you like to include Special Characters?");
  console.log("includeSpecial", includeSpecial)
  console.log("possibleSelection", possibleSelection)
  if(includeLower === true ){
    console.log("lowerCase is true")
    possibleSelection = possibleSelection.concat(lowerCase)
    console.log("possibleSelection", possibleSelection)
  }
  if(includeUpper === true ){
    possibleSelection = possibleSelection.concat(upperCase)
    console.log("possibleSelection", possibleSelection)
  }
  if(includeNumbers === true ){
    possibleSelection = possibleSelection.concat(numbers)
    console.log("possibleSelection", possibleSelection)
  }
  if(includeSpecial === true ){
    possibleSelection = possibleSelection.concat(specialChar)
    console.log("possibleSelection", possibleSelection)
  }
  for(var i = 0; i <=passwordLength; i++){
randomPassword = randomPassword + possibleSelection[Math.floor(Math.random() * possibleSelection.length)]
  }
  
  return randomPassword
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

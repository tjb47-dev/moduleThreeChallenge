//Variables
var characterLength = 6;
var lengthArray=["","","","","",""]
var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","?","#","$","%","&","@"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Password Input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();

  passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
}

// Generates Password Button
function generatePassword() {
  var password = "";
  for (var i = 0; i <characterLength; i++){
    var randomIndex = Math.floor(Math.random()*lengthArray.length);
    password = password + lengthArray[randomIndex];
  }
  return password;
}
//Choices for Generator
function getPrompts(){
  lengthArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password to have? (6 - 10 characters)"));
  if(isNaN(characterLength) || characterLength < 6 || characterLength > 10){
    alert("Character length must be an integer from 6 - 10. Please try again.");
    return false;
  }
  if (confirm("Want to have lowercase letters in the password?")){
    lengthArray = lengthArray.concat(lowerCase)
  }
  if (confirm("Want to have uppercase letters in the password?")){
    lengthArray = lengthArray.concat(upperCase)
  }
  if (confirm("Want to have special characters (such as: !,?,#,$,%,&,@) in the password?")){
    lengthArray = lengthArray.concat(special)
  }  
  if (confirm("Want to have number characters in the password?")){
    lengthArray = lengthArray.concat(numbers)
  }
  return true;
}
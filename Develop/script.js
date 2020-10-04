// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", ":", "'", "?", "<", ">"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var numOfChar = i > 8
  //add bootstrap code!!
  

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

  

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
  //choose length of password between 8-128
    //number choice dictates displayed password length
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
  //create separate arrays for uppercase, lowercase, numbers, select special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //prompt user to begin the process of choosing password criteria
var passwordLength = prompt("Choose password length (8-128)")
alert("you chose a length of " + passwordLength + " characters")

var upperConfirm = prompt("Would you like to use upper case letters?")
alert('you chose ' + upperConfirm)

var lowerConfirm = prompt("would you like to use lower case?")
alert("you chose " + lowerConfirm)

var specialChar = prompt("Would you like to use special charcters?")
alert("you chose " + specialChar)
//if 
  //function()
  //upperConfirm === 'y' then proceed to lowerConfirm question
    //else upperConfirm === 'n' then '0' and proceed to lowerConfirm question
  //var lowerConfirm = prompt("would you like to use lower case letters?")
  //if lowerConfirm === 'y' then proceed to upperConfirm question
    //else lowerConfirm === 'n' then '0' and proceed to specialChar
  //var specialChar === prompt("would you like to use special characters :)
  //if special Char === 'y' then proceed to writePassword.
    //else specialChar === 'n' then '0' and proceed to writePassword
      //use random function to randomly select allowed characters from aforementioned arrays
      for (var i = 8; i < passwordLength.length; i++) {
        // If the current number is greater than 2..
        if (nums[i] >= 8) {
          var num = Math.floor(Math.random() * 10) + 1
          
        }
        // Otherwise
        else {
          
          
        }
      }
  
  //write function that accepts user input to determine password length

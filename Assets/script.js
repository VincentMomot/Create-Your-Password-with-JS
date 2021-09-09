// assigns the generate element as a button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

var numcheck=0;
while(numcheck==0){
    var len=prompt("Enter the length of the password between 8 and 128 inclusively")
    if (isNaN(len)){
      alert("Please enter a number");
    }
    else if(len<8 || len>128){
      alert("Please enter a number within the valid range");
    }
    else if (len!=Math.floor(len)){ 
      alert("Please enter an integer");
    }
    else{
      numcheck=1;
    }
}

var low;
var up;
var numbers;
var special;
var check=0;
while(check==0){  
  var low=2;
  var up=2;
  var numbers=2;
  var special=2;

  while(low!=0 && low!=1){
    low=prompt("Does your password require lowercase letters? please enter: y/n or Y/N");
      if(low=="y" || low=="Y"){
        check=1;
        low=1;
      }
      else if(low=="n" || low=="N"){
        low=0;
      }
  } 
  while(up!=0 && up!=1){
    up=prompt("Does your password require uppercase letters? please enter: y/n or Y/N");
    if(up=="y" || up=="Y"){
      check=1;
      up=1;
    }
    else if(up=="n" || up=="N"){
      up=0;
    }
  } 

  while(numbers!=0 && numbers!=1){
    numbers=prompt("Does your password require numbers? please enter: y/n or Y/N");
    if(numbers=="y" || numbers=="Y"){
      check=1;
      numbers=1;
    }
    else if(numbers=="n" || numbers=="N"){
      numbers=0;
    }
  } 
  while(special!=0 && special!=1){
    special=prompt("Does your password require special characters? please enter: y/n or Y/N");
    if(special=="y" || special=="Y"){
      check=1;
      special=1;
    }
    else if(special=="n" || special=="N"){
      special=0;
    }
  } 
  if(check==0){
    alert("Try again. Please use at least one type of character with y/n or Y/N.")
  }
} 
console.log(check,low,up,numbers,special);


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}


// lowercase letters 26
var a=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase letters 26
var A=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// numbers 10
var num=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// special characters 33
var sp=[" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", '\\', '\[', '\]', "^", "_", "`", "}", "{", "|", "~"];


var aAnumsp=a.concat(A,num,sp); 
var anumsp=a.concat(num,sp);
var asp=a.concat(sp);
var aA=a.concat(A);
var anum=a.concat(num);
var aAsp=a.concat(A,sp);
var aAnum=a.concat(A,num);
var Anum=A.concat(num);
var Anumsp=A.concat(num,sp);
var Asp=A.concat(sp);
var numsp=num.concat(sp);

console.log(aAnumsp[94]);







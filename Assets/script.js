// assigns the generate element as a button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {


  //Checks that input is a integer between 8 and 128 inclusively
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

//while loop ensures at least 1 out of 4 types of characters is used
var check=0;
while(check==0){  
  //initializes variables as 0    This is important!
  var low=0;
  var up=0;
  var numbers=0;
  var special=0; 

  //asks the user for the 4 types of characters to use in the password
    low=prompt("Password contains lowercase letters?\nYes: y or Y\nNo: Press enter or anything else.");
      if(low=="y" || low=="Y"){
        check=1;
      }

    up=prompt("Password contains uppercase letters?\nYes: y or Y\nNo: Press enter or anything else.");
    if(up=="y" || up=="Y"){
      check=1;
    }
  

    numbers=prompt("Password contains numbers?\nYes: y or Y\nNo: Press enter or anything else.");
    if(numbers=="y" || numbers=="Y"){
      check=1;
    }
  
    special=prompt("Password contains special characters?\nYes: y or Y\nNo: Press enter or anything else.");
    if(special=="y" || special=="Y"){
      check=1;
      }
    
  if(check==0){
    alert("Please use at least one type of character and select it with 'y' or 'Y'.")
  }
} 

const pswd=[]; //to contain the password
var arr =[]; //to create possible characters to use

//adds only relevant characters the charcter banks
if(low=="y"){
var a=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  arr=arr.concat(a);
}
if(up=="y"){
var A=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  arr=arr.concat(A);
}
if(numbers=="y"){
var num=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  arr=arr.concat(num);
}
if(special=="y"){
var sp=[" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", '\\', '\[', '\]', "^", "_", "`", "}", "{", "|", "~"];
  arr=arr.concat(sp);
}

//takes characters from the banks and picks a random one for the desired length of the password
for(var i=0; i<len; i++){
  pswd[i]=arr[Math.floor(Math.random()*arr.length)];
}

//converts the array into a string and prints it to the browser
  var pswrd=pswd.join("");
  document.getElementById("password").value=pswrd;
}







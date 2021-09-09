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



var check=0;
while(check==0){  
  var low=0;
  var up=0;
  var numbers=0;
  var special=0; 

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

const pswd=[];

for( var i=0; i<len; i++){
if(low=="y" && up=="y" && numbers=="y" && special=="y"){
pswd[i]=aAnumsp[Math.floor(Math.random()*aAnumsp.length)];
}
else if(low=="y" && numbers=="y" && special=="y"){
  pswd[i]=anumsp[Math.floor(Math.random()*anumsp.length)];
}
else if(low=="y" && up=="y" && special=="y"){
  pswd[i]=aAsp[Math.floor(Math.random()*aAsp.length)];
}
else if(low=="y" && up=="y" && numbers=="y"){
  pswd[i]=aAnum[Math.floor(Math.random()*aAnum.length)];
}
else if(up=="y" && numbers=="y" && special=="y"){
  pswd[i]=Anumsp[Math.floor(Math.random()*Anumsp.length)];
}
else if(low=="y" && special=="y"){
  pswd[i]=asp[Math.floor(Math.random()*asp.length)];
}
else if(low=="y" && up=="y" ){
  pswd[i]=aA[Math.floor(Math.random()*aA.length)];
}
else if(low=="y" && numbers=="y"){
  pswd[i]=anum[Math.floor(Math.random()*anum.length)];
}
else if(up=="y" && numbers=="y"){
  pswd[i]=Anum[Math.floor(Math.random()*Anum.length)];
}
else if(up=="y" && special=="y"){
  pswd[i]=Asp[Math.floor(Math.random()*Asp.length)];
}
else if(numbers=="y" && special=="y"){
  pswd[i]=numsp[Math.floor(Math.random()*numsp.length)];
}
else if(low=="y"){
  pswd[i]=a[Math.floor(Math.random()*a.length)];
}
else if(up=="y"){
  pswd[i]=A[Math.floor(Math.random()*A.length)];
}
else if(numbers=="y"){
  pswd[i]=num[Math.floor(Math.random()*num.length)];
}
else{
  pswd[i]=sp[Math.floor(Math.random()*sp.length)];
}
}
  var pswrd=pswd.join("");
  console.log(pswrd); 
  document.getElementById("password").value=pswrd;
}







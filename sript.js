//generate password
function generate(){

//set password length/complexity
let complexity = document.getElementById("slider").value;

let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";

//create for loop for password
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}
//add password to text box display area
document.getElementById("display").value = password;

//add password to previously generated password section
document.getElementById("lastNums").innerHTML += password + "<br/>";

}


//set default lenth display
document.getElementById("length").innerHTML = "length: 28";

//function to set lenght for slider position
document.getElementById("slider").oninput = function(){

if(document.getElementById("slider").value > 8){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
}

else{
    document.getElementById("length").innerHTML = "Length: 1";
}

}
//function to copy to clipboard
function copyPassword(){
    
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}
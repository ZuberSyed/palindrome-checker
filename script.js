function palindromeOrNot(){
    var x = document.getElementById('txt').value;
    var displayWord;
    if(x == ""){
        displayWord = "Please enter string or number";
    }
     else if(x == x.split('').reverse().join('')){
        displayWord = "Palindrome";
    }else{
        displayWord = "Not a Palindrome"
    }
    document.getElementById('pldrme').innerHTML = displayWord;
}
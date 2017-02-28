var asterisc = document.getElementById ("asterisc");

function calculate(){
    var inputReview = document.getElementById("inputReview").value;
    var charsEntered = inputReview.length;
    if (charsEntered) asterisc.style.color = "black"
        else asterisc.style.color = "red";
 //   alert(ch);
    var charLeftMsg = document.getElementById("charLeft");
    charLeftMsg.innerHTML = "" + 400 - charsEntered + " characters left";
}
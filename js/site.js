var asterisc = document.getElementById ("asterisc");
var inputReview = document.getElementById ("inputReview");
if (!inputReview.length) asterisc.innerHTML = '<span style="color: black">*</span>';

function calculate(){
    var inputReview = document.getElementById("inputReview");
    var ch = inputReview.length;
    alert(ch);
    var charleft = document.getElementById("charLeft");

    charLeft.innerHTML = "<span>ch + </span>"
}
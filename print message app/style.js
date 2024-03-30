let inputEle=document.querySelector("input");
let buttonEle = document.querySelector("button");
let paragraph = document.querySelector("p");
buttonEle.onclick = function(){
   var inputValue= inputEle.value; 
   console.log(inputValue);
   if (inputValue !="") {
    paragraph.innerHTML = inputValue;
   //empty input value
   inputEle.value = "";
   }
}
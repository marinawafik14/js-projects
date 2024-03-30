let buttonEle = document.querySelector(".btn");
let divEle = document.querySelector(".my-div");

var colors = ["red", "green", "blue"]
var i=0;
//click into button
buttonEle.onclick = function(){
divEle.style.backgroundColor = colors[i]
 i++;
if (i===3) {
    i = 0;
}
};
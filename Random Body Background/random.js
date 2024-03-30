let button = document.getElementById("btn");
button.addEventListener("click", randomBg);


function randomBg() {
 
  document.body.style.backgroundColor = '#'+ Math.random().toString(16).slice(2,8);

    
}




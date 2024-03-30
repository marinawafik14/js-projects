
//setup variables
var myInput = document.querySelector("#my-input");
var myBtn = document.querySelector("#btn");

//events
myBtn.addEventListener('click',togglePassword);





//functions
function togglePassword(){
    if (myBtn.getAttribute('data-text')=="show") {
        myInput.setAttribute('type','text');
        this.setAttribute('data-text', 'hide');
        this.innerHTML ="Hide"
    
    }else{
        myInput.setAttribute('type','password');
        this.setAttribute('data-text', 'show');
         this.innerHTML ="Show"
    
    }
    
    };
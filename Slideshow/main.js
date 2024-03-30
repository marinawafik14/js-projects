let myImages = document.getElementById("slideshow");
let imagesArray =["images/1.jpg", "images/2.png", "images/3.jpg", "images/4.jpg"];
let i=0;


function slideShow(){
  myImages.setAttribute('src',imagesArray[i]);
if (i == imagesArray.length - 1) {
  i=0;
}else{
  i++;
}

  setTimeout(function(){
slideShow();


  },2000)

}
slideShow();
var slideIndex = 1;
slideshow(slideIndex);

//function for next, prev buttons
function PlusSubtrctSlide(n){
    slideshow(slideIndex+=n)
}

function CurrentSlide(n){
    slideIndex = n
    slideshow(slideIndex)
}

function slideshow(n){
    var slides = document.getElementsByClassName("slide")
    var dots = document.getElementsByClassName("dot")

    if(n > slides.length){slideIndex=1}
    if(n < 1){slideIndex=slides.length}

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active");
      }

    //to display the desired image
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active";
}


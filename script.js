var Index = 1;
showSlides(Index);

function changeSlides(n) {
    showSlides(Index += n);
}

function thisSlide(n) {
    showSlides(Index = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) 
        {Index = 1}
    if(n < 1) 
        {Index = slides.length}

    for(i=0; i<slides.length;i++)
    {
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[Index-1].style.display = "block";
    dots[Index-1].className += "active";
}
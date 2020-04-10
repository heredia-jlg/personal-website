// JavaScript source code

$(document).ready(function () {
        
$(".btns").eq(0).click(() =>{
        $('html, body').animate({
            scrollTop: $(".section").eq(0).offset().top
        }, 300);
    });

$(".btns").eq(1).click(function () {
    $('html, body').animate({
        scrollTop: $(".section").eq(1).offset().top
    }, 300);
});

$(".btns").eq(2).click(function () {
    $('html, body').animate({
        scrollTop: $(".section").eq(2).offset().top
    }, 300);
});

$(".btns").eq(3).click(function () {
    $('html, body').animate({
        scrollTop: $(".section").eq(3).offset().top
    }, 300);
});
                  
$(".btns").eq(4).click(function () {
    $('html, body').animate({
        scrollTop: $(".section").eq(4).offset().top
    }, 300);
});
     
$(".btns").eq(5).click(function () {
    $('html, body').animate({
        scrollTop: $(".section").eq(5).offset().top
    }, 300);
});



//slider on background section
  const slider = document.querySelector('#slides')
  const slidePhotos = document.querySelectorAll('.slide');

  const previousBtn = document.querySelector('#previousButton');
  const nextBtn = document.querySelector('#nextButton');

  let counter = 1;
  const size = slidePhotos[0].clientWidth;

  slider.style.transform ='translateX(' + (-size * counter) + 'px)';


    nextBtn.addEventListener('click', ()=> {
        slider.style.transition = "transform .4s ease-in-out";
        counter++;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    });

    previousBtn.addEventListener('click', ()=> {
        slider.style.transition = "transform .4s ease-in-out";
        counter--;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    });

    //loop
    slider.addEventListener('transitionend', () => {
        if(slidePhotos[counter].id === 'last')
        {
            slider.style.transition = "none";
            counter = slidePhotos.length - 2;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if(slidePhotos[counter].id === 'first')
        {
            slider.style.transition = "none";
            counter = 1;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });



    //arrows hover
    previousBtn.addEventListener('mouseover', () => {
        previousBtn.setAttribute('style', 'background: url(images/icons/left_hovered.png)');
    });
    previousBtn.addEventListener('mouseout', () => {
        previousBtn.setAttribute('style', 'background: url(images/icons/left.png)');
    });
    nextBtn.addEventListener('mouseover', () => {
        nextBtn.setAttribute('style', 'background: url(images/icons/right_hovered.png)');
    });
    nextBtn.addEventListener('mouseout', () => {
        nextBtn.setAttribute('style', 'background: url(images/icons/right.png)');
    });
                
                  
    //Makes text appear in -Other Interests- section
    //enhances design to make text more readable by
    //minimizing amount of text at a given time
    const subsections = document.querySelectorAll('.subsection');
    var index = 0;
    //Interests subsections
    window.addEventListener("scroll", function() {
        
        if (window.scrollY > (subsections[index].offsetTop - subsections[index].offsetHeight)) {
                //subsections[index].setAttribute('display', 'block');
                //subsections[index].show('slide', {direction: 'left'}, 1000);
            index++;
        }
        
    });
                  
    
    //higlights menu to remind user where he or she is
    const sections = document.querySelectorAll('section');
    const navElements = document.querySelectorAll('li.btns');
                  
    window.addEventListener("scroll", function() {
        
        if (window.scrollY >= sections[0].offsetTop){
            navElements[0].setAttribute('style','border-left: 2px solid white');
            navElements[1].setAttribute('style','border-left: 0px solid white');
            navElements[2].setAttribute('style','border-left: 0px solid white');
            navElements[3].setAttribute('style','border-left: 0px solid white');
            navElements[4].setAttribute('style','border-left: 0px solid white');
        }
        if (window.scrollY >= sections[1].offsetTop){
            navElements[0].setAttribute('style','border-left: 0px solid white');
            navElements[1].setAttribute('style','border-left: 2px solid white');
            navElements[2].setAttribute('style','border-left: 0px solid white');
            navElements[3].setAttribute('style','border-left: 0px solid white');
            navElements[4].setAttribute('style','border-left: 0px solid white');
        }
        if (window.scrollY >= sections[2].offsetTop){
            navElements[0].setAttribute('style','border-left: 0px solid white');
            navElements[1].setAttribute('style','border-left: 0px solid white');
            navElements[2].setAttribute('style','border-left: 2px solid white');
            navElements[3].setAttribute('style','border-left: 0px solid white');
            navElements[4].setAttribute('style','border-left: 0px solid white');
        }
        if (window.scrollY >= sections[3].offsetTop){
            navElements[0].setAttribute('style','border-left: 0px solid white');
            navElements[1].setAttribute('style','border-left: 0px solid white');
            navElements[2].setAttribute('style','border-left: 0px solid white');
            navElements[3].setAttribute('style','border-left: 2px solid white');
            navElements[4].setAttribute('style','border-left: 0px solid white');
        }
        if (window.scrollY >= sections[4].offsetTop){
            navElements[0].setAttribute('style','border-left: 0px solid white');
            navElements[1].setAttribute('style','border-left: 0px solid white');
            navElements[2].setAttribute('style','border-left: 0px solid white');
            navElements[3].setAttribute('style','border-left: 0px solid white');
            navElements[4].setAttribute('style','border-left: 2px solid white');
        }
        
                        
    });

                             
});

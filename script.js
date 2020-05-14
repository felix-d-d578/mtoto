
 // AOS Instance
    AOS.init();
$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'Backend Developer &',
        'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});



document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//glide carousel
new Glide(".images",{
        type: 'carousel',
        perView: 5,
        focusAt: 'center',
        gap: 40,
        breakpoints: {
          1200:{
            perView: 3
          },
          800:{
            perView: 2
          }
        }
      }).mount();
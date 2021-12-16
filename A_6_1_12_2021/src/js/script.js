$(document).ready(function(){
    $('.image__inner').slick({
        dots: false,
        speed: 1200,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-circle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-circle-right"></span></button>',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: false
                }
            }
        ]      
      });
  });




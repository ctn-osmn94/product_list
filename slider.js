const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
};

export function sliderInit() {
  $('.slider').slick(settings);
}

    setTimeout(() => {
        if($(window).width() < 640) {
          $('.categori-title').slick({
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  arrows:false
          });
        } 
    }, 100);





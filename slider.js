const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
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

$('.categori-title').slick({
    settings: "unslick",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });


export function sliderInit() {
    $('.slider').slick(settings);
}


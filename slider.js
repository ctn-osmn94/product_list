const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
};



export function sliderInit() {
    const sl =  $('.slider').slick(settings);
        
    $(window).on('resize', function() {
    if( !sl.hasClass('.slick-initialized') ) {
            $('.slider').slick(settings);
    }
    }); 
}


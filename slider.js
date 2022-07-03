const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    lazyLoad: 'ondemand',
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
    
    let sl =  $('.slider').slick(settings);
        
    $(window).on('resize', function() {
        if( !sl.hasClass('.slick-initialized') ) {
            $('.slider').slick(settings);
        }else if(sl.hasClass('.slick-initialized')) {
            sl.removeClass('.slick-initialized')
        }

    }); 
}


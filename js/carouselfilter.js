(function ($) {
    "use strict";

    jQuery(document).ready(function($){
        
        $(function() {
        var owl = $('.filter-item').owlCarousel({
            loop    :true,
            margin  :20,
            dots:false,
           
            nav     :true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3                                      //create carousl for arrival
                },
                1000:{
                    items:4
                }
            }
        });
        var owlss = $('.filter-item2').owlCarousel({
            loop    :true,
            margin  :20,
            dots:false,
            nav     :true,

            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{                                                 //create carousel for bestsell
                    items:1
                },
                300:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        
        /* animate filter */
        var owlAnimateFilter = function(even) {
            $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
        };

        $('.filter-menu').on('click', '.filter-btn', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;
                                                                                                //for arrival
            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');


            /* Filter */
            owl.owlFilter(filter_data, function(_owl) { 
                $(_owl).find('.item').each(owlAnimateFilter); 
            });
        });



         $('.filter-menu2').on('click', '.filter-btn2', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;
                                                                        //for bestsell
            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');


            /* Filter */
            owlss.owlFilter(filter_data, function(_owl) { 
                $(_owlss).find('.item').each(owlAnimateFilter); 
            });
        });
    })

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 
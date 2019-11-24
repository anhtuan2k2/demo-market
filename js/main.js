
$(document).ready(function(){


  //Carousel Collection
  $('.carousel-collect').owlCarousel({
    loop:true,          
    nav:false,
    dots:false,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:6
      }
    }
  });
  var owls = $('.carousel-collect');
  owls.owlCarousel();
  $('.customNextBtn').click(function() {
    owls.trigger('next.owl.carousel');
  })
        // Go to the previous item
        $('.customPrevBtn').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owls.trigger('prev.owl.carousel', [300]);
          });




  




// Back-To - Top
$(window).scroll(function(){
  if($(this).scrollTop() > 40 ){
    $('#btn-backtop').fadeIn();
  } else{
    $('#btn-backtop').fadeOut();
  }
});
$('#btn-backtop').click(function(){
  $('html,body').animate({scrollTop : 0 },400);
});

// menu hide and show
$(".den").click(function(){
  $(".den").removeClass("len");
  $(".menutrai").removeClass("showmenu"); 
});

$("#btn-menu").click(function(){
  $(".den").addClass("len");
  $(".menutrai").addClass("showmenu");
  

});



//  click to switch Grid-View or List View
$("#btn-grid").click(function(){
  $(".wrapper-product").css("display","block");
  $(".grid-view").css("background","#ff5500");
  $(".list-view").css("background","#fff");
  $(".wrapper-product-list").css("display","none");
  
});

$("#btn-list-view").click(function(){
  $(".wrapper-product-list").css("display","block");
  $(".list-view").css("background","#ff5500");
  $(".grid-view").css("background","#fff");
  $(".grid-view").css("color","#111");
  $(".wrapper-product").css("display","none");
  
});






// carousel for banner

$(".carousel-content-list").owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    nav : true, 
    dots: false,
    autoplaySpeed :300,
    navSpeed : 500,
    dotsSpeed : 500,
    autoplayHoverPause: true,
    margin:1,
  });   
  var carousel = $('.banner-carousel');     //Carousel banner width-height:
  var carouselctx = $('.banner-carousel-content');

  carouselInit();
  $(window).on('resize',function(){
    carouselInit();
  });

  function carouselInit(){
    var mWidth = carousel.width();
    var mHeight = mWidth/1.42180094787;
    carouselctx.height(mHeight);
  }

});

//slide-ranger

$(function() {
    $("#slider-range").slider({
      range: true,
      min: 2,
      max: 6000,
      values: [1000, 3000],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });




//Pagination for mid-product
$(function(){


        var items = $(".wrapper-product .item-grid");
    var numItems = items.length;
    var perPage = 9;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
});



  
 

//// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/


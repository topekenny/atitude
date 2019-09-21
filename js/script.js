/* preloader */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Team slider */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>']
    });
});

/* progress bar*/
$(function () {

    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* responsive tab*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* portfolio*/
$(window).on('load', function () {
    // isotope plugin
    $('#isotope-container').isotope({});

    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio item
        $('#isotope-container').isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

// magnify popup
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});

// testimonials slider testimonial-slider
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>']
    });
});

//counter
$(function () {
    $('.counter').counterUp({
    delay: 10,
    time: 2000,
    beginAt: 10,
});
});

// client section slider
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>']
    });
});



// google map

$(window).on('load', function () {
    
    var addressString ="Funtaj International School, Oladipo Diya Street, Abuja";
    var latlong ={
        lat: 9.004570,
        lng: 7.465840
    };
    //render map
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: latlong});
    
    // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: latlong, map: map, title: 'Click To see '});
    
    
     var infowindow = new google.maps.InfoWindow({
    content: addressString
  });
    var marker = new google.maps.Marker({
    position: latlong,
    map: map,
    
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

});


/*show and hide nav bar*/
$(function () {
    showhidenav();
    $(window).scroll(function(){
        showhidenav();
    });
    
    function showhidenav(){
        if ($(window).scrollTop() > 50 ){
              //show navbar
            $("nav").addClass("white-nav");
            
            
            $(".navbar-brand img").attr("src", "solo-images/logo/logo-dark.png")
            //back to top
            $("#back-to-top").fadeIn();
            }else{
                //hide navbar
                $("nav").removeClass("white-nav");
                $(".navbar-brand img").attr("src", "solo-images/logo/logo.png")
                $("#back-to-top").fadeOut();
            }
    }
});


/*smooth scroll*/

$(function () {
    $("a.smooth-scroll").click(function (event){
        event.preventDefault();
        // get section IDs
        var section = $(this).attr("href")
        
        $("html, body").animate({
           scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//animation on scroll

$(function () {
    new WOW().init();
});

//home animation on page load
$(window).on('load', function () {    
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated ZoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});









































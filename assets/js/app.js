"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  techin PRELOADER JS INIT
  techin HEADER SEARCH JS INIT
  techin STICKY MENU JS INIT
  techin MENU SIDEBAR JS INIT
  techin SKILLBAR JS INIT
  techin HERO SLIDER INIT
  techin FOUR COLUMN SLIDER INIT
  techin THREE COLUMN SLIDER INIT
  techin FOUR COLUMN SLIDER TWO INIT
  techin TWO COLUMN SLIDER INIT
  techin ONE COLUMN SLIDER INIT
  techin THREE COLUMN SLIDER TWO INIT
  techin BRAND SLIDER INIT
  techin COUNTER JS INIT
  techin COUNTER JS TWO INIT
  techin MAP JS
   
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    techin PRELOADER JS INIT
    --------------------------------------------------------------*/
    $(".techin-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    techin HEADER SEARCH JS INIT
    ------------------------------------------------------------*/
    $(".techin-header-search, .techin-header-search-close, .search-overlay").click(function () {
      $(".techin-header-search-section, .search-overlay").toggleClass("open");
    });

    /*--------------------------------------------------------------
    techin STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    techin MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".techin-header-triger").on("click", function (e) {
      $(".techin-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".techin-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".techin-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    techin Progree circle JS INIT
    --------------------------------------------------------------*/

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });

    /*--------------------------------------------------------------
    techin HERO SLIDER INIT
    --------------------------------------------------------------*/
    /*----------- Global Slider ----------*/
    $(".global-carousel").each(function () {
      var carouselSlide = $(this);
      function d(data) {
        return carouselSlide.data(data);
      }
    });
    /*----------- Custom Animaiton For Slider ----------*/

    $('[data-ani-duration]').each(function () {
      var durationTime = $(this).data('ani-duration');
      $(this).css('animation-duration', durationTime);
    });
    $('[data-ani-delay]').each(function () {
      var delayTime = $(this).data('ani-delay');
      $(this).css('animation-delay', delayTime);
    });
    $('[data-ani]').each(function () {
      var animaionName = $(this).data('ani');
      $(this).addClass(animaionName);
      $('.slick-slide [data-ani]').addClass('slider-animated');
    });
    $('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
      $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
    });

    /*--------------------------------------------------------------
    techin BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var brand_slider = $('.techin-brand-slider');
    if (brand_slider.is_exist()) {
      brand_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 500), "centerMode", true), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-brand-next"></button>'), "nextArrow", '<button class="slide-arrow techin-brand-prev"></button>'), "responsive", [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }]));
    }
    var brand_slider = $('.techin-brand-slider2');
    if (brand_slider.is_exist()) {
      brand_slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        arrows: false,
        centerMode: true,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    techin popup JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
    var $titleTab = $('.title_tab');
    $('.Accordion_item:eq(0)').find('.title_tab').addClass('active').next().stop().slideDown(300);
    $titleTab.on('click', function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().stop().slideUp(500);
        $(this).next().find('p').removeClass('show');
      } else {
        $(this).addClass('active');
        $(this).next().stop().slideDown(500);
        $(this).parent().siblings().children('.title_tab').removeClass('active');
        $(this).parent().siblings().children('.inner_content').slideUp(500);
        $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
        $(this).next().find('p').addClass('show');
      }
    });

    /*--------------------------------------------------------------
    techin COUNTER JS INIT
    --------------------------------------------------------------*/
    var techin_counter = $('#techin-counter');
    if (techin_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(techin_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.techin-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    // techin DATEPICKER JS INIT

    jQuery(document).ready(function () {
      jQuery('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
      });
    });
    jQuery(document).ready(function () {
      jQuery('#id_StartDate').datepicker({
        dateFormat: 'yy/mm/dd',
        startDate: '0d',
        minDate: 0,
        highlightWeek: true
      });
    });

    /*--------------------------------------------------------------
    techin BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var p_slider = $('.techin-three-column');
    if (p_slider.is_exist()) {
      p_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "centerMode", true), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-p-slider-next"></button>'), "nextArrow", '<button class="slide-arrow techin-p-slider-prev"></button>'), "responsive", [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px'
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      }])).slickAnimation();
    }
    /*--------------------------------------------------------------
    techin BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var s_slider = $('.techin-three-column2');
    if (s_slider.is_exist()) {
      s_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-s-slider-next"></button>'), "nextArrow", '<button class="slide-arrow techin-s-slider-prev"></button>'), "responsive", [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px'
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      }]));
    }

    /*--------------------------------------------------------------
    techin testimonial SLIDER INIT
    --------------------------------------------------------------*/
    var t_slider = $('.techin-t-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-t-slider-init-next"></button>'), "nextArrow", '<button class="slide-arrow techin-t-slider-init-prev"></button>'), "responsive", [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px'
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      }]));
    }
    (function ($) {
      $.fn.skillBars = function (options) {
        var settings = $.extend({
          from: 0,
          // number start
          to: false,
          // number end
          speed: 1000,
          // how long it should take to count between the target numbers
          interval: 100,
          // how often the element should be updated
          decimals: 0,
          // the number of decimal places to show
          onUpdate: null,
          // callback method for every time the element is updated,
          onComplete: null,
          // callback method for when the element finishes updating
          /*onComplete: function(from) {
                    console.debug(this);
                }*/
          classes: {
            skillBarBar: '.skillbar-bar',
            skillBarPercent: '.skill-bar-percent'
          }
        }, options);
        return this.each(function () {
          var obj = $(this),
            to = settings.to != false ? settings.to : parseInt(obj.attr('data-percent'));
          if (to > 100) {
            to = 100;
          }
          ;
          var from = settings.from,
            loops = Math.ceil(settings.speed / settings.interval),
            increment = (to - from) / loops,
            loopCount = 0,
            interval = setInterval(updateValue, settings.interval);
          obj.find(settings.classes.skillBarBar).animate({
            width: parseInt(obj.attr('data-percent')) + '%'
          }, settings.speed);
          function updateValue() {
            from += increment;
            loopCount++;
            $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
            if (typeof settings.onUpdate == 'function') {
              settings.onUpdate.call(obj, from);
            }
            if (loopCount >= loops) {
              clearInterval(interval);
              from = to;
              if (typeof settings.onComplete == 'function') {
                settings.onComplete.call(obj, from);
              }
            }
          }
        });
      };
    })(jQuery);
    $(document).ready(function () {
      $(".toggle-button").change(function () {
        toggle(this.checked);
      });

      // Uncomment this to disaplay monthly on page load
      toggle(false);
      function toggle(checked) {
        $(".toggle-button").prop('checked', checked);
        if (checked) {
          $('#coreMonthlyText,#coreMonthlyPrice,#proMonthlyText,#proMonthlyPrice').show();
          $('#coreAnnuallyText,#coreAnnuallyPrice,#proAnnuallyText,#proAnnuallyPrice').hide();
        } else {
          $('#coreMonthlyText,#coreMonthlyPrice,#proMonthlyText,#proMonthlyPrice').hide();
          $('#coreAnnuallyText,#coreAnnuallyPrice,#proAnnuallyText,#proAnnuallyPrice').show();
        }
      }
    });

    /*--------------------------------------------------------------
    techin COUNTER JS TWO INIT
    --------------------------------------------------------------*/
    var techin_counter2 = $('#techin-counter2');
    if (techin_counter2.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(techin_counter2).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.techin-counter2').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    techin current year JS INIT
    --------------------------------------------------------------*/

    var currentYear = new Date().getFullYear();
    $('#current-year').text(currentYear);

    /*--------------------------------------------------------------
    techin AOS ANIMATION JS INIT
    --------------------------------------------------------------*/

    AOS.init({
      once: true // Ensure animations can trigger multiple times
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on('load', function () {}); // End window LODE

  /*--------------------------------------------------------------
  techin MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'techin'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>techin' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }
})(jQuery);
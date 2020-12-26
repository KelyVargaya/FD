(function ($) {
    "use strict";
  
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(500).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    new WOW().init();
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    var scrolltoOffset = $('#header').outerHeight() - 16;
    if (window.matchMedia("(max-width: 991px)").matches) {
      scrolltoOffset += 16;
    }
    $(document).ready(function() {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
        }
      }
    });
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle span').toggleClass('icon-menu-mobil icon-remove');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
   if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><span class="icon-menu-mobil"></span></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle span').toggleClass('icon-menu-mobil icon-remove');
        $('.mobile-nav-overly').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(380);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle span').toggleClass('icon-menu-mobil icon-remove');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
   /*
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 200;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
    */
   $(document).ready(function() {
    $('.venobox').venobox();
  });

  
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      dots: true,
      items: 2,
   	  autoplayTimeout: 12000,
      loop:true,
      nav:true,
      margin: 20,
      responsive:{
          0:{
              items:1,
              stagePadding: 40,
              margin: 5,
          },
          600:{
              items:2,
              stagePadding: 50,
          },
          1000:{
              items:2,
              stagePadding: 180,
          }
      }
  })
  })(jQuery);
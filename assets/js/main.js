$('#toggle-nav').click(function(){
  $('.items-nav').toggleClass("responsive");
});

$('#toggle-nav a').click(function(){
  $('#search-mobile').toggleClass("responsive");
});

$('#toggle-search a').click(function(){
  $('.search-bar').toggleClass("responsive");
});

$('#projects-link').hover(function(){
  $('#subproject').addClass(" --flex-show");
});

$('#contact-agent-btn').click(function(){
  $('.contact-agent').toggleClass("is-showing");
  // $('.--gray').toggleClass("btn-active");
});

$('#close-agent-btn').click(function(){
  $('.contact-agent').removeClass("is-showing");
});

$('#map-btn').click(function(){
  $('.map-card').toggleClass("is-showing");
  $('.--green').toggleClass("btn-active");
});


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  console.log('wScroll', wScroll);

  if(wScroll > 800) {
    $('#projects-tab').addClass("fix");
  }

  else {
    $('#projects-tab').removeClass("fix");
  }

  if(wScroll > 300) {
   $('.floatlogo-block').css({
    'transform': 'translate(0px, '+ wScroll / 4.5 +'%) scale(0.8)',
    'transition': '.1s ease-in-out'
  });
  }
  else {
    $('.floatlogo-block').css({
      'transform': 'translate(0px, '+ wScroll / 4.5 +'%) scale(1)',
      'transition': '.1s ease-in-out'
    });
  }


   if(wScroll > $('#scroll-2').offset().top - ($(window).height() / 3)) {
      $('.main-nav img').attr({
        'src': 'assets/img/Logo-wcap.png',
      });
    }
  	else {
  	 $('.main-nav').css({
  	  'height': '60px'
  	 });

  	 $('.main-nav img').attr({
        'src': 'assets/img/Logo-nocap.png'
      });
    }

  
});
  
$('#know-story-btn').click(function(){
  $('html, body').animate({scrollTop : 670});
  return false;
});

$('#know-more-btn').click(function(){
  $('html, body').animate({scrollTop : 1500});
  return false;
});


$("body").on("keydown", "#submit-search", function(e) {
  if (e.keyCode == 13) {
    window.location.href = "/search-result.html";
  }
});




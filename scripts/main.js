// Import sections
$(function () {
    $('#navbar-section').load('./sections/header/navbar.html');
    $('#intro-section').load('./sections/header/coverpage.html');
    $('#introcards-section').load('./sections/header/covercards.html');
    $('#workus-section').load('./sections/workus/index.html');
    $('#projects-section').load('./sections/projects/index.html');
    $('#pricing-section').load('./sections/pricing/index.html');
    $('#team-section').load('./sections/team/index.html');
    $('#contact-section').load('./sections/contact/index.html');
    $('#footer-section').load('./sections/footer/index.html');
  })

// Select item in nav bar on scroll
$(document).ready(function (){
  $('body').scrollspy({ target: '.navbar' });
  $('.nav-link').on('click', function(){
      var clickedItem = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(clickedItem).offset().top
      }, 600);
  });
});

// Close toggle navbar menu on click in nav
$(document).on('click', '.navbar-nav>li>a, .navbar-brand, .dropdown-menu>a', function (e) {
  if ( $(e.target).is('a') && $(e.target).attr('class') != 'nav-link dropdown-toggle' ) {
    $('.navbar-collapse').collapse('hide');
  }
});

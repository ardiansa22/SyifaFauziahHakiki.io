// ----------------------------NavbarCollapse--------------------
$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// pagescroll
$.scrollIt({
  topOffset: -50,
});
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 90) {
      $('.navbar').addClass('navbar-shrink');
    } else {
      $('.navbar').removeClass('navbar-shrink');
    }
  });
});

$('.btn-1').on('click', function () {
  alert('Hello Syifa!, If you want get your Gift, Please Call your boyfriend');
});

// feature
$('.features-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// story carousel
$('.story-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Toggle theme light and dark mode
function toggleTheme() {
  if (localStorage.getItem('ferian-theme') !== null) {
    if (localStorage.getItem('ferian-theme') === 'dark') {
      $('body').hasClass('dark');
    } else {
      $('body').removeClass('dark');
    }
  }
  updateIcon();
}
toggleTheme();
$('.toggle-theme').on('click', function () {
  $('body').toggleClass('dark');
  if ($('body').hasClass('dark')) {
    localStorage.setItem('ferian-theme', 'dark');
  } else {
    localStorage.setItem('ferian-theme', 'light');
  }
  updateIcon();
});
function updateIcon() {
  if ($('body').hasClass('dark')) {
    $('.toggle-theme i').removeClass('fa-moon');
    $('.toggle-theme i').addClass('fa-sun');
  } else {
    $('.toggle-theme i').removeClass('fa-sun');
    $('.toggle-theme i').addClass('fa-moon');
  }
}

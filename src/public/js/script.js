//Toggle
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$('#top-nav').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// Scroll
let btnNav = document.getElementById('btn-nav');

let topNav = document.getElementById('top-nav');
let descriptNav = document.getElementById('description-nav');
let downloadNav = document.getElementById('download-nav');
let contactNav = document.getElementById('contact-nav');

var myNav = $('#mainNav');
window.onscroll = function () {
  'use strict';
  if ($(this).scrollTop() > myNav.height()) {
    myNav.addClass('bg-info');
    myNav.addClass('shadow-sm');
    topNav.classList.remove('text-white-50');
    descriptNav.classList.remove('text-white-50');
    downloadNav.classList.remove('text-white-50');
    contactNav.classList.remove('text-white-50');
  } else {
    myNav.removeClass('bg-info');
    myNav.removeClass('shadow-sm');
    topNav.classList.add('text-white-50');
    descriptNav.classList.add('text-white-50');
    downloadNav.classList.add('text-white-50');
    contactNav.classList.add('text-white-50');
  }
};

function gotoDescription(e) {
  let description = document.getElementById('description');
  window.scrollTo(0, description.offsetTop - 72);
}

descriptNav.addEventListener('click', function (e) {
  e.preventDefault();
  let description = document.getElementById('description');
  window.scrollTo(0, description.offsetTop - 72);
});

downloadNav.addEventListener('click', function (e) {
  e.preventDefault();
  let download = document.getElementById('download');
  window.scrollTo(0, download.offsetTop - 72);
});

contactNav.addEventListener('click', function (e) {
  e.preventDefault();
  let contact = document.getElementById('contact');
  window.scrollTo(0, contact.offsetTop - 72);
});

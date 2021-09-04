'use strict';

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const openNavbar = hamburger.querySelector('.open-icon');
const closeNavBar = hamburger.querySelector('.close-icon');

hamburger.addEventListener('click', function() {
  navItems.classList.toggle('show-navbar');
  openNavbar.classList.toggle('hidden');
  closeNavBar.classList.toggle('hidden');
})
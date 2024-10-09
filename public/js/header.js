document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.header-dropdown > a').forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdown = this.nextElementSibling;
      dropdown.style.display =
        dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function (event) {
    if (
      !event.target.closest('.header-dropdown') &&
      !event.target.closest('.hamburger')
    ) {
      document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
        dropdown.style.display = 'none';
      });
    }
  });
});

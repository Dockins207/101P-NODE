document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.getElementById('search-toggle');
  const searchInput = document.getElementById('search-input');
  const headerSearch = document.querySelector('.header-search');

  searchToggle.addEventListener('click', function () {
    headerSearch.classList.toggle('show'); // Toggle the visibility of the input
    searchInput.focus(); // Optionally focus the input field when it is displayed
  });
});

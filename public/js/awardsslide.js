function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener(
  'scroll',
  debounce(function () {
    const awardsSection = document.getElementById('awards');
    const awardsContainer = document.querySelector('.awards-container');
    const sectionPosition = awardsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    // Check if the section is in the viewport
    if (sectionPosition < screenPosition) {
      awardsContainer.classList.add('show');
    } else {
      awardsContainer.classList.remove('show');
    }
  })
);

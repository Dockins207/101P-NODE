// JavaScript to detect when the section is in the viewport and trigger animation
window.addEventListener('scroll', function () {
  const statisticsSection = document.getElementById('statistics');
  const statisticsContainer = document.querySelector('.statistics-container');
  const sectionPosition = statisticsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    statisticsContainer.classList.add('show');
    startCounting();
  } else {
    statisticsContainer.classList.remove('show');
  }
});

// Function to animate the number counting effect
function startCounting() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((stat) => {
    const updateCount = () => {
      const target = +stat.getAttribute('data-target');
      const count = +stat.innerText;

      const increment = target / 100;

      if (count < target) {
        stat.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        stat.innerText = target;
      }
    };

    updateCount();
  });
}

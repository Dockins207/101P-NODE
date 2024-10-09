document.addEventListener('DOMContentLoaded', function () {
  const reviewItems = document.querySelectorAll('.review-date');

  reviewItems.forEach((item) => {
    const dateText = item.innerText.split(' - ')[0];
    const reviewDate = new Date(dateText);

    // Check if date is valid
    if (isNaN(reviewDate.getTime())) {
      console.error(`Invalid date format: ${dateText}`);
      return; // Skip invalid dates
    }

    const currentDate = new Date();

    // Calculate months difference
    const months =
      (currentDate.getFullYear() - reviewDate.getFullYear()) * 12 +
      (currentDate.getMonth() - reviewDate.getMonth());

    // Update the "months ago" part
    const monthText = months === 1 ? '1 month ago' : `${months} months ago`; // Handle singular/plural
    item.innerText = `${dateText} - ${monthText}`;
  });
});

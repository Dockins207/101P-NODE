document.addEventListener('DOMContentLoaded', () => {
  const leaveReviewButton = document.getElementById('leaveReviewButton');

  leaveReviewButton.addEventListener('click', () => {
    // For testing: Show an alert
    alert('Button clicked!');

    window.location.href =
      'https://www.google.com/search?q=101-properties.com&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgoIARAuGLEDGIAEMgYIAhBFGDsyDQgDEAAYgwEYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDM0NDhqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x182f0b4d8656b079:0xe14d117316261f89,3,,,,';
  });
});


class MyproPerties extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Selling Now Section -->
<section class="latest-deals-section">
    <h2 class="latest-deals-heading"><strong>SELLING NOW</strong></h2>
    <div class="deal-container-wrapper">
        <div class="deal-container">
            <img src="path/to/image1.jpg" alt="Property 1">
            <div class="deal-content">
                <h3 class="deal-title">Serene Gardens Estate</h3>
                <p class="deal-info"><strong>Location</strong></p>
                <p class="deal-info"><strong>Price</strong></p>
            </div>
        </div>
        <div class="deal-container">
            <img src="./101 properties imgs/award1.jpeg" alt="Property 2">
            <div class="deal-content">
                <h3 class="deal-title">Palmview Villas</h3>
                <p class="deal-info"><strong>Location</strong></p>
                <p class="deal-info"><strong>Price</strong></p>
            </div>
        </div>
        <div class="deal-container">
            <img src="path/to/image3.jpg" alt="Property 3">
            <div class="deal-content">
                <h3 class="deal-title">Palmview Villas</h3>
                <p class="deal-info"><strong>Location</strong></p>
                <p class="deal-info"><strong>Price</strong></p>
            </div>
        </div>
    </div>
    <div class="deal-details-container">
        <a href="../101 properties pages/sellingnow.html">View More Properties &rarr;</a>
    </div>
</section>

<style>
    /* General Styles for Latest Deals Section */
.latest-deals-section {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #ffffff; /* Set background to white */
    padding: 2rem 0;
}

/* Heading Styles */
.latest-deals-heading {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #000;
}

/* Container Wrappers */
.deal-container-wrapper {
    display: flex;
    justify-content: space-between; /* Align items left, center, right */
    flex-wrap: nowrap; /* Keep elements on one line */
    gap: 2%; /* Add spacing between sections */
}

/* Individual Deal Containers */
.deal-container {
    flex: 0 0 32%; /* Each container takes up 32% of the width */
    box-sizing: border-box;
    padding: 0px;
    text-align: center;
    background-color: #fff;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    height: 500px;
    overflow: hidden;
    padding-bottom: 20px;
}

.deal-container img {
    width: 100%;
    height: 70%; /* Adjust image height */
    object-fit: cover;
    border: none;
    margin-bottom: 0;
}

/* Content inside each deal container */
.deal-content {
    padding: 1rem;
    text-align: left;
    word-wrap: break-word;
    min-height: 30%;
}

/* Deal Titles and Information */
.deal-title, .deal-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.deal-title {
    font-size: 1.2rem;
    color: #000;
    margin-bottom: 0.5rem;
}

.deal-info {
    font-size: 1rem;
    color: #000;
    margin-bottom: 0.3rem;
    white-space: normal;
}

/* Link Styles for View More */
.deal-details-container {
    text-align: center;
    margin-top: 20px;
}

.deal-details-container a {
    color: red;
    text-decoration: none;
    font-weight: bold;
}

.deal-details-container a:hover {
    color: green;
}

/* Responsive Design */
@media (max-width: 768px) {
    .deal-container {
        flex: 0 0 100%; /* Stack containers vertically on smaller screens */
        margin-bottom: 1rem;
    }

    .deal-container-wrapper {
        flex-direction: column; /* Make containers stack vertically */
    }
}

</style>
        `;
    }
}
customElements.define('my-properties', MyproPerties);




class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
    footer {
        background-color: red; /* Red background color */
        height: 2rem; /* Footer height set to 2rem */
        display: flex;
        align-items: center; /* Vertically center content */
    }
    
    .footer-content {
        width: 100%;
        text-align: center; /* Center content horizontally */
    }
    
    footer p {
        margin: 0;
        color: white; /* White text color */
        font-size: 0.5rem; /* Scaled text for readability */
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        footer {
            height: 2.5rem; /* Increase footer height for smaller screens */
        }
    
        footer p {
            font-size: 0.6rem; /* Slightly larger text for small screens */
        }
    }
    
</style>

<style>
    /* Info Links Section Styling */
.info-links {
    background-color: blue; /* Blue background color */
    padding: 2rem 0;
    color: white;
}

.info-links .container {
    max-width: 75rem; /* Adjusted max-width to 75rem */
    margin: 0 auto;
    padding: 0 1rem; /* Padding remains the same */
}

.info-links .row {
    display: flex;
    justify-content: space-between; /* Distribute columns evenly */
    flex-wrap: wrap; /* Ensure the layout adapts to smaller screens */
    gap: 1.25rem; /* Adjusted space between columns to 1.25rem */
}

.info-links .column {
    flex: 1;
    min-width: 12.5rem; /* Adjusted minimum width to 12.5rem */
    margin: 0 1rem; /* Margin remains the same */
    display: flex;
    flex-direction: column; /* Stack heading and links vertically */
    align-items: center; /* Center heading and links */
}

.info-links h4 {
    font-size: 1.5rem; /* Make the heading larger */
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center; /* Center heading text */
}

.info-links ul {
    list-style: none;
    padding: 0;
    text-align: center; /* Center the links */
}

.info-links ul li {
    margin-bottom: 0.8rem;
    font-size: 1rem; /* Font size remains the same */
}

/* Social Icons Styling */
.social-icons {
    text-align: center;
    margin-top: 0.0625rem; /* Adjusted to 0.0625rem */
    margin-bottom: 0.0625rem; /* Adjusted to 0.0625rem */
}

.social-icons a {
    color: white;
    margin: 0 1.25rem; /* Adjusted margin to 1.25rem */
    font-size: 1.5rem; /* Adjust the size of the icons */
    text-decoration: none;
}

.social-icons a:hover {
    color: lightgray; /* Optional: change color on hover */
}

/* Optional: Style the links */
.info-links ul li a {
    color: white;
    text-decoration: none;
}

.info-links ul li a:hover {
    text-decoration: underline; /* Optional hover effect */
}

</style>

<style>
    /* WhatsApp Floating Icon */
.whatsapp-float {
    position: fixed;
    bottom: 2rem;
    left: 1.5rem; /* Left aligned */
    z-index: 100;
    cursor: pointer;
    border-radius: 50%;
}

.whatsapp-float img {
    width: 3rem;
    height: 3rem;
    transition: all 0.3s ease;
}

.whatsapp-float:hover img {
    transform: scale(1.1); /* Slightly increase the size */
}

/* Message Floating Icon */
.message-float {
    position: fixed;
    bottom: 2rem; /* Same bottom as WhatsApp to align horizontally */
    right: 1.5rem; /* Positioned on the right side of the screen */
    z-index: 101;
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    transition: all 0.3s ease;
}

.message-float img {
    width: 3rem;
    height: 3rem;
    transition: all 0.3s ease;
}

.message-float:hover img {
    transform: scale(1.1); /* Slightly increase the size */
}

/* Chat Box */
.chat-box {
    visibility: hidden; /* Hidden initially */
    opacity: 0; /* Invisible initially */
    position: fixed;
    bottom: 5rem;
    right: 1.5rem; /* Aligned with the message icon */
    width: 20rem;
    height: 30rem;
    border-radius: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
    z-index: 101;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease, visibility 0s 0.3s; /* Delayed visibility change */
    overflow: hidden;
    transform: scale(0.95); /* Slightly shrink for smooth effect */
}

/* When the chat is visible */
.chat-box.active {
    visibility: visible;
    opacity: 1;
    transform: scale(1); /* Back to original size */
    transition: all 0.3s ease;
}

/* Chat Header */
.chat-header {
    background-color: #030c5e;
    padding: 0.8rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Chat Body */
.chat-body {
    padding: 1rem;
    background-color: #f9f9f9;
    max-height: calc(100% - 7rem); /* Adjust height based on header and footer */
    overflow-y: auto;
    flex-grow: 1;
}

.chat-body p {
    margin: 0;
    padding: 0.8rem;
    border-radius: 1rem;
    overflow-wrap: break-word; /* Break long words */
}

/* User and Receiver Messages */
.user-message {
    background-color: lightgreen;
    color: black;
    text-align: right;
    margin-bottom: 1rem;
    border-radius: 1rem;
    padding: 0.8rem;
    max-width: 50%; /* Cover half of the chat box width */
}

.receiver-message {
    background-color: #e6e6e6;
    color: black;
    text-align: left;
    margin-bottom: 1rem;
    border-radius: 1rem;
    padding: 0.8rem;
    max-width: 50%; /* Cover half of the chat box width */
}

/* Chat Footer */
.chat-footer {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #ddd;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.chat-footer input {
    flex: 1; /* Full width input field */
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    margin-right: 0.8rem;
}

.chat-footer button.send-btn {
    flex: 0.2;
    background-color: red;
    color: white;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.chat-footer button.send-btn:hover {
    background-color: green;
}

/* Media Queries for Responsiveness */
@media (max-width: 48rem) {
    .whatsapp-float {
        bottom: 1rem; /* Adjust for smaller screens */
        left: 1rem; /* Closer to the left edge */
    }

    .message-float {
        bottom: 1rem; /* Adjust for smaller screens */
        right: 1rem; /* Align with the right edge */
    }

    .chat-box {
        width: 16rem; /* Reduced width for smaller screens */
        height: auto; /* Allow height to adjust */
        bottom: 3.5rem;
    }

    .chat-body {
        max-height: calc(100% - 6rem); /* Adjust for smaller screens */
    }
}

</style>

<script>
     // Function to toggle chat box visibility
 function toggleChat() {
    var chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('active');
}

// Function to send a message
function sendMessage() {
    var chatInput = document.getElementById('chatInput');
    var chatBody = document.querySelector('.chat-body');
    var messageError = document.getElementById('messageError');

    if (chatInput.value.trim() === '') {
        messageError.classList.add('active');
        setTimeout(function() {
            messageError.classList.remove('active');
        }, 2000); // Error message disappears after 2 seconds
        return;
    }

    // Create new user message element
    var userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = chatInput.value;

    // Append user message to chat body
    chatBody.appendChild(userMessage);

    // Scroll to bottom of chat body
    chatBody.scrollTop = chatBody.scrollHeight;

    // Clear input field
    chatInput.value = '';

    // Hide error message if visible
    messageError.classList.remove('active');
}

// Display the initial welcome message
document.addEventListener('DOMContentLoaded', function() {
    var chatBody = document.querySelector('.chat-body');
    var welcomeMessage = document.createElement('p');
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.textContent = 'Welcome to 101 Properties! Discover affordable land options within the Nairobi metropolis. How can I assist you today?';
    chatBody.appendChild(welcomeMessage);
});
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<!-- Info Links Section -->
<section class="info-links">
    <div class="container">
        <div class="row">
            <div class="column">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="./101 properties pages/careers.html">Careers</a></li>
                    <li><a href="https://www.google.com/search?q=101+Properties+Google+reviews&oq=101+properties+Google+reviews&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYogQYiQUyCggGEAAYogQYiQUyBggHEEUYQNIBCDU2NzVqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x182f0b4d8656b079:0xe14d117316261f89,1,,,,">Testimonials</a></li>
                    <li><a href="./101 properties pages/blogs.html">Blogs</a></li>
                    <li><a href="./101 properties pages/howtobuyland.html">How To Buy Land</a></li>
                </ul>
            </div>
            <div class="column">
                <h4>Plots for Sale</h4>
                <ul>
                    <li><a href="#">Isinya</a></li>
                    <li><a href="#">Azalea</a></li>
                    <li><a href="#">Lema</a></li>
                    <li><a href="#">Malindi</a></li>
                </ul>
            </div>
            <div class="column">
                <h4>Office Location</h4>
                <ul>
                    <li><a href="https://www.google.com/maps/place/1%C2%B025'02.7%22S+36%C2%B057'13.3%22E/@-1.4170264,36.9500605,16z/data=!4m4!3m3!8m2!3d-1.4174167!4d36.9536944?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">Location</a></li>
                </ul>
            </div>
            <div class="column">
                <h4>Contacts</h4>
                <ul>
                    <li><a href="#">Contact 1</a></li>
                    <li><a href="#">Contact 2</a></li>
                    <li><a href="#">Contact 3</a></li>
                    <li><a href="#">Contact 4</a></li>
                    <li><a href="#">Contact 5</a></li>
                </ul>
            </div>
        </div>
        <!-- Social Media Icons -->
        <div class="social-icons">
            <a href="https://www.facebook.com/101PropertiesKe/" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.google.com/maps/place/1%C2%B025'02.7%22S+36%C2%B057'13.3%22E/@-1.4170264,36.9500605,16.58z/data=!4m4!3m3!8m2!3d-1.4174071!4d36.9537024?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="fas fa-map-marker-alt"></i></a>
        </div>
    </div>
</section>
<!-- end of Info Links Section -->

<!-- WhatsApp Floating Icon -->
<a href="https://api.whatsapp.com/send?phone=%2B254708929173&context=ARDM4krmTJdERPQwcsaLD5EIwemJWWBH1aqkYDsrQu9NiBfNfFqQs78XD6uoOwCXy464N9h_5w3HDN0LOBMUcHOpOd3fBTwqdB0nq8zzd_77baVR476U0gSLGgvF_Pg_WdmnqgXbqkN18dWRDj0JL39Apg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFJULFleHRuA2FlbQIxMAABHYx4YrkBq01IZBflAHKYMXB22OBqL_ImdVmZunP4M8M973RV120IfeWUsQ_aem_qZF7wcDUNlcFRuZP-dw3ZQ" class="whatsapp-float" target="_blank">
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp">
</a>

<!-- Message Floating Icon -->
<div class="message-float" onclick="toggleChat()">
    <img src="../101 properties imgs/icons8-message-50-2.png" alt="Message">
</div>

<!-- Chat Box -->
<div class="chat-box" id="chatBox">
    <div class="chat-header">
        <h3>Hi there</h3>
        <button class="close-chat" onclick="toggleChat()">✖</button>
    </div>
    <div class="chat-body">
        <!-- Sent messages will be appended here -->
    </div>
    <div class="chat-footer">
        <input type="text" id="chatInput" placeholder="Enter your message..." />
        <button class="send-btn" onclick="sendMessage()">Send</button>
    </div>
    <div class="message-error" id="messageError">Message is empty</div>
</div>
<!-- end of Message and WhatsApp icon -->

<!-- Footer -->
<footer>
    <div class="footer-content">
        <div class="footer-left">
            <p>&copy; 2024 101 Properties. All rights reserved.</p>
        </div>
    </div>
</footer>
<!-- end of Footer -->

        `;
    }
}
customElements.define('my-footer', MyFooter);



class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}section{overflow-x:hidden;overflow-y:auto;max-width:100%;word-wrap:break-word}body{overflow-x:hidden;width:100%}iframe,img,video{max-width:100%;height:auto}div{overflow-wrap:break-word;word-wrap:break-word}section.background-section{position:relative;width:100vw;height:100vh;background-image:url('../101 properties imgs/Untitled design.svg');background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1;overflow:hidden}section.background-section .content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;text-align:center;font-size:2rem}
.about{text-align:center;padding:2rem;margin-top:-12rem}.about h2{margin:0;font-size:2rem}.about p{margin:0 auto;max-width:80%}@media (max-width:600px){.about h2{font-size:1.5rem}.about p{font-size:.875rem;max-width:90%}}
/* Top Bar (Blue Bar) */
.top-bar {
  background: #0000ff;
  color: white;
  text-align: center;
  padding: 0.3rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  white-space: nowrap; /* Prevents wrapping within the top-bar */
}

/* Contact Info */
.contact-info {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 0rem;
  white-space: nowrap; /* Prevents wrapping for both email and phone */
}

/* Styling for Links */
.contact-link {
  color: white;
  text-decoration: none;
}

.contact-link:hover {
  color: lightgreen;
}

/* Header Styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 10px 16px rgba(0, 0, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  z-index: 1000;
  margin-top: 1rem; /* Adjust based on the top bar */
}

/* Logo Styling */
.header-logo {
  flex: 1;
  display: flex;
  align-items: center;
}

.header-logo img {
  max-width: 90%;
  width: 7rem;
  object-fit: contain;
}

/* Navigation for Large Screens */
.header-nav {
  display: flex;
  align-items: center;
  flex: 2;
  justify-content: center;
}

.nav-links {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links > li {
  margin: 0 1rem;
}

.nav-links a {
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}

.header-dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0000ff; /* Blue dropdown background color */
  min-width: 10rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  padding: 0.625rem;
}

.header-dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #f7f4f4;
  font-size: 0.875rem;
  border-bottom: 1px solid red;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
}

/* Hover Effect */
.dropdown-content a:hover {
  color: red;
}

/* Hamburger Menu - Large screens */
.hamburger {
  display: none;
}

/* Search Icon for Large Screens */
.header-search {
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
}

.header-search input {
  display: none; /* Hidden by default */
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.header-search button {
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Show search input when icon is clicked (for large screens) */
.header-search.show input {
  display: block;
}

/* Small Screens (Mobile) Styles */
@media (max-width: 768px) {
  /* Adjust Top Bar for smaller screens */
  .top-bar {
    font-size: 0.7rem;
    padding: 0.5rem;
  }

  .contact-link {
    font-size: 0.7rem;
  }

  /* Header Styling for Mobile */
  header {
    justify-content: space-between;
    margin-top: 1rem;
    height: 5rem;
  }

  /* Logo Styling */
  .header-logo {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: -2rem;
    height: 0.5rem;
  }

  /* Hamburger Menu - Show for mobile */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    margin-bottom: 0;
    margin-right: -1rem;
  }

  .hamburger .bar {
    width: 100%;
    height: 0.2rem;
    background-color: blue;
    border-radius: 0.3rem;
    transition: all 0.3s ease;
  }

  .hamburger {
    z-index: 3000; /* Higher than dropdown and other elements */
  }

  .hamburger.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(0.25rem, 0.25rem);
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(0.25rem, -0.25rem);
  }

  /* Mobile navigation menu */
  .header-nav {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 2002;
    padding: 1rem;
    justify-content: center;
  }

  .header-nav.active {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    text-align: center;
  }

  /* Reduced space between hamburger menu links */
  .nav-links > li {
    margin: 0.5rem 0; /* Reduced from 1rem to 0.5rem */
  }

  /* Dropdown Centering for Mobile */
  .dropdown-content {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    background-color: rgba(0, 0, 255, 1); /* Fully opaque blue */
    opacity: 1; /* Ensures no transparency */
    z-index: 2000; /* Ensures it's above other elements */
  }

  /* Red Hover Effect on Dropdown Links (Mobile) */
  .dropdown-content a:hover {
    color: red; /* Red hover color on all screens */
  }

  .header-dropdown.active .dropdown-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgba(0, 0, 255, 1); /* Ensures blue is solid here too */
    z-index: 2000; /* Ensures proper stacking above other elements */
  }

  /* Search Bar in Hamburger Menu */
  .header-search {
    margin-right: 1rem;
  }

  .header-nav.active .header-search {
    display: block; /* Show the search bar below the contacts inside the hamburger */
  }

  .header-nav.active .header-search input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }
}

</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const headerSearch = document.querySelector('.header-search');
  
    searchToggle.addEventListener('click', function() {
      headerSearch.classList.toggle('show'); // Toggle the visibility of the input
      searchInput.focus(); // Optionally focus the input field when it is displayed
    });
  });
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');

hamburger.addEventListener('click', function() {
nav.classList.toggle('active');
});

document.querySelectorAll('.header-dropdown > a').forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
});

document.addEventListener('click', function(event) {
if (!event.target.closest('.header-dropdown') && !event.target.closest('.hamburger')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}
});
});
</script>
<!-- Blue Top Bar -->
<div class="top-bar">
    <div class="contact-info">
        <span class="top-bar-email">
            <a href="mailto:101properties@gmail.com" class="contact-link">101properties@gmail.com</a>
        </span>
        <span class="top-bar-phone">
            <a href="tel:+254722227066" class="contact-link">0722227066</a> / 
            <a href="tel:+254790730302" class="contact-link">0790730302</a>
        </span>
    </div>
</div>

  <!-- Header -->
  <header class="header-wrapper">
    <div class="header-logo">
        <a href="../index.html">
            <img id="logo" class="crop-clip" src="../logo/logo.svg" alt="Logo">
        </a>
    </div>
    <nav class="header-nav">
        <ul class="nav-links">
            <li class="header-dropdown">
                <a href="#">About</a>
                <div class="dropdown-content">
                    <a href="../101 properties pages/whyinvestwithus.html">Why Invest With Us</a>
                    <a href="../101 properties pages/managementteam.html">Management Team</a>
                    <a href="../101 properties pages/awards.html">Awards</a>
                    <a href="../101 properties pages/careers.html">Careers</a>
                </div>
            </li>
            <li class="header-dropdown">
                <a href="#">Properties</a>
                <div class="dropdown-content">
                    <a href="../101 properties pages/newproperties.html">New Properties</a>
                    <a href="../101 properties pages/sellingnow.html">Selling Now</a>
                    <a href="../101 properties pages/offers.html">Offers</a>
                    <a href="../101 properties pages/howtobuyland.html">How To Buy Land</a>
                </div>
            </li>
            <li class="header-dropdown">
                <a href="#">Products</a>
                <div class="dropdown-content">
                    <a href="../101 properties pages/partnercenter.html">Partner Center</a>
                </div>
            </li>
            <li class="header-dropdown">
                <a href="#">Media</a>
                <div class="dropdown-content">
                    <a href="../101 properties pages/blogs.html">Blogs</a>
                    <a href="../101 properties pages/news.html">News</a>
                    <a href="../101 properties pages/gallery.html">Gallery</a>
                    <a href="../101 properties pages/newsletter.html">Newsletter</a>
                </div>
            </li>
            <li class="mobile-only">
                <a href="../101 properties pages/diaspora.html">Diaspora</a>
            </li>
            <li class="mobile-only">
                <a href="../101 properties pages/faqspage.html">FAQS</a>
            </li>
            <li class="mobile-only">
                <a href="../101 properties pages/contact.html">Contact</a>
            </li>
        </ul>
    </nav>
  
    <!-- Search Icon and Input -->
    <div class="header-search">
        <button id="search-toggle">
            <i class="fa fa-search"></i>
        </button>
        <input type="text" id="search-input" placeholder="Search...">
    </div>
  
    <button class="hamburger" aria-label="Menu Toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
  </header>
<!-- end of header -->
      `;
  }
}

customElements.define('my-header', MyHeader);
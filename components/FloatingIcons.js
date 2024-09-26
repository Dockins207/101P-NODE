import { useState } from 'react';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible((prevState) => !prevState);
  };

  const sendMessage = () => {
    const input = document.getElementById('chatInput');
    const messageBody = document.querySelector('.chatBody');
    const messageError = document.getElementById('messageError');

    if (input.value.trim() === '') {
      messageError.style.display = 'block';
      return;
    }

    messageError.style.display = 'none';

    const message = document.createElement('p');
    message.className = 'userMessage'; // Fixed class name
    message.textContent = input.value;
    messageBody.appendChild(message);

    input.value = '';
  };

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=%2B254708929173&context=ARDM4krmTJdERPQwcsaLD5EIwemJWWBH1aqkYDsrQu9NiBfNfFqQs78XD6uoOwCXy464N9h_5w3HDN0LOBMUcHOpOd3fBTwqdB0nq8zzd_77baVR476U0gSLGgvF_Pg_WdmnqgXbqkN18dWRDj0JL39Apg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFJULFleHRuA2FlbQIxMAABHYx4YrkBq01IZBflAHKYMXB22OBqL_ImdVmZunP4M8M973RV120IfeWUsQ_aem_qZF7wcDUNlcFRuZP-dw3ZQ"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
        />
      </a>

      <div
        className={`${styles.chatBox} ${isChatVisible ? styles.active : ''}`}
        id="chatBox"
      >
        <div className={styles.chatHeader}>
          <h3>Hi there</h3>
          <button className={styles.closeChat} onClick={toggleChat}>
            ✖
          </button>
        </div>
        <div className={styles.chatBody}>
          {/* Sent messages will be appended here */}
        </div>
        <div className={styles.chatFooter}>
          <input
            type="text"
            id="chatInput"
            placeholder="Enter your message..."
          />
          <button className={styles.sendBtn} onClick={sendMessage}>
            Send
          </button>
        </div>
        <div className={styles.messageError} id="messageError">
          Message is empty
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;

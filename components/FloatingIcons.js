import { useState } from 'react';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
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
    </>
  );
};

export default FloatingIcons;

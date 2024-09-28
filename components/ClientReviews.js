import React from 'react';
import styles from './ClientReviews.module.css';

export default function ClientReviews() {
  return (
    <section className={styles['client-reviews']}>
      <h2>
        <strong>What Clients Say About Us</strong>
      </h2>
      <div className={styles['reviews']}>
        <div className={styles['review-item']}>
          <div className={styles['review-header']}>
            <img
              src="./review icons/RON-PASS.png"
              alt="Ronald Icon"
              className={styles['review-icon']}
            />
            <div className={styles['review-info']}>
              <strong>Ronald Kasanga</strong>
              <span className={styles['review-date']}>
                2023-10-31
              </span>
            </div>
          </div>
          <div className={styles['review-stars']}>★★★★☆</div>
          <p>
            "As a frequent investor in real estate, I've always sought out
            opportunities with long-term value. 101 Properties has consistently
            provided me with prime locations and exceptional service. Their
            attention to detail and commitment to client satisfaction make them
            my go-to choice for real estate investments."
          </p>
        </div>

        <div className={styles['review-item']}>
          <div className={styles['review-header']}>
            <img
              src="./review icons/john.png"
              alt="John Icon"
              className={styles['review-icon']}
            />
            <div className={styles['review-info']}>
              <strong>John Gichohi</strong>
              <span className={styles['review-date']}>
                2024-07-26
              </span>
            </div>
          </div>
          <div className={styles['review-stars']}>★★★★☆</div>
          <p>
            "I’ve been investing with 101 Properties for several years, and I
            can confidently say that they offer some of the best deals in the
            market. The transparency, professionalism, and prompt communication
            have made my experience seamless and profitable. I highly recommend
            them to anyone looking to invest in real estate."
          </p>

        </div>
        <div className={styles['review-item']}>
          <div className={styles['review-header']}>
            <img
              src="./review icons/mauris.png"
              alt="Maurice Icon"
              className={styles['review-icon']}
            />
            <div className={styles['review-info']}>
              <strong>Maurice Otieno (Diaspora)</strong>
              <span className={styles['review-date']}>
                2024-01-15
              </span>
            </div>
          </div>
          <div className={styles['review-stars']}>★★★★☆</div>
          <p>
            "Being in the diaspora, I needed a reliable partner to manage my
            investments back home, and 101 Properties has exceeded my
            expectations. They kept me informed every step of the way and
            ensured that everything was handled smoothly. I now own prime land
            in Kitengela, all thanks to their excellent service."
          </p>
        </div>
        <div className={styles['review-item']}>
          <div className={styles['review-header']}>
            <img
              src="./review icons/mercy.png"
              alt="Mercy Icon"
              className={styles['review-icon']}
            />
            <div className={styles['review-info']}>
              <strong>Mercy Kariuki</strong>
              <span className={styles['review-date']}>
                2024-08-15
              </span>
            </div>
          </div>
          <div className={styles['review-stars']}>★★★★☆</div>
          <p>
            "Purchasing land can be daunting, but 101 Properties made the entire
            process straightforward and stress-free. Their knowledgeable team
            guided me through every detail, and I couldn’t be happier with my
            investment. I would recommend them to anyone looking to buy property
            with confidence."
          </p>
        </div>
      </div>
      <a href="https://www.google.com/search?q=101-properties&oq=101-properties&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MggIAhBFGCcYOzIGCAMQABgeMgYIBBAAGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkxMjI3NmowajGoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x182f0b4d8656b079:0xe14d117316261f89,1,,,," className={styles['read-more-link']}>
        <button className={styles['read-more-button']}>
          Read More Reviews
        </button>
      </a>
    </section>
  );
}

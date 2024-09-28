import Head from 'next/head';
import React from 'react';
import styles from './styles/ManagementTeam.module.css';

export default function ManagementTeam() {
  return (
    <div>
      <Head>
        <title>Meet Our Management Team - Company Name</title>
        <meta
          name="description"
          content="Meet our dedicated management team committed to excellence in real estate."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="management team, real estate, leadership" />
      </Head>
      
      <section className={styles.treeContainer}>
        <h2>Meet Our Management Team</h2>
        <div className={styles.tree}>
          {/* CEO Level */}
          <div className={styles.level}>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/David2.png"
                alt="David Kihuga, CEO - Innovative leader with 12 years in sales and management."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>David Kihuga</h3>
                <p>
                  Mr. David Kihuga is an innovative and transformative leader
                  with over 12 years of experience in sales, marketing, and
                  management roles. Through his vision and resilience, he has
                  been able to settle over 10,000 families by walking with them
                  through the land ownership journey.
                </p>
              </div>
            </div>
          </div>
          {/* Other Levels */}
          <div className={styles.level}>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/gtrude2.png"
                alt="Getrude Kanana - Accomplished sales executive with 8 years of experience."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Getrude Kanana</h3>
                <p>
                  Miss Getrude Kanana is an accomplished and strategic sales
                  executive with over 8 years of working experience. She holds a
                  Bachelor of Arts in Social Works and Community Development and
                  has a tried and tested track record in aligning administrative
                  strategies with company development initiatives. She is a
                  confident and influential leader known for her ability to
                  drive positive change.
                </p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/rahma2.png"
                alt="Rahma Boru - Result-driven sales and marketing professional."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Rahma Boru</h3>
                <p>
                  Rahma Boru is a result-driven sales and marketing professional
                  who holds a bachelor’s degree in Business Management with 7
                  years of experience. Throughout her career, she has acquired
                  skills in planning, marketing analysis, and client relations.
                  She is a strong communicator, problem-solver, and adaptable in
                  fast-changing environments, devoted to achieving results.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/victoria1.png"
                alt="Ms. Victoria - Real Estate Investment Consultant with 8 years of experience."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Ms. Victoria</h3>
                <p>
                  Ms. Victoria is a seasoned and excellent Real Estate
                  Investment Consultant who holds a Bachelor in B.Com
                  Procurement. She empowers savvy investors to make informed
                  decisions and achieve their financial goals. With over 8 years
                  of experience and a passion for market analysis, she provides
                  expert guidance in investment strategy development and helps
                  clients maximize returns on investment and minimize risks and
                  liabilities. Her confidence and zeal to guide clients empower
                  her to develop impactful marketing campaigns that foster
                  stronger customer engagement.
                </p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/mercy1.png"
                alt="Ms. Mercy - Accounts expert with 8 years of experience."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Ms. Mercy</h3>
                <p>
                  Ms. Mercy is a focused Accounts and organized IT expert with
                  over 8 years of experience in providing first-rate financial,
                  accounting, and credit services. In the course of her career,
                  she has acquired great expertise in IT, customer service,
                  marketing, and strategic management. She has extensive
                  experience in communicating and interpreting basic financial
                  data. Her skills span numerous financial and accounting fields
                  including Real Estate, Associations, and NGOs. She is an
                  industrious leader and ensures that customers are handled with
                  great zeal and dedication.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/grace2.png"
                alt="Grace Kioko - Dynamic sales and marketing professional."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Grace Kioko</h3>
                <p>
                  Miss Grace Kioko is a dynamic sales and marketing professional
                  with 7 years of experience, holding a degree in Economics and
                  Sociology. Bold, God-fearing, and skilled in IT, computer
                  studies, strategic planning, communication, negotiation,
                  market analysis, consumer behavior, and data analysis. She has
                  a proven track record in real estate, mastering skills in
                  client relationship management, property valuation, sales
                  negotiation, contract management, networking, attention to
                  detail, and adaptability. She values integrity, resilience,
                  teamwork, and delivering exceptional customer service.
                </p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <img
                src="/staff photos/ndalira.png"
                alt="Miss Ndalira - Results-driven sales and marketing professional."
                className={styles.teamImage}
              />
              <div className={styles.teamInfo}>
                <h3>Miss Ndalira</h3>
                <p>
                  Miss Ndalira is a results-driven sales and marketing
                  professional with over 7 years of experience, skilled in
                  strategic planning and driving revenue growth through
                  innovative solutions. With a strong foundation in sales
                  management and a passion for driving results, her executive
                  background in these industries has enabled her to contribute
                  her expertise to achieve organizational goals.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img
              src="/staff photos/judith.png"
              alt="Judith Mbayi - Collaborative and decisive leader."
              className={styles.teamImage}
            />
            <div className={styles.teamInfo}>
              <h3>Judith Mbayi</h3>
              <p>
                A collaborative, open-minded, and decisive leader who strongly
                believes in teamwork, leveraging everyone's expertise and
                talents, endowed with a strong value system ever striving to do
                what is right!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

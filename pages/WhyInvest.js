import styles from './styles/WhyInvest.module.css';
const WhyInvest = () => {
  return (
    <>
      <section className={styles.whyInvestSection}>
        <h2 className={styles.sectionTitle}>Why Invest With 101 Properties</h2>
        <div className={styles.investmentContent}>
          <h3>
            <strong>Invest with 101 Properties:</strong> Affordable Land Prices
            from Kshs. 120,000
          </h3>
          <p>
            <strong>Transparent Pricing:</strong> Our prices are inclusive of
            title processing fees—no hidden charges.
          </p>
          <p>
            <strong>Free Title Deed Transfer:</strong> Enjoy a free title deed
            transfer when you pay in cash and within one month.
          </p>
          <p>
            <strong>Hassle-Free Title Deed Delivery:</strong> We handle all the
            paperwork and deliver your title deed within 6 to 12 months upon
            completing payment.
          </p>
          <p>
            <strong>Flexible Payment Options:</strong> Choose our installment
            payment plan of up to 12 months for convenience.
          </p>
          <p>
            <strong>Strategic Investments:</strong> Our research team identifies
            high-growth areas near major infrastructural developments like
            highways, bypasses, railways, airports, and upcoming cities,
            ensuring potential capital gains.
          </p>
          <p>
            <strong>Value-Added Properties:</strong> We enhance each property
            with perimeter fencing, estate gates, graded internal roads,
            boreholes, and electricity installations—ready for immediate
            development.
          </p>
          <p>
            <strong>Trusted Partner:</strong> With over 21,000 title deeds
            issued, 101 Properties is your reliable real estate investment
            partner.
          </p>
          <p className={styles.highlightText}>
            Take advantage of our free title deed transfer and invest with
            confidence!
          </p>

          <h3>Explore Our Prime Properties across Key Locations</h3>
          <p>
            101 Properties offers a diverse range of properties in strategic
            locations, including:
          </p>
          <ul>
            <li>Kisaju</li>
            <li>Lema</li>
            <li>Malindi</li>
            <li>Kitengela</li>
            <li>Lenchani</li>
            <li>Watamu</li>
            <li>Isinya</li>
          </ul>
          <p>
            Invest today with 101 Properties—your trusted partner in real
            estate.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyInvest;

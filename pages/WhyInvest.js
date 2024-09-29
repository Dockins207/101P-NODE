import Head from 'next/head';
import styles from './styles/WhyInvest.module.css';
import FeaturedProperties from '../components/FeaturedProperties';

const WhyInvest = () => {
  return (
    <>
      <Head>
        <title>Why Invest with 101 Properties | Affordable Land in Kenya</title>
        <meta
          name="description"
          content="Discover why 101 Properties is the best choice for affordable land investments in Kenya. Free title deed transfers, flexible payments, and properties in prime locations."
        />
        <meta
          name="keywords"
          content="Affordable land in Kenya, Real estate investment, land for sale in Kenya, title deed transfer, strategic investments, prime properties"
        />
        <meta name="author" content="101 Properties" />
        <meta property="og:title" content="Why Invest with 101 Properties" />
        <meta
          property="og:description"
          content="Invest with 101 Properties for affordable land prices, free title deed transfers, and properties in strategic growth areas."
        />
        <meta
          property="og:image"
          content="https://101-properties.com/home-image.jpg"
        />
        <meta property="og:url" content="https://101-properties.com/why-invest" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Invest with 101 Properties" />
        <meta
          name="twitter:description"
          content="Discover affordable land and strategic investments with 101 Properties, your trusted real estate partner."
        />
        <meta
          name="twitter:image"
          content="https://101-properties.com/home-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://101-properties.com/why-invest" />
      </Head>
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
            <li>kitengela</li>
            <li>Kisaju</li>
            <li>Isinya</li>
            <li>Lenchani </li>
            <li>Malindi</li>
            <li>Watamu</li>
          </ul>
          <p>
            Invest today with 101 Properties—your trusted partner in real
            estate.
          </p>
        </div>
      </section>
      <FeaturedProperties />
    </>
  );
};

export default WhyInvest;

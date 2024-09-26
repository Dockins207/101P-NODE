import styles from './styles/HowToBuy.module.css';

export default function HowToBuy() {
  return (
    <>
      <div className={styles.howToBuyContainer}>
        <h2>How to Buy Our Properties</h2>

        <div className={styles.step}>
          <h3>Step 1</h3>
          <p>Book a free site visit to view your preferred property.</p>
        </div>

        <div className={styles.step}>
          <h3>Step 2</h3>
          <p>Select your preferred plot(s) from layout provided.</p>
        </div>

        <div className={styles.step}>
          <h3>Step 3</h3>
          <p>
            Fill in the online offer letter using your smartphone or computer, a
            copy of the offer letter will be sent to your email for records.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Step 4</h3>
          <p>
            Upon filling the offer letter, make the minimum booking amount via
            our various payment platforms. Share your payment confirmation with
            your Relationship Manager who will issue you with a digital receipt
            and a Sale Agreement for signing.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Step 5</h3>
          <p>
            Complete payment within the payment duration given and a title deed
            transfer document will be shared with you for signing.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Step 6</h3>
          <p>
            We will notify you when your title is ready for picking. You can
            come pick it at our office or we can send it to you through a
            courier service of your choice.
          </p>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';
import styles from './FeaturedProperties.module.css';

const PropertyCard = ({ title, location, price, image }) => {
  return (
    <div className={styles['hot-deal-container']}>
      <Image
        src={image}
        alt={title}
        className={styles['property-image']}
        width={500}
        height={300}
        layout="responsive"
      />
      <div className={styles['hot-deal-content']}>
        <h3 className={styles['hot-deal-title']}>{title}</h3>
        <p className={styles['hot-deal-info']}>{location}</p>
        <p className={styles['hot-deal-info']}>Ksh. {price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;

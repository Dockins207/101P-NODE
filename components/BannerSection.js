import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import styles from './BannerSection.module.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const slides = [
  {
    src: '/flyers/VINTAGE001.svg',
    alt: 'Slide 1',
    price: '',
    description: 'Prime Location',
    paragraph:
      'This area offers beautiful views and access to local amenities.',
    infoLink: '/sellingnow',
  },
  {
    src: '/flyers/NEEMA KISAJU.svg',
    alt: 'Slide 2',
    price: '',
    description: 'Prime Location',
    paragraph: 'A perfect spot for your dream home or investment.',
    infoLink: '/sellingnow',
  },
  {
    src: '/flyers/Watamu001.svg',
    alt: 'Slide 3',
    price: '',
    description: 'Prime Location',
    paragraph: 'Ideal for families and holidaymakers alike.',
    infoLink: '/sellingnow',
  },
  {
    src: '/flyers/WATAMU 003.svg',
    alt: 'Slide 4',
    price: '',
    description: 'Prime Location',
    paragraph: 'Experience the best of coastal living.',
    infoLink: '/sellingnow',
  },
  {
    src: '/flyers/FAHARI KISAJU 001.svg',
    alt: 'Slide 5',
    price: '',
    description: 'Prime Location',
    paragraph: 'Perfect for relaxation and entertainment.',
    infoLink: '/sellingnow',
  },
  {
    src: '/flyers/WATAMU 002.svg',
    alt: 'Slide 6',
    price: '',
    description: 'Prime Location',
    paragraph: 'A growing community with much to offer.',
    infoLink: '/sellingnow',
  },
];

const BurnerSlider = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
        autoplay: 5000,
        hoverpause: true,
        rewind: false,
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [glideRef]);

  return (
    <div className={styles.sliderContainer}>
      <div className="glide" ref={glideRef} id="banner-slider">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((slide, index) => (
              <li key={index} className="glide__slide">
                <img src={slide.src} alt={slide.alt} className={styles.image} />
                <div className={styles.bannerText}>
                  <h2>{slide.description}</h2>
                  <p>{slide.paragraph}</p> {/* Paragraph added here */}
                  <a href={slide.infoLink} className={styles.buyButton}>
                    More Info
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurnerSlider;

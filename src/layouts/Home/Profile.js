import YAS from '../../assets/yas.jpg';
import SAM from '../../assets/sam.jpg';
import KA from '../../assets/ka.jpg';

import { Image } from '../../components/Image';
import { Section } from '../../components/Section';
import { media } from '../../utils/style';
import styles from './Profile.module.css';

export const Profile = ({ id, visible, sectionRef }) => {
  return (
    <Section className={styles.profile} id={id} ref={sectionRef} data-visible={visible}>
      <h1>notre équipe:</h1>

      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            reveal
            delay={100}
            placeholder={KA}
            srcSet={[KA, KA]}
            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
            alt="Mohamed Amine Kraiem"
          />
        </div>

        <div className={styles.text}>Mohamed Amine Kraiem</div>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            reveal
            delay={100}
            placeholder={YAS}
            srcSet={[YAS, YAS]}
            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
            alt="Yasmine Ben Turkia"
          />
        </div>

        <div className={styles.text}>Yasmine Ben Turkia</div>
      </div>
      <span></span>

      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            reveal
            delay={100}
            placeholder={SAM}
            srcSet={[SAM, SAM]}
            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
            alt="Samer Gassouma"
          />
        </div>
        <div>
          <div className={styles.text}>Samer Gassouma</div>
        </div>
      </div>
    </Section>
  );
};

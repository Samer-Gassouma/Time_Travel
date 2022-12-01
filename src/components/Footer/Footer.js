import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`© ${new Date().getFullYear()} .`}</span>
      <Link secondary className={styles.link} href="/" target="_self">
        Les gens comme nous, qui croyons en la physique, savent que la distinction entre
        passé, présent et futur n'est qu'une illusion obstinément persistante
      </Link>
    </Text>
  </footer>
);

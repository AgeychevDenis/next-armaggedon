import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
   return (
      <footer className={cn(className, styles.footer)} {...props}>
         2022 © Все права и планета защищены
      </footer>
   );
};

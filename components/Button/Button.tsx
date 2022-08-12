import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
   return (
      <button
         className={styles.button}
         {...props}
      >
         {children}
      </button>
   );
};
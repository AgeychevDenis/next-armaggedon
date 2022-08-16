import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
   const router = useRouter()

   return (
      <header className={cn(className, styles.header)} {...props}>
         {/* Картинки в данном api нет */}
         <img className={styles.img} src='/nasa.jpg' alt="imgHeader" />
         <div>
            <Link href="/">
               <a className={styles.title}>
                  ARMAGGEDON V2
               </a>
            </Link>
            <p className={styles.subTitle}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</p>
         </div>
         <div className={styles.links}>
            <Link href="/">
               <a className={cn({ [styles.active]: router.pathname === '/' })}>
                  Астероиды
               </a>
            </Link>
            <Link href="/CartPage">
               <a className={cn({ [styles.active]: router.pathname === '/CartPage' })}>
                  Заказ
               </a>
            </Link>
         </div>
      </header>
   );
};
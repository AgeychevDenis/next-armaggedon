import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
   const [image, setImage] = useState();

   useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=Edz5U0rdyNOtbLINXjvxWvGwDE0jc2H0wDng3qMB')
         .then(res => res.json())
         .then(json => setImage(json))
   }, []);
 
   return (
      <header className={cn(className, styles.header)} {...props}>
         <div>
            <h1 className={styles.title}>ARMAGGEDON V2</h1>
            <p className={styles.subTitle}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</p>
         </div>
         <div>
            <Link href="/">
               <a className={cn(styles.link, className)}>
                  Астероиды
               </a>
            </Link>
            <Link href="/">
               <a className={cn(styles.link)}>
                  Заказ
               </a>
            </Link>
         </div>
      </header>
   );
};
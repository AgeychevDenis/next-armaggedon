import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import { Button } from '../Button/Button';

export default function Product({ className, ...props }: ProductProps) {
   return (
      <div className={styles.wrapper} {...props}>
         <p className={styles.date}>12 сентября 2021</p>
         <div className={styles.inner}>
            <div className={styles.img}>
               <Image width={93} height={95} alt="paln" src='/long.svg' />
            </div>
            <div className={styles.description}>
               <p>Астероид 2021 FQ</p>
               <p>Ø 85 м</p>
               <p>↔ 7 400 135 км</p>
               <p>Не опасен</p>
            </div>
         </div>
         <Button>Уничтожить</Button>
      </div>
   );
};

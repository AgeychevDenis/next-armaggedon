import styles from './CartItem.module.css';
import Image from 'next/image';
import { getDate, numberSeparator } from '../../helpers/helpers';
import { CartItemProps } from './CartItem.props';

export const CartItem = ({ data }: CartItemProps): JSX.Element => {
   const { name, distance, size, date } = data;
   
   return (
      <div className={styles.item}>
         <Image width={93}
            height={95}
            alt='астероид'
            src={'/asteroid.svg'} />
         <div className={styles.info}>
            <h4 className={styles.infoTilte}>{name.replace(/[()]/g, '')}</h4>
            <p>{getDate(date)}</p>
            <p>{numberSeparator(distance)} км</p>
            <p>{numberSeparator(size)} м</p>
         </div>
         <form className={styles.form}>
            <input id="checkbox" className={styles.input} type="checkbox" />
            <label htmlFor="checkbox" className={styles.lable}>Выбрать астероид</label>
         </form>
      </div>


   )
}

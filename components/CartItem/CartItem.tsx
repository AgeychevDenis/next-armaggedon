import styles from './CartItem.module.css';
import Image from 'next/image';
import { getDate, numberSeparator } from '../../helpers/helpers';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { checkedItem } from '../../redux/slice/productSlice';

export const CartItem = ({ data }: CartItemProps): JSX.Element => {
   const dispatch = useDispatch();
   const { name, distance, size, date, id } = data;

   const onChecked = (id: string) => {
        dispatch(checkedItem(id));
    };
   
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
            <input id={id} className={styles.input} type="checkbox" onChange={() => onChecked(id)}/>
            <label htmlFor={id} className={styles.lable}>Выбрать астероид</label>
         </form>
      </div>


   )
}

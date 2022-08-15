import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import styles from './Cart.module.css';
import { clearCart } from '../../redux/slice/productSlice';
import { CartProps } from './Cart.props';

export const Cart = ({ children, className, ...props }: CartProps): JSX.Element => {
   const dispatch = useDispatch();
   const { cart }: any = useSelector((state: any) => ({
      cart: state.product.cart,
   }));

   const onDelete = () => {
      dispatch(clearCart())
   }

   return (
      <div className={styles.wrapper} {...props}>
         <h2 className={styles.title}>Список на уничтожение</h2>
         {cart.length
            ? cart.map((item: any) => <CartItem key={item.id} data={item} />)
            : <div className={styles.text}>Добавьте заказы к уничтожению &#128640;</div>}
         <button onClick={() => onDelete()} className={styles.btn}>Отправить заказ</button>
      </div>
   );
};
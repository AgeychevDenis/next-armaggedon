import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import { getDate, numberSeparator } from '../../helpers/helpers';
import { addCartItem, CartItem } from '../../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';

export default function Product({ data, className, ...props }: ProductProps): JSX.Element {
  const { name, is_potentially_hazardous_asteroid, estimated_diameter, close_approach_data, id } = data;

  const dispatch = useDispatch();
  const { kmRange, cart }: any = useSelector((state: any) => ({
    kmRange: state.product.range.km,
    cart: state.product.cart
  }));

  const onAddCartItem = (payload: CartItem) => {
    dispatch(addCartItem(payload));
  };


  const onAddCart = (e: any) => {
    e.preventDefault();
    const obj = {
      name: name,
      date: close_approach_data[0].close_approach_date,
      distance: close_approach_data[0].miss_distance.kilometers,
      size: estimated_diameter.meters.estimated_diameter_max,
      id: id,
      checked: false
    };
    if (!cart.map((item: any) => item.id).includes(obj.id)) {
      onAddCartItem(obj);
    }
  };


  return (
    <div className={styles.wrapper} {...props}>
      <p className={styles.date}>{getDate(close_approach_data[0].close_approach_date)}</p>
      <Link href={`/product/${id}`} >
        <a className={styles.inner}>
          <Image
            className={styles.img}
            width={93}
            height={95}
            alt={name}
            src={is_potentially_hazardous_asteroid ? '/closely.svg' : '/long.svg'}
          />
          <div className={styles.description}>
            <p>{name.replace(/[()]/g, '')}</p>
            <p>Ø {Math.floor(estimated_diameter.meters.estimated_diameter_max)} м</p>
            <p>↔ {kmRange
              ? `${numberSeparator(close_approach_data[0].miss_distance.kilometers)} км`
              : `${numberSeparator(close_approach_data[0].miss_distance.lunar)} л.о.`
            }</p>
            <p>{is_potentially_hazardous_asteroid ? 'Опасен' : 'Не опасен'}</p>
          </div>
        </a>
      </Link>
      <button
        className={classNames(styles.button, {
          disabled: cart.map((item) => item.id).includes(id),
        })}
        onClick={(e) => onAddCart(e)}
      >
        Уничтожить
      </button>
    </div>
  );
};

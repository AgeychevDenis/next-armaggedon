import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { getDate, numberSeparator } from '../../helpers/helpers';

export default function Product({ kmRange, data, onAddCartItem, cart, className, ...props }: ProductProps) {

  const { name, is_potentially_hazardous_asteroid, estimated_diameter, close_approach_data, id } = data;

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
      <div className={styles.inner}>
        <div className={styles.img}>
          <Image
            width={93}
            height={95}
            alt={name}
            src={is_potentially_hazardous_asteroid ? '/closely.svg' : '/long.svg'}
          />
        </div>
        <div className={styles.description}>
          <p>{name.replace(/[()]/g, '')}</p>
          <p>Ø {Math.floor(estimated_diameter.meters.estimated_diameter_max)} м</p>
          <p>↔ {kmRange
            ? `${numberSeparator(close_approach_data[0].miss_distance.kilometers)} км`
            : `${numberSeparator(close_approach_data[0].miss_distance.lunar)} л.о.`
          }</p>
          <p>{is_potentially_hazardous_asteroid ? 'Опасен' : 'Не опасен'}</p>
        </div>
      </div>
      <Button
        onClick={(e) => onAddCart(e)}
      >
        Уничтожить
      </Button>
    </div>
  );
};

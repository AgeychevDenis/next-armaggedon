import styles from './SingleProduct.module.css';
import Image from 'next/image';
import { getDate, numberSeparator } from '../../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/slice/productSlice';
import classNames from 'classnames';

export default function SingleProduct({ product, productID }): JSX.Element {
  const dispatch = useDispatch();
  const cart: any[] = useSelector((state: any) => state.product.cart);

  function getFullDate(date, fullDate) {
    return `${fullDate.slice(12, 17)}, ${getDate(date)}`;
  }


  const onAdd = () => {
    const obj = {
      name: productID.name,
      date: getDate(productID.close_approach_data[0].close_approach_date),
      distance: numberSeparator(
        productID.close_approach_data[0].miss_distance.kilometers
      ),
      size: numberSeparator(
        productID.estimated_diameter.meters.estimated_diameter_max
      ),
      danger: productID.is_potentially_hazardous_asteroid,
      id: productID.id,
    };

    if (!cart.map((item) => item.id).includes(obj.id)) {
      // @ts-ignore
      dispatch(addCartItem(obj));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Image width={93}
          height={95}
          alt='астероид'
          src={'/asteroid.svg'} />
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h4 className={styles.infoTilte}>
              {productID.name.replace(/[()]/g, '')}
            </h4>
            <p>
              {getDate(
                productID.close_approach_data[0].close_approach_date
              )}
            </p>
          </div>
          <div className={styles.infoItem}>
            <p>
              {numberSeparator(
                productID.close_approach_data[0].miss_distance
                  .kilometers
              )}{" "}
              км
            </p>
          </div>
          <div className={styles.infoItem}>
            <p>
              {numberSeparator(
                productID.estimated_diameter.meters
                  .estimated_diameter_max
              )}{" "}
              м
            </p>
          </div>
        </div>
      </div>
      <div className={styles.blockDanger} style={
        productID.is_potentially_hazardous_asteroid
          ? {
            backgroundColor: '#ffdfdf'
          }
          : { backgroundColor: '#ebfbe5 ' }
      }>
        <div className={styles.danger}>
          <p>Оценка:</p>
          <p>
            {productID.is_potentially_hazardous_asteroid
              ? "опасен"
              : "не опасен"}
          </p></div>

        <button
          type="button"
          onClick={onAdd}
          className={classNames("button", {
            disabled: cart.map((item) => item.id).includes(product.id),
          })}
          style={
            productID.is_potentially_hazardous_asteroid
              ? {
                backgroundColor: '#c31f1f'
              }
              : { backgroundColor: '#63c145' }
          }
        >
          уничитожить
        </button>
      </div>
      <div className={styles.full}>
        <h3 className={styles.fullTitle}>Список всех сближений:</h3>
        {product.close_approach_data.map((product, i) => (
          <ul className={styles.fullList} key={product.close_approach_date_full}>
            {i + 1}:
            <li>
              Время максимального сближения: <br />
              <span>
                {getFullDate(
                  product.close_approach_date,
                  product.close_approach_date_full
                )}
              </span>
            </li>
            <li>
              Расстояние до земли: <br />
              <span>{numberSeparator(product.miss_distance.kilometers)} км</span>
            </li>
            <li>
              Скорость: <br />
              <span>
                {numberSeparator(product.relative_velocity.kilometers_per_hour)}{" "}
                км/ч
              </span>
            </li>
            <li>
              Орбита: <br /> <span>{product.orbiting_body}</span>
            </li>
          </ul>
        ))}
      </div>
    </div >
  );
};

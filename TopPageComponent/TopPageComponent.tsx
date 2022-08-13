import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { format } from 'date-fns';
import { ProductModel } from '../interfaces/product.interface';

export default function TopPageComponent({ nearEarth }: TopPageComponentProps): JSX.Element {
  const [products, setProducts] = useState<{}>([]);

  const todaysDate = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    setProducts(nearEarth)
  }, []);


  return (
    <>
      <div className={styles.wrapperTop}>
        <h2 className={styles.title}>Ближайшие подлёты</h2>
        <div className={styles.filter}>
          <p>Отображать расстояние: в километрах | в лунных орбитах</p>
          <form>
            <input id="form__input-checkbox" className={styles.input} type="checkbox" />
            <label htmlFor="form__input-checkbox" className={styles.lable}>Показать только опасные</label>
          </form>
        </div>
      </div>
      <div className={styles.wrapperBottom}>
        {products && products?.[todaysDate]?.map((product: ProductModel) => <Product key={product.id} data={product} />)}
      </div>
    </>
  );
};

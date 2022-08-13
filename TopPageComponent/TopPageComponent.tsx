import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { format } from 'date-fns';
import { ProductModel } from '../interfaces/product.interface';
import KeyboardEvent from 'react';

export default function TopPageComponent({ nearEarth }: TopPageComponentProps): JSX.Element {
  const [products, setProducts] = useState<{}>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);

  const todaysDate = format(new Date(), 'yyyy-MM-dd');

  let formatDate = Number(todaysDate.split('-').join(''));

  console.log();


  useEffect(() => {
    if (fetching) {
      setCurrentPage(currentPage + 1)
      setFetching(false)
    }

    setProducts(nearEarth)
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHendler)
    return function () {
      document.removeEventListener('scroll', scrollHendler)
    }
  }, []);

  console.log(currentPage);
  

  const scrollHendler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }

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

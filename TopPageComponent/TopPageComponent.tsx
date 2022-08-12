import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';

export default function TopPageComponent({ json }): JSX.Element {
  const [data, setData] = useState();

  useEffect(() => {
    setData(json)
  }, []);

  console.log(data);


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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

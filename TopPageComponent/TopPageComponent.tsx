import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { ProductModel } from '../interfaces/product.interface';
import { Filter } from '../components/Filter/Filter';

export default function TopPageComponent({ nearEarth, onDangerous, sort, onLunar, onKm, kmRange, lunarRange }: TopPageComponentProps): JSX.Element {
  const [products, setProducts] = useState<[]>([]);

 

  useEffect(() => {
    setProducts(nearEarth);
  }, []);

  return (
    <>
      <div className={styles.wrapperTop}>
        <Filter onDangerous={onDangerous} onLunar={onLunar} onKm={onKm} />
      </div>
      <div className={styles.wrapperBottom}>
        {products && sort
          ? products
            .filter(product => product.is_potentially_hazardous_asteroid)
            .map((product: ProductModel) => <Product key={product.id} data={product} lunarRange={lunarRange} kmRange={kmRange} />)
          : products.map((product: ProductModel) => <Product key={product.id} data={product} lunarRange={lunarRange} kmRange={kmRange} />)}
      </div>
    </>
  );
};

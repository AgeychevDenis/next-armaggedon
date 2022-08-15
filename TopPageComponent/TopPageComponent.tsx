import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { ProductModel } from '../interfaces/product.interface';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setCollection } from "../redux/slice/productSlice";

export default function TopPageComponent({ nearEarth }: TopPageComponentProps): JSX.Element {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const { sort, collection}: any = useSelector((state: any) => ({
    sort: state.product.sort,
    collection: state.product.collection,
  }));

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(setCollection());
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);


  useEffect(() => {
    setProducts(nearEarth);
  }, []);

  return (
    <>
      <div className={styles.wrapperTop}>
        <Filter />
      </div>
      <div className={styles.wrapperBottom}>
        {products && sort
          ? products
            .filter(product => product.is_potentially_hazardous_asteroid)
            .map((product: ProductModel) => <Product key={product.id} data={product} />).slice(0, collection)
          : products.map((product: ProductModel) => <Product key={product.id} data={product} />).slice(0, collection)}
      </div>
    </>
  );
};

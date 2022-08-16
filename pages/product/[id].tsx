import React from 'react';
import axios from "axios";
import { API_KEY, Context } from '..';
import SingleProduct from '../../components/SingleProduct/SingleProduct';


const product = ({ product, productID }) => {

   return <SingleProduct product={product} productID={productID} />
}

export default product;

export const getServerSideProps = async (ctx: Context): Promise<any> => {
   function getCurrentDate() {
     const date = new Date();
     return (
       date.getFullYear() +
       "-" +
       (date.getMonth() + 1 < 10
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
       "-" +
       (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
     );
   }
   try {
     const { data } = await axios.get(
       `https://api.nasa.gov/neo/rest/v1/neo/${ctx.query.id}?api_key=${API_KEY }`
     );
 
     const productPrev = await axios.get(
       `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getCurrentDate()}&api_key=${API_KEY}`
     );
 
     const productID = [].concat.apply(
       [],
       Object.values(productPrev.data.near_earth_objects)
     );
     const item = productID.find((obj) => obj.id === ctx.query.id);
     const url = ctx.resolvedUrl;
     return {
       props: {
         product: data,
         productID: item,
         url: url,
       },
     };
   } catch (error) {
     alert("Ошибка");
     return {
       props: {
         product: [],
         productID: [],
         url: "",
       },
     };
   }
 };
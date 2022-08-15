import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { numberSeparator } from '../../helpers/helpers';

export default function Product({ kmRange, data, className, ...props }: ProductProps) {
   const { name, is_potentially_hazardous_asteroid, estimated_diameter, close_approach_data } = data;

   function getDate(date: string) {
      const year = date.split("-", 7)[0];
      const month = date.split("-", 7)[1];
      const day = date.split("-", 7)[2];
  
      if (month === "01") {
        return `${day} января ${year}`;
      } else if (month === "02") {
        return `${day} февраля ${year}`;
      } else if (month === "03") {
        return `${day} марта ${year}`;
      } else if (month === "04") {
        return `${day} апреля ${year}`;
      } else if (month === "05") {
        return `${day} мая ${year}`;
      } else if (month === "06") {
        return `${day} июня ${year}`;
      } else if (month === "07") {
        return `${day} июля ${year}`;
      } else if (month === "08") {
        return `${day} августа ${year}`;
      } else if (month === "09") {
        return `${day} сентября ${year}`;
      } else if (month === "10") {
        return `${day} октября ${year}`;
      } else if (month === "11") {
        return `${day} ноября ${year}`;
      } else if (month === "12") {
        return `${day} декабря ${year}`;
      }
    }

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
         <Button>Уничтожить</Button>
      </div>
   );
};

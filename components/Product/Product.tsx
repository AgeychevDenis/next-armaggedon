import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { numberSeparator } from '../../helpers/helpers';

export default function Product({ kmRange, lunarRange, data, className, ...props }: ProductProps) {
   const { name, is_potentially_hazardous_asteroid, estimated_diameter, close_approach_data } = data;

   const fullDate = close_approach_data[0].close_approach_date;

   const objDate = new Date(fullDate),
      locale = "ru-ru",
      month = objDate.toLocaleString(locale, { month: "long" });

   function withSpaces(x: string): string {
      return Math.ceil(Number(x))
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }

   return (
      <div className={styles.wrapper} {...props}>
         <p className={styles.date}>{`${fullDate.substring(8, 10)} ${month} ${fullDate.substring(0, 4)}`}</p>
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
                  ? numberSeparator(close_approach_data[0].miss_distance.kilometers)
                  : numberSeparator(close_approach_data[0].miss_distance.lunar)
               } км</p>
               <p>{is_potentially_hazardous_asteroid ? 'Опасен' : 'Не опасен'}</p>
            </div>
         </div>
         <Button>Уничтожить</Button>
      </div>
   );
};

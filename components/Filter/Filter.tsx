import cn from 'classnames';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';

export const Filter = ({ onDangerous, onKm, onLunar, kmRange, lunarRange }: FilterProps): JSX.Element => {

   return (
      <>
         <h2 className={styles.title}>Ближайшие подлёты</h2>
         <div className={styles.filter}>
            <div className={styles.range}>
               Отображать расстояние:
               <span onClick={onKm} className={cn({ [styles.active]: kmRange })}
               >в километрах </span>
               |
               <span onClick={onLunar} className={cn({ [styles.active]: lunarRange })}
               >в лунных орбитах
               </span>

            </div>
            <form>
               <input id="form__input-checkbox" className={styles.input} onChange={onDangerous} type="checkbox" />
               <label htmlFor="form__input-checkbox" className={styles.lable}>Показать только опасные</label>
            </form>
         </div>
      </>
   );
};
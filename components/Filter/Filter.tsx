import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';

export const Filter = ({ onDangerous, onKm, onLunar }: FilterProps): JSX.Element => {
   return (
      <>
         <h2 className={styles.title}>Ближайшие подлёты</h2>
         <div className={styles.filter}>
            <ul className={styles.list}>
               <li>Отображать расстояние:</li>
               <li onClick={onKm}>в километрах</li>
               <li>|</li>
               <li onClick={onLunar}>в лунных орбитах</li>

            </ul>
            <form>
               <input id="form__input-checkbox" className={styles.input} onChange={onDangerous} type="checkbox" />
               <label htmlFor="form__input-checkbox" className={styles.lable}>Показать только опасные</label>
            </form>
         </div>
      </>
   );
};
import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";


export const Layout = ({ children }: LayoutProps): JSX.Element => {

   return (
      <div className={styles.wrapper}>
         <Header className={styles.header} />
         <main className={styles.body}>
            {children}
         </main>
         <Footer className={styles.footer} />
      </div>
   );
};
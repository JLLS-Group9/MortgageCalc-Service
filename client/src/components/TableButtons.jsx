import React from 'react';
import styles from '../style.css';

const TableButtons = (props) => (
  <div className={styles.tableBottom}>
    <div className={styles.tableBottomInner}>
      <div className={styles.buttonContainer}>
        <button className={styles.tableButton}>Get Pre-Qualified</button>
      </div>
      <div className={styles.orContainer}>
        <div>or</div>
      </div>
      <div className={styles.todaysRates}>
        <a className={styles.rates} href="/mortgage-rates/Newport_Beach,CA/?cta=rates&amp;auto=true&amp;value=10500000&amp;down=2100000&amp;zip=92657&amp;loantype=purchase">See today's mortgage rates</a>
      </div>
    </div>
  </div>
);

export default TableButtons;
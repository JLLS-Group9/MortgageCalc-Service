import React from 'react';
import styles from '../style.css';

const Table = (props) => (
  <div >
    <div className={styles.tableGrid}>

      <div className={styles.tableData}>
        <div>
          <div className={styles.tableData}>
            <div className={styles.blueDot}></div>
            <div>{'Principal & Interest'}</div>
          </div>
        </div>
        <div>{props.data.principalAndInterest.toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.tealDot}></div>
            <div>Property Taxes</div>
          </div>
        </div>
        <div>{(props.data.property_tax/12).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.greenDot}></div>
            <div>Home Insurance</div>
          </div>
        </div>
        <div>{props.data.home_ins.toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.pinkDot}></div>
            <div>HOA</div>
          </div>
        </div>
        <div>{(props.data.hoa).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.purpleDot}></div>
            <div>{'Mortgage ins. & other'}</div>
          </div>
        </div>
        <div>{(props.data.other).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

    </div>
    <div>
      <button className={styles.tableButton}>Get Pre-Qualified</button>
      <div>or</div>
      <div className={styles.todaysRates}><a className={styles.rates} href="/mortgage-rates/Newport_Beach,CA/?cta=rates&amp;auto=true&amp;value=10500000&amp;down=2100000&amp;zip=92657&amp;loantype=purchase">See today's mortgage rates</a></div>
    </div>
  </div>
);

export default Table;


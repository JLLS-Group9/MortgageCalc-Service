import React from 'react';
import styles from '../style.css';

const GraphCenter = (props) => (
  <div className={styles.graphCenter}>
    <div className={styles.graphCenter2}>
      <div className={styles.graphCenterValue}>
        {Number(props.data.monthly).toLocaleString('en-US', {style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,})}
      </div>
      <div className={styles.graphCenterText}>
        /month
      </div>
    </div>
  </div>
);

export default GraphCenter;
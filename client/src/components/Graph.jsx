import React from 'react';
import styles from '../style.css';
import GraphCenter from './GraphCenter.jsx';

const Graph = (props) => (
  <div className={styles.graphBox}>
    <div className={styles.graphBox2}>
      <div className={styles.graph}>
        <svg viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="12" fill="#fff" role="presentation"></circle>
          <circle
            cx="18"
            cy="18"
            r="15.915494309189533"
            fill="transparent"
            stroke="rgb(5, 34, 134)"
            stroke-width="3.8"
            stroke-dasharray={props.data.circle.principal}
            stroke-dashoffset={`${props.data.circle.principaloffset}`}>
          </circle>
          <circle
            cx="18"
            cy="18"
            r="15.915494309189533"
            fill="transparent"
            stroke="rgb(0, 173, 187)"
            stroke-width="3.8"
            stroke-dasharray={props.data.circle.tax}
            stroke-dashoffset={`${props.data.circle.taxoffset}`}>
          </circle>
          <circle
            cx="18"
            cy="18"
            r="15.915494309189533"
            fill="transparent"
            stroke="rgb(194, 213, 0)"
            stroke-width="3.8"
            stroke-dasharray={props.data.circle.insurance}
            stroke-dashoffset={`${props.data.circle.insuranceoffset}`}>
          </circle>
          <circle
            cx="18"
            cy="18"
            r="15.915494309189533"
            fill="transparent"
            stroke="rgb(250, 140, 104)"
            stroke-width="3.8"
            stroke-dasharray={props.data.circle.hoa}
            stroke-dashoffset={`${props.data.circle.hoaoffset}`}>
          </circle>
          <circle
            cx="18"
            cy="18"
            r="15.915494309189533"
            fill="transparent"
            stroke="rgb(206, 182, 255)"
            stroke-width="3.8"
            stroke-dasharray={props.data.circle.other}
            stroke-dashoffset={`${props.data.circle.otheroffset}`}>
          </circle>
        </svg>
      </div>
      <GraphCenter data={props.data}/>
    </div>
  </div>
);

export default Graph;
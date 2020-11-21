import React from 'react';
import styles from '../style.css';
import GraphCenter from './GraphCenter.jsx';

const Graph = (props) => (
  <div className={styles.graphBox}>
    <div className={styles.graphBox2}>
      <div className={styles.graph}>
        <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="12" fill="#fff" role="presentation"></circle><circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(5, 34, 134)" stroke-width="3.8" stroke-dasharray="49.800796812749006 50.199203187250994" stroke-dashoffset="25"></circle><circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(0, 173, 187)" stroke-width="3.8" stroke-dasharray="9.224639901930738 90.77536009806926" stroke-dashoffset="75.19920318725099"></circle><circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" stroke-width="3.8" stroke-dasharray="2.2984983144345694 97.70150168556543" stroke-dashoffset="65.97456328532026"></circle><circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(250, 140, 104)" stroke-width="3.8" stroke-dasharray="25.83512105424456 74.16487894575545" stroke-dashoffset="63.67606497088569"></circle><circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(206, 182, 255)" stroke-width="3.8" stroke-dasharray="12.840943916641129 87.15905608335888" stroke-dashoffset="37.84094391664112"></circle>
        </svg>
      </div>
      <GraphCenter data={props.data}/>
    </div>
  </div>
);

export default Graph;
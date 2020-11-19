import React from 'react';
import styles from '../style.css';

const Graph = (props) => (
  <div>
    <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="12" fill="#fff" role="presentation"></circle>
      <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(5, 34, 134)" stroke-width="3.8" stroke-dasharray="80.40661668839635 19.593383311603645" stroke-dashoffset="25"></circle>
      <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(0, 173, 187)" stroke-width="3.8" stroke-dasharray="15.853161668839636 84.14683833116037" stroke-dashoffset="44.593383311603645"></circle>
      <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" stroke-width="3.8" stroke-dasharray="0.30557366362451105 99.69442633637549" stroke-dashoffset="28.740221642764013"></circle>
      <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(250, 140, 104)" stroke-width="3.8" stroke-dasharray="3.4346479791395046 96.5653520208605" stroke-dashoffset="28.4346479791395"></circle>
    </svg>
  </div>
);

export default Graph;
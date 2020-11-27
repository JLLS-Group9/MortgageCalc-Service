import React from 'react';
import styles from '../style.css';
import NumberFormat from 'react-number-format';

const FormInterestRate = (props) => (
  <div className={styles.forms}>

  <form className={styles.formsTwo} className={styles.formHeader} onChange={props.handleInput}>
    <div className={styles.f1}>
      <label>Interest Rate</label>
      <NumberFormat className={styles.formRate}
        suffix={'%'}
        type="text"
        name="interest"
        value = {props.data.interest}
      />
    </div>
    <div className={styles.f2}>
      <input className={styles.slider}
        type="range"
        name="interest"
        min="0"
        max="6.5"
        step="0.1"
        value={props.data.interest}
        style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${props.data.interest/.065}%, rgb(205, 209, 212) ${props.data.interest/.065}%, rgb(205, 209, 212) 100%)`}}
     />
    </div>
 </form>

</div>
)

export default FormInterestRate
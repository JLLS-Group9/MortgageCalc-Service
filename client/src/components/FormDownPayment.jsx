import React from 'react';
import styles from '../style.css';
import NumberFormat from 'react-number-format';

const FormDownPayment = (props) => (
  <div
  style={{width:`(1,1,1,0.33)`}}
  className={styles.forms}>
  <div className={styles.formsTwo}>
    <form>
      <div className={styles.f1}>
        <label className={styles.formHeader}>Down Payment</label>
        <NumberFormat
          className={styles.formLeft }
          thousandSeparator={true}
          prefix={'$'}
          type="text"
          decimalScale="0"
          name="down_payment"
          onValueChange={(values) => {
            const {formattedValue, value} = values;
            props.onFormatted(value, "down_payment")
          }}
          value={props.data.down_payment}
        />
        <NumberFormat
          className={styles.formRight}
          suffix={'%'}
          type="text"
          decimalScale="1"
          name="down_payment_percent"
          onValueChange={(values) => {
            const {formattedValue, value} = values;
            props.onFormatted(value, "down_payment_percent")
          }}
          value={props.data.down_payment_percent}
        />
      </div>
      <div className={styles.f2}>
        <input className={styles.sliderm}
          onChange={props.handleInput}
          type="range"
          name="down_payment_percent"
          min="0"
          max="30"
          step="1"
          value={props.data.down_payment_percent}
          style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${props.data.down_payment_percent/.3}%, rgb(205, 209, 212) ${props.data.down_payment_percent/.3}%, rgb(205, 209, 212) 100%)`}}
        />
      </div>
    </form>
  </div>
</div>
);

export default FormDownPayment
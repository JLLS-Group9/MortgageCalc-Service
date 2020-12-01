import React from 'react';
import styles from '../style.css';
import NumberFormat from 'react-number-format';

const FormHomePrice = (props) => (
  <div className={styles.forms}
  style={{width: '1,1,1,0.33'}}>
  <form className={styles.formsTwo} >
    <div className={styles.f1}>
      <label className={styles.formHeader}>Home Price</label>
      <NumberFormat className={styles.formPrice}
        name="home_price"
        thousandSeparator={true}
        prefix={'$'}
        type="text"
        decimalScale="0"
        onValueChange={(values) => {
          const {formattedValue, value} = values;
          props.onFormatted(value, "home_price")
        }}
        value={props.data.home_price}
      />
    </div>
    {/* container for slider */}
    <div className={styles.f2}>
      <input className={styles.sliderm}
        onChange={props.handleInput}
        type="range"
        name="home_price"
        min = "0"
        max = {Math.max(
          props.data.max,
          props.data.home_price*1.15
        )}
        step="10"
        value={props.data.home_price}
        style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${props.data.home_price/Math.max(
          props.data.max/100,
          props.data.home_price*1.15/100
        )}%, rgb(205, 209, 212) ${props.data.home_price/Math.max(
          props.data.max/100,
          props.data.home_price*1.15/100
        )}%, rgb(205, 209, 212) 100%) !important`}}
      />
    </div>
  </form>
</div>
)

export default FormHomePrice;
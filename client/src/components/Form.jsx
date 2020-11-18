import React from 'react';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: null,
      property_tax: null,
      hoa: null,
      interest: null,
      down_payment_percent: null
    };
    this.onSlider=this.onSlider.bind(this)
  }

  onSlider(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div className={styles.formTable}>
        <div className={styles.formBox}>
        <form>
          <label className={styles.formHeader}>Home Price</label>
          <input className={styles.formPrice}
            type="text"
            name="price"
            value={this.props.financials.home_price}
          />
          <input className={styles.slider}
            type="range"
            min = "0"

          />
        </form>
        <form>
          <label className={styles.formHeader}>Down Payment</label>
          <input className={styles.formLeft}
            type="text"
            name="down payment"
            value="calculated value"
          />
          <input className={styles.formRight}
            type="text"
            name="down_payment_percent"
            value={this.state.down_payment_percent}
          />
          <input className={styles.slider}
            type="range"
          />
        </form>
        <form className={styles.formHeader} onChange={this.onSlider}>
          <label>Interest Rate</label>
          <input className={styles.formPrice}
            type="text"
            name="interest"
            value = {this.state.interest}
          />
          <input className={styles.slider}
            type="range"
            name="interest"
            min="0"
            max="6.5"
            step="0.1"
            value={this.state.interest}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.state.interest/.065}%, rgb(205, 209, 212) ${this.state.interest/.065}%, rgb(205, 209, 212) 100%)`}}
          />
        </form>
        <form>
          <label className={styles.formHeader} for="loan type">Loan Type</label>
          <select className={styles.loan}>
            <option value="30-year fixed">30-year fixed</option>
            <option value="20-year fixed">20-year fixed</option>
            <option value="15-year fixed">15-year fixed</option>
            <option value="10-year fixed">10-year fixed</option>
            <option value="FHA 30-year fixed">FHA 30-year fixed</option>
            <option value="FHA 15-year fixed">FHA 15-year fixed</option>
            <option value="VA 30-year fixed">VA 30-year fixed</option>
            <option value="VA 15-year fixed">VA 15-year fixed</option>
          </select>
        </form>
        </div>
      </div>
    )
  }

}

export default Form;
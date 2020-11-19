import React from 'react';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: "",
      interest: "",
      down_payment: "",
      down_payment_percent: "",
      loanType: ""

    };
    this.handleInput=this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault()
    //this.setState({[e.target.name]: e.target.value})
    this.props.onSlider(e)
  }

  render() {
    return (
      <div className={styles.formTable}>
        <div className={styles.formBox}>
        <form onChange={this.handleInput}>
          <label className={styles.formHeader}>Home Price</label>
          <input className={styles.formPrice}
            type="text"
            name="home_price"
            value={this.props.data.home_price}/>
          <input className={styles.slider}
            type="range"
            name="home_price"
            min = "0"
            max = "1600000"
            value={this.props.data.home_price}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.home_price/16000}%, rgb(205, 209, 212) ${this.props.data.home_price/16000}%, rgb(205, 209, 212) 100%)`}}
          />
        </form>

        <form onChange={this.handleInput}>
          <label className={styles.formHeader}>Down Payment</label>
          <input
            className={styles.formLeft }
            type="text"
            name="down_payment"
            value={this.props.data.down_payment}
          />
          <input
            className={styles.formRight}
            type="text"
            name="down_payment_percent"
            value={this.props.data.down_payment_percent}
          />
          <input className={styles.slider}
            type="range"
            name="down_payment_percent"
            min="0"
            max="30"
            value={this.props.data.down_payment_percent}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.down_payment_percent/.3}%, rgb(205, 209, 212) ${this.props.data.down_payment_percent/.3}%, rgb(205, 209, 212) 100%)`}}
          />
        </form>

        <form className={styles.formHeader} onChange={this.handleInput}>
          <label>Interest Rate</label>
          <input className={styles.formPrice}
            type="text"
            name="interest"
            value = {this.props.data.interest}
          />
          <input className={styles.slider}
            type="range"
            name="interest"
            min="0"
            max=".065"
            step="0.001"
            value={this.props.data.interest}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.interest/.00065}%, rgb(205, 209, 212) ${this.props.data.interest/.00065}%, rgb(205, 209, 212) 100%)`}}
          />
        </form>

        {/* <form>
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
        </form> */}
        </div>
      </div>
    )
  }

}

export default Form;

// .toLocaleString('en-US', {style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,})
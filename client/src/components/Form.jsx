import React from 'react';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: "",
      hoa: "",
      property_tax: "",
      interest: 2.78,
      down_payment_percent: 20,
      down_payment: "",
      principalAndInterest: 'calc',
      other: 0

    };
    this.onSlider=this.onSlider.bind(this);
    this.setDefault=this.setDefault.bind(this);
    this.setDownPayment=this.setDownPayment.bind(this);
  }

  componentDidMount() {
    this.setDefault()
    //(console.log('hoa',this.state.hoa))
    //.then(this.setDownPayment)

  }

  setDefault() {
    this.setState({ home_price: this.props.financials.home_price, hoa: this.props.financials.hoa, property_tax: this.props.financials.property_tax})
  }

  setDownPayment() {
    let value = this.state.home_price * (1 + (this.state.down_payment_percent/100));
    console.log(this.state.home_price)
    this.setState({down_payment: value})
  }

  calcPrincipalAndInterest() {
    console.log('hello world')
  }

  onSlider(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className={styles.formTable}>
        <div className={styles.formBox}>
        <form onChange={this.onSlider}>
          <label className={styles.formHeader}>Home Price</label>
          <input className={styles.formPrice}
            type="text"
            name="home_price"
            value={this.state.home_price ? this.state.home_price : this.props.financials.home_price}/>
          <input className={styles.slider}
            type="range"
            name="home_price"
            min = "0"
            max = "1600000"
            value={this.state.home_price}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.state.home_price/16000}%, rgb(205, 209, 212) ${this.state.home_price/16000}%, rgb(205, 209, 212) 100%)`}}
          />
        </form>
        <form onChange={this.onSlider}>
          <label className={styles.formHeader}>Down Payment</label>
          <input
            className={styles.formLeft }
            type="text"
            name="down_payment"
            value={this.state.home_price*(this.state.down_payment_percent/100)}
          />
          <input
            className={styles.formRight}
            type="text"
            name="down_payment_percent"
            value={this.state.down_payment_percent}
          />
          <input className={styles.slider}
            type="range"
            name="down_payment_percent"
            min="0"
            max="30"
            value={this.state.down_payment_percent}
            style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.state.down_payment_percent/.3}%, rgb(205, 209, 212) ${this.state.down_payment_percent/.3}%, rgb(205, 209, 212) 100%)`}}
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

// .toLocaleString('en-US', {style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,})
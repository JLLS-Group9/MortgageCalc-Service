import React from 'react';
import styles from '../style.css';
import NumberFormat from 'react-number-format';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: "",
      interest: "",
      down_payment: "",
      down_payment_percent: "",
      loanType: "30-year fixed"

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
      <div className={styles.formBoxTwo}>
          {/* home price form container */}
        <div className={styles.forms}>
            {/* home price inner container */}

            <form className={styles.formsTwo} >
              {/* container for input form */}
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
                    this.props.onFormatted(value)
                  }}
                  value={this.props.data.home_price}
                />
              </div>
              {/* container for slider */}
              <div className={styles.f2}>
                <input className={styles.slider}
                  onChange={this.handleInput}
                  type="range"
                  name="home_price"
                  min = "0"
                  max = "1600000"
                  value={this.props.data.home_price}
                  style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.home_price/16000}%, rgb(205, 209, 212) ${this.props.data.home_price/16000}%, rgb(205, 209, 212) 100%)`}}
                />
              </div>
            </form>

        </div>

        <div className={styles.forms}>
          <div className={styles.formsTwo}>
            <form onChange={this.handleInput}>
              <div className={styles.f1}>
                <label className={styles.formHeader}>Down Payment</label>
                <NumberFormat
                  className={styles.formLeft }
                  thousandSeparator={true}
                  prefix={'$'}
                  type="text"
                  name="down_payment"
                  value={this.props.data.down_payment}
                />
                <NumberFormat
                  className={styles.formRight}
                  suffix={'%'}
                  type="text"
                  name="down_payment_percent"
                  value={this.props.data.down_payment_percent}
                />
              </div>
              <div className={styles.f2}>
                <input className={styles.slider}
                  type="range"
                  name="down_payment_percent"
                  min="0"
                  max="30"
                  value={this.props.data.down_payment_percent}
                  style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.down_payment_percent/.3}%, rgb(205, 209, 212) ${this.props.data.down_payment_percent/.3}%, rgb(205, 209, 212) 100%)`}}
                />
              </div>
            </form>
          </div>
        </div>
          {/* interest rate form container */}
        <div className={styles.forms}>

            <form className={styles.formsTwo} className={styles.formHeader} onChange={this.handleInput}>
              <div className={styles.f1}>
                <label>Interest Rate</label>
                <NumberFormat className={styles.formRate}
                  suffix={'%'}
                  type="text"
                  name="interest"
                  value = {this.props.data.interest}
                />
              </div>
              <div className={styles.f2}>
                <input className={styles.slider}
                  type="range"
                  name="interest"
                  min="0"
                  max="6.5"
                  step="0.1"
                  value={this.props.data.interest}
                  style={{background: `linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${this.props.data.interest/.065}%, rgb(205, 209, 212) ${this.props.data.interest/.065}%, rgb(205, 209, 212) 100%)`}}
               />
              </div>
           </form>

        </div>

        <div className={styles.forms}>
            <form className={styles.formsTwo}>
              <div className={styles.ff1}>
                <label className={styles.formHeader} for="loan type">Loan Type</label>
              </div>
              <div className={styles.loanContainer}>
                <div className={styles.loanBox}>

                    <div className={styles.loanDefault}>
                      {this.props.data.loan_type}
                    </div>
                    <div className={styles.loanCarrot}>
                      <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path>
                      </svg>
                    </div>
                </div>

                  <select className={styles.loan}
                    onChange={this.handleInput}
                    name="loan_type">
                    <option value="30-year fixed">30-year fixed</option>
                    <option value="20-year fixed">20-year fixed</option>
                    <option value="15-year fixed">15-year fixed</option>
                    <option value="10-year fixed">10-year fixed</option>
                    <option value="FHA 30-year fixed">FHA 30-year fixed</option>
                    <option value="FHA 15-year fixed">FHA 15-year fixed</option>
                    <option value="VA 30-year fixed">VA 30-year fixed</option>
                    <option value="VA 15-year fixed">VA 15-year fixed</option>
                  </select>

              </div>
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
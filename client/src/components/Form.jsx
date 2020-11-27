import React from 'react';
import styles from '../style.css';
import FormHomePrice from './FormHomePrice.jsx';
import FormDownPayment from './FormDownPayment.jsx';
import FormInterestRate from './FormInterestRate.jsx';
import FormLoanType from './FormLoanType.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput=this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault()
    this.props.onSlider(e)
  }

  render() {
    return (
      <div className={styles.formBoxTwo}>
        <FormHomePrice
        handleInput={this.handleInput}
        onFormatted={this.props.onFormatted}
        data={this.props.data} />

        <FormDownPayment
        handleInput={this.handleInput}
        onFormatted={this.props.onFormatted}
        data={this.props.data} />

        <FormInterestRate
        handleInput={this.handleInput}
        onFormatted={this.props.onFormatted}
        data={this.props.data} />

        <FormLoanType
        handleInput={this.handleInput}
        onFormatted={this.props.onFormatted}
        data={this.props.data} />
      </div>
    )
  }

}

export default Form;

// .toLocaleString('en-US', {style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,})
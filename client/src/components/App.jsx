import React from 'react';
import styles from '../style.css';
import Form from './Form.jsx';
import Graph from './Graph.jsx';
import Table from './Table.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: "",
      property_tax: "",
      hoa: "",
      interest: "",
      down_payment_percent: "",
      down_payment: "",
      principalAndInterest: "",
      other: "",
      monthly: "",
      home_ins: ""
    };
    this.retrieveCost = this.retrieveCost.bind(this);
    this.setDefaults = this.setDefaults.bind(this);
    this.setDownPayment = this.setDownPayment.bind(this);
    this.setPrincipalandInt = this.setPrincipalandInt.bind(this);
    this.pmt = this.pmt.bind(this);
    this.onHomePrice = this.onHomePrice.bind(this);
    this.onSlider = this.onSlider.bind(this);
    this.onLoanType = this.onLoanType.bind(this);
    this.onDownPayment = this.onDownPayment.bind(this);
    this.calcMonthly = this.calcMonthly.bind(this);
  }

  componentDidMount() {
    this.retrieveCost(1);
  }

  //make a request for a given id
  retrieveCost(id) {
    axios.get(`/api/homes/${id}/cost`)
      .then((data) => {
        this.setState({hoa: data.data[0]['hoa'], home_price: data.data[0]['home_price'], property_tax: data.data[0]['property_tax']})
      })
      .then(this.setDefaults("30-year fixed"))
      .then(this.setDownPayment)
      .then(this.setPrincipalandInt)
      .then(this.calcMonthly)
  }

  setDefaults(loan_type) {
    this.setState({down_payment_percent: 20, interest: Type[loan_type], home_ins: 75})
  }

  setDownPayment() {
    this.setState({down_payment: this.state.home_price*this.state.down_payment_percent/100 })
  }

  setPrincipalandInt() {
    this.setState({principalAndInterest: -this.pmt(this.state.interest/12, 360, this.state.home_price-this.state.down_payment)})
  }

  //set homeprice
  onHomePrice(value) {
    this.setState({home_price: value})
  }
  //move sliders
  onSlider(e) {
    this.setState({[e.target.name]: e.target.value})
    this.setDownPayment()
    this.setPrincipalandInt()
    //need to recalc principal and interest
    this.calcMonthly()
  }
  //set interest LoanType
  onLoanType(e) {
    this.setStae({interest: Type[e.target.value]})
  }
  //set down payment percentage from down payment
  onDownPayment() {
    this.setState({down_payment_percent: this.state.down_payment/this.state.home_price})
  }

  calcMonthly() {
    this.setState({monthly:
      this.state.principalAndInterest +
      this.state.hoa +
      this.state.property_tax/12 +
      this.state.home_ins +
      this.state.other})
  }

  pmt(ir, np, pv) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     */
    var pmt, pvif;

    if (ir === 0)
        return -(pv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif) / (pvif - 1);

    return pmt;
}

  render() {
    return (
      <div>
        <div className={styles.title}>Affordability</div>
        <br></br>
        <div className={styles.textOne}>Calculate your monthly mortgage payments</div>
        <div>Your est.payment: {Number(this.state.monthly).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}/month</div>
        <Form
          data={this.state}
          setDownPayment={this.setDownPayment}
          setPrincipalandInt={this.setPrincipalandInt}
          onHomePrice={this.onHomePrice}
          onSlider={this.onSlider}
          onLoanType={this.onLoanType}
          onDownPayment={this.onDownPayment}
          calcMonthly={this.calcMonthly}
           />
        <Graph data={this.state}/>
        {/* <Table data={this.state}/> */}
      </div>
    );
  }
}

export default App;

var Type = {
  "30-year fixed": 0.0276,
  "20-year fixed": 0.0291,
  "15-year fixed": 0.0247,
  "10-year fixed": 0.0281,
  "FHA 30-year fixed": 0.0235,
  "FHA 15-year fixed": 0.0225,
  "VA 30-year fixed": 0.027,
  "Va 15-year fixed": 0.0217
};
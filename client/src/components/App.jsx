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
      home_ins: "",
      loan_type: "",
      circle: {}
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
    this.setTax = this.setTax.bind(this);
    this.calcMonthly = this.calcMonthly.bind(this);
    this.setInterestFromLoan = this.setInterestFromLoan.bind(this);
    this.setMortgageIns = this.setMortgageIns.bind(this);
    this.setCircle = this.setCircle.bind(this);
  }

  componentDidMount() {
    this.retrieveCost();
  }

  //make a request for a given id
  retrieveCost() {
    //serve static files at '/' endpoint and '/homes/:id/ endpoint
    //let id = window.location.pathname => /
    let endpoint = `${window.location.pathname}cost`
    //console.log(endpoint)
    //axios.get(`/api/homes/${id}/cost`)
    axios.get(endpoint)
      .then((data) => {
        this.setState({hoa: data.data[0]['hoa'], home_price: data.data[0]['home_price'], property_tax: Math.round(data.data[0]['property_tax']/12)})
      })
      .then(this.setDefaults("30-year fixed"))
      .then(this.setDownPayment)
      .then(this.setPrincipalandInt)
      .then(this.calcMonthly)
      .then(this.setCircle)
      .catch(err=>console.log(err))
  }

  setDefaults(loan_type) {
    this.setState({down_payment_percent: 20, interest: Type[loan_type], home_ins: 75, other: 0, loan_type: loan_type})
  }

  setDownPayment() {
    this.setState({down_payment: this.state.home_price*this.state.down_payment_percent/100 })
  }

  setPrincipalandInt() {
    this.setState({principalAndInterest: Math.round(-this.pmt(this.state.interest/12, 360, this.state.home_price-this.state.down_payment))})
  }

  setTax() {
    this.setState({property_tax: Math.round(this.state.home_price*0.0069/12)})
  }
  //set homeprice
  onHomePrice(value) {
    this.setState({home_price: value})
  }
  //move sliders
  onSlider(e) {
    if('loan_type' === e.target.name) {
      this.setState({interest: Type[e.target.value]})
    }
    this.setDownPayment()
    this.setState({[e.target.name]: e.target.value})
    if(this.state.home_price === 0) {
      this.setState({down_payment: 0})
    }
    this.setPrincipalandInt()
    this.setMortgageIns()
    this.setTax()
    //need to recalc principal and interest
    this.calcMonthly()
    this.setCircle()
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
      this.state.property_tax +
      this.state.home_ins +
      this.state.other})
  }

  setInterestFromLoan() {
    this.setState({interest:Type[this.state.loan_type]})
  }

  setMortgageIns() {
    if (this.state.down_payment_percent < 20) {
      this.setState({other: (this.state.home_price-this.state.down_payment)*.01/12 })
    } else (
      this.setState({other: 0})
    )
  }

  // setDasharray(metric) {
  // let value1 = (this.state.metric/this.state.monthly) * 100;
  // let value2 = 100 - value1;
  // return `${value1} ${value2}`;
  // }

  setCircle() {
    let monthly = this.state.monthly;
    let principal = this.state.principalAndInterest/monthly;
    let tax = this.state.property_tax/monthly;
    let insurance = this.state.home_ins/monthly;
    let hoa = this.state.hoa/monthly;
    let other = this.state.other/monthly;

    let dash = {};

    dash.principal = `${principal*100} ${100-principal*100}`;
    dash.tax = `${tax*100} ${100-tax*100}`;
    dash.insurance = `${insurance*100} ${100-insurance*100}`;
    dash.hoa = `${hoa*100} ${100-hoa*100}`;
    dash.other = `${other*100} ${100-other*100}`;

    dash.principaloffset = 25;
    dash.taxoffset = principal*-100+125;
    dash.insuranceoffset = dash.taxoffset-(tax*100);
    dash.hoaoffset = dash.insuranceoffset-(insurance*100);
    dash.otheroffset = dash.hoaoffset-(hoa*100);

    this.setState({circle: dash})
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
      <div className={styles.app}>
        <div className={styles.innerApp}>
          <div className={styles.title}>
            <div className={styles.titleText}>
              <div className={styles.innerTitleText}>Affordability</div>
            </div>
          </div>
          <div className={styles.subTitle}>
            <div className={styles.textOne}>Calculate your monthly mortgage payments</div>
            <div className={styles.textTwo}>Your est.payment: {Number(this.state.monthly).toLocaleString('en-US', {style: "currency",
               currency: "USD",
               minimumFractionDigits: 0,
               maximumFractionDigits: 0,})}/month</div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formBoxOne}>
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
            </div>
          </div>
          <div className={styles.graphTable}>
            <Graph data={this.state}/>
            <Table data={this.state}/>
          </div>
        </div>
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
  "VA 15-year fixed": 0.0217
};
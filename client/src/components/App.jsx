import React from 'react';
import styles from '../style.css';
import Form from './Form.jsx';
import Graph from './Graph.jsx';
import Table from './Table.jsx';
import axios from 'axios';
import NumberFormat from 'react-number-format';

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
      max: 1500000,
      circle: {}
    };
    this.retrieveCost = this.retrieveCost.bind(this);
    this.setDefaults = this.setDefaults.bind(this);
    this.setDownPayment = this.setDownPayment.bind(this);
    this.setPercentage = this.setPercentage.bind(this);
    this.setPrincipalandInt = this.setPrincipalandInt.bind(this);
    this.pmt = this.pmt.bind(this);
    this.onHomePrice = this.onHomePrice.bind(this);
    this.onSlider = this.onSlider.bind(this);
    this.onDownPayment = this.onDownPayment.bind(this);
    this.setTax = this.setTax.bind(this);
    this.calcMonthly = this.calcMonthly.bind(this);
    this.setInterestFromLoan = this.setInterestFromLoan.bind(this);
    this.setMortgageIns = this.setMortgageIns.bind(this);
    this.onFormatted = this.onFormatted.bind(this);
    this.setCircle = this.setCircle.bind(this);
  }

  componentDidMount() {
    this.retrieveCost();
  }

  //make a request for a given id
  retrieveCost() {
    let endpoint = `${window.location.pathname}cost`
    axios.get(endpoint)
      .then((data) => {
        this.setState({hoa: data.data[0]['hoa'], home_price: data.data[0]['home_price'], property_tax: data.data[0]['property_tax']/12})
      })
      .then(this.setState({down_payment_percent: 20, down_payment: this.state.home_price*.20}))
      .then(this.setDefaults("30-year fixed"))
      .then(this.setDownPayment)
      .then(this.setPrincipalandInt)
      .then(this.calcMonthly)
      .then(this.setCircle)
      .catch(err=>console.log(err))
  }

  setDefaults(loan_type) {
    this.setState({down_payment_percent: 20, down_payment: this.state.home_price*.20, interest: Type[loan_type], home_ins: 75, other: 0, loan_type: loan_type})
  }

  setDownPayment() {
    this.setState({down_payment: Math.round(this.state.home_price*this.state.down_payment_percent/100 )})
  }

  setPercentage() {
    this.setState({down_payment_percent: this.state.down_payment/this.state.home_price*100})
  }

  setPrincipalandInt() {
    this.setState({principalAndInterest: -this.pmt(this.state.interest/100/12, 360, this.state.home_price-this.state.down_payment)})
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
      setTimeout(()=> (
        this.setState({
          down_payment_percent: DownPayment[e.target.value]
        })
      ),0)
    }
    this.setState({[e.target.name]: e.target.value})
    // if(e.target.name !== "down_payment_percent") {
    //   setTimeout(()=>this.setPercentage(),0)
    // }
    // if(e.target.name !== "down_payment") {
    //   setTimeout(()=>this.setDownPayment(),0)
    // }
    setTimeout(()=>this.setPrincipalandInt(),0)
    setTimeout(()=>this.setMortgageIns(),0)
    setTimeout(()=>this.setTax(),0)
    setTimeout(()=>this.calcMonthly(),0)
    setTimeout(()=>this.setCircle(),0)
  }

  onFormatted(value, field) {
    this.setState({[field]: value})
    // if(field !== "down_payment_percent") {
    //   setTimeout(()=>this.setPercentage(),0)
    // }
    if(field !== "down_payment") {
      setTimeout(()=>this.setDownPayment(),0)
    }

    setTimeout(()=>this.setPrincipalandInt(),0)
    setTimeout(()=>this.setMortgageIns(),0)
    setTimeout(()=>this.setTax(),0)
    setTimeout(()=>this.calcMonthly(),0)
    setTimeout(()=>this.setCircle(),0)
  }

  onDownPayment() {
    this.setState({down_payment_percent: this.state.down_payment/this.state.home_price})
  }

  calcMonthly() {
    this.setState({monthly:
      Math.round(this.state.principalAndInterest) +
      Math.round(this.state.property_tax) +
      Math.round(this.state.hoa) +
      Math.round(this.state.home_ins) +
      Math.round(this.state.other)})
  }

  setInterestFromLoan() {
    this.setState({interest:Type[this.state.loan_type]})
  }

  setMortgageIns() {
    if (this.state.down_payment_percent < 20) {
      this.setState({other: Math.round((this.state.home_price-this.state.down_payment)*.01/12) })
    } else (
      this.setState({other: 0})
    )
  }

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
                onFormatted={this.onFormatted}
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
  "30-year fixed": 2.76,
  "20-year fixed": 2.91,
  "15-year fixed": 2.47,
  "10-year fixed": 2.81,
  "FHA 30-year fixed": 0,
  "FHA 15-year fixed": 0,
  "VA 30-year fixed": 2.52,
  "VA 15-year fixed": 2.47
};

var DownPayment = {
  "30-year fixed": 20,
  "20-year fixed": 20,
  "15-year fixed": 20,
  "10-year fixed": 20,
  "FHA 30-year fixed": 3.5,
  "FHA 15-year fixed": 3.5,
  "VA 30-year fixed": 0,
  "VA 15-year fixed": 0
};
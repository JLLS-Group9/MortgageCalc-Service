import React from 'react';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_price: null,
      property_tax: null,
      hoa: null,
    };
  }


  render() {
    return (
      <div>
        <form>
          <label>Home Price</label>
          <input type="text" name="price" placeholder={this.props.financials.home_price}/>
          <input type="range"/>
        </form>
        <form>
          <label>Down Payment</label>
          <input type="text" name="down payment" placeholder="calculated value"/>
          <input type="text" name="down payment percent" placeholder="calculated value"/>
          <input type="range"/>
        </form>
        <form>
          <label>Interest Rate</label>
          <input type="text" name="interest" placeholder="2.79%"/>
          <input type="range"/>
        </form>
        <form>
          <label for="loan type">Loan Type</label>

          <select>
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

        <div>This home's hoa: {this.props.financials.hoa}</div>
        <div>This home's property tax: {this.props.financials.property_tax}</div>
      </div>
    )
  }

}

export default Form;
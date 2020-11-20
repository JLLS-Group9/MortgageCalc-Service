import React from 'react';
import styles from '../style.css';
import Form from './Form.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      financials: {}
    };
    this.retrieveCost = this.retrieveCost.bind(this)
  }

  componentDidMount() {
    this.retrieveCost(1);
  }

  //make a request for a given id
  retrieveCost(id) {
    axios.get(`/api/homes/${id}/cost`)
      .then((data) => {
        this.setState({financials: data.data[0]})
      })
  }

  render() {
    return (
      <div className={styles.title}>App Component for Mortgage Calculator
      <Form/>
      </div>
    );
  }
}

export default App;

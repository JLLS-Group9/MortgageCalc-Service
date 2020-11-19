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
      financials: {}
    };
    this.retrieveCost = this.retrieveCost.bind(this);
    this.setApp = this.setApp.bind(this);
  }

  componentDidMount() {
    this.retrieveCost(1);
  }

  setApp() {
    //need to refactor state
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
      <div>
        <div className={styles.title}>Affordability</div>
        <br></br>
        <div className={styles.textOne}>Calculate your monthly mortgage payments</div>
        <div>Your est.payment: ${'placeholder'}/month</div>
        <Form financials={this.state.financials}/>
        {/* <Graph /> */}
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;

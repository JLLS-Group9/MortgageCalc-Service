import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.title}>App Component for Mortgage Calculator</div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';

import styles from './App.module.css';

class App extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata })
    // console.log(this.state.data);
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;

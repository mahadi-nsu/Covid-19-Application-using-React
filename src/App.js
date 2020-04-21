import React from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CarsType, Tablet } from './Tablet/Tablet';


const cars:CarsType[] = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' }
]

function App() {
  return (
    <div className="App">
  <Tablet topCars={cars}/>
    </div>
  );
}

export default App;

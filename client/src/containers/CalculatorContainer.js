import React from 'react';
import Calculator from '../components/calculator/Calculator';
import '../components/addShare/AddShare.css'

const CalculatorContainer = () => {
  return (
    <section id='add-page-container'>
      <div className="calculator-container">
            <Calculator/>
      </div>
     </section> 
  )
};

export default CalculatorContainer;

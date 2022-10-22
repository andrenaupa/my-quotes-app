import quotes from '../quotes.json';
import { useState } from 'react';

const QuoteBox = ({colorRandom, indexRandom, update}) => {

  return (
      <div className='card'>
        <div className="card__quote" style={{color: colorRandom}}>
          <i className="fa-solid fa-quote-left card__quote-left"></i>
          <p>
          {quotes[indexRandom].quote}
          </p>
        </div>
        <p className='card__author' style={{color: colorRandom}} ><em>{quotes[indexRandom].author}</em></p>
        <i className="fa-solid fa-angle-right card__next" onClick={update} style={{backgroundColor: colorRandom}}></i>
    </div>
  );
};

export default QuoteBox;
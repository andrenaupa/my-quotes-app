import quotes from '../quotes.json';
import { useState } from 'react';

const QuoteBox = () => {

  const [indexRandom, setIndexRandom] = useState(Math.floor(Math.random()*102));
  const [colorRandom, setColorRandom] = useState(`rgb(${Math.floor(Math.random()*255)},
                                                      ${Math.floor(Math.random()*255)},
                                                      ${Math.floor(Math.random()*255)})`);

  const update = () => {
    setIndexRandom(Math.floor(Math.random()*102));
    setColorRandom(`rgb(${Math.floor(Math.random()*255)},
                        ${Math.floor(Math.random()*255)},
                        ${Math.floor(Math.random()*255)})`);
  };

  return (
    <div className='card-container' style={{backgroundColor: colorRandom}}>
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
    </div>
  );
};

export default QuoteBox;
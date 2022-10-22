import QuoteBox from "./QuoteBox";
import { useState } from "react";

const Container = () => {

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
    <div className="card-container" style={{backgroundColor: colorRandom}}>
      <QuoteBox colorRandom={colorRandom} indexRandom={indexRandom} update={update}/>
    </div>
  );
};

export default Container;
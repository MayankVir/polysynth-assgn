import { useState } from "react";

const Leverage = ({ slider, setSlider }) => {
  // const [slider, setSlider] = useState(1);

  return (
    <div className="main__leverage">
      <div>
        <label htmlFor="">Leverage</label>
        <div>{`${slider}x`}</div>
      </div>
      <input
        type="range"
        min={1}
        max={10}
        value={slider}
        onChange={setSlider}
        id="myRange"
      ></input>
      <div>
        <div>1x</div>
        <div>10x</div>
      </div>
    </div>
  );
};

export default Leverage;

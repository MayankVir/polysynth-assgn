import React from "react";

const ETH = ({ valueETH, handleETHchange }) => {
  return (
    <div className="main__eth">
      <label htmlFor="">Amount</label>
      <div className="main__ethInput">
        <input
          type="number"
          name="ETH"
          id="ETH"
          // min={0}
          value={isNaN(valueETH) || valueETH === 0 ? "" : valueETH}
          placeholder="0.00"
          onChange={handleETHchange}
        />
        <div className="inputRightLabel">ETH</div>
      </div>
    </div>
  );
};

export default ETH;

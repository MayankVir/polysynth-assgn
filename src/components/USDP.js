import React from "react";

const USDP = ({ valueUSDP, handleUSDPchange }) => {
  return (
    <div className="main__usdp">
      <label htmlFor="">Amount</label>
      <div className="main__usdpInput">
        <input
          type="number"
          name="USDP"
          id="USDP"
          // min={0}
          value={isNaN(valueUSDP) || valueUSDP === 0 ? "" : valueUSDP}
          placeholder="0.00"
          onChange={handleUSDPchange}
        />
        <div className="inputRightLabel">USDP</div>
      </div>
    </div>
  );
};

export default USDP;

import React, { useState } from "react";

const Tolerance = ({ handleTolerance }) => {
  const [value, setValue] = useState(0.5);

  const handleInputChange = (e) => {
    if (
      parseFloat(e.target.value) > 5 ||
      parseFloat(e.target.value) < 0 ||
      e.target.value === ""
    ) {
      e.target.value = "";
      setValue(0.5);
      handleTolerance(0.5);
    } else {
      setValue(parseFloat(e.target.value));
      handleTolerance(parseFloat(e.target.value));
    }
  };
  return (
    <div className="main__tolerance">
      <div>Slippage Tolerance</div>
      <form className="boxed">
        <input
          type="radio"
          id="0.1percent"
          name="skills"
          checked={value === 0.1 ? true : false}
          onChange={() => {
            setValue(0.1);
            handleTolerance(0.1);
          }}
        />
        <label htmlFor="0.1percent">0.1%</label>

        <input
          type="radio"
          id="0.5percent"
          name="skills"
          checked={value === 0.5 ? true : false}
          onChange={() => {
            setValue(0.5);
            handleTolerance(0.5);
          }}
        />
        <label htmlFor="0.5percent">0.5% </label>

        <input
          type="radio"
          id="1percent"
          name="skills"
          checked={value === 1.0 ? true : false}
          onChange={() => {
            setValue(1.0);
            handleTolerance(1.0);
          }}
        />
        <label htmlFor="1percent">1.0%</label>

        <div className="other">
          <input
            type="number"
            min={0}
            max={5}
            step={0.1}
            name="skills"
            id="other"
            placeholder="Other"
            onChange={handleInputChange}
          />
          %
        </div>
      </form>
    </div>
  );
};

export default Tolerance;

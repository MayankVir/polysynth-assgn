import USDP from "./USDP";
import ETH from "./ETH";
import Leverage from "./Leverage";
import Tolerance from "./Tolerance";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [valueUSDP, setValueUSDP] = useState(0);
  const [valueETH, setValueETH] = useState(0);
  const [valueLeverage, setValueLeverage] = useState(1);
  const [valueTolerance, setValueTolerance] = useState(0.5);
  const [activeValue, setActiveValue] = useState(null);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleUSDPchange = (e) => {
    setValueUSDP(parseFloat(e.target.value));
    const setETH = (parseFloat(e.target.value) * 1000) / valueLeverage;
    setValueETH(setETH);
    setActiveValue("USDP");
    setShowData(false);
  };

  const handleETHchange = (e) => {
    setValueETH(parseFloat(e.target.value));
    const setUSDP =
      (parseFloat(e.target.value) * parseInt(valueLeverage)) / 1000;
    setValueUSDP(setUSDP);
    setActiveValue("ETH");
    setShowData(false);
  };

  const handleLeverage = (e) => {
    setValueLeverage(parseInt(e.target.value));
    if (activeValue === "ETH") {
      const setUSDP = (valueETH * parseInt(e.target.value)) / 1000;
      setValueUSDP(setUSDP);
    } else if (activeValue === "USDP") {
      const setETH = (valueUSDP * 1000) / parseInt(e.target.value);
      setValueETH(setETH);
    }
    setShowData(false);
  };

  const handleTolerance = (e) => {
    if (e === null || e === "" || isNaN(e)) {
      setValueTolerance(0.5);
    } else {
      setValueTolerance(e);
    }
    setShowData(false);
  };

  const handlePlacingOrder = () => {
    setPlacingOrder(true);
    setTimeout(() => {
      setPlacingOrder(false);
      toast.success("Ordered Placed Successfully");
      setShowData(true);
    }, 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="main">
        <USDP valueUSDP={valueUSDP} handleUSDPchange={handleUSDPchange} />
        <ETH valueETH={valueETH} handleETHchange={handleETHchange} />
        <Leverage slider={valueLeverage} setSlider={handleLeverage} />
        <Tolerance handleTolerance={handleTolerance} />
        <button
          onClick={handlePlacingOrder}
          disabled={valueUSDP && valueETH ? false : true}
          className="main__orderBtn"
        >
          {placingOrder ? "Placing Order..." : "Place Order"}
        </button>
      </div>
      {showData ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "10px",
          }}
        >
          <div>USDP: {valueUSDP}</div>
          <div>ETH: {valueETH}</div>
          <div>Leverage: {valueLeverage}</div>
          <div>Tolerance: {valueTolerance}</div>
        </div>
      ) : (
        <></>
      )}
      <ToastContainer />
    </div>
  );
};

export default Main;

import React from "react";
import { useState, useEffect } from "react";
import { getCarpoolBySite } from "../hooks/UsePassenger";
import CarpoolContainer from "../components/CarpoolContainer";

const Passenger = () => {
  const [departFrom, setDepartFrom] = useState("");
  const [carpools, setCarpools] = useState("");
  const carpoolHandler = (data) => {
    setCarpools(data);
  };

  return (
    <div>
      <h2>this Passenger Page(廢棄)</h2>
      <label>出發地</label>
      <input
        type="text"
        value={departFrom}
        onChange={(e) => setDepartFrom(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("getCarpoolBySite 被點擊");
          getCarpoolBySite(departFrom, setCarpools);
        }}
      >
        搜尋
      </button>

      <div>
        {carpools &&
          carpools.map((d) => {
            return <CarpoolContainer data={d} key={d.id} />;
          })}
      </div>
    </div>
  );
};

export default Passenger;

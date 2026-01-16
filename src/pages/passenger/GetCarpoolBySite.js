import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getCarpoolBySite,
  checkMyCarpool,
  orderCarpool,
} from "../../hooks/UsePassenger";
import CarpoolContainer from "../../components/CarpoolContainer";

// 實作查詢共乘功能
const GetCarpoolBySite = () => {
  const location = useLocation();
  const userId = location.state?.userId || 10; // 取得傳過來的參數

  const [currentUserId, setCurrentUserId] = useState(userId);
  const [departFrom, setDepartFrom] = useState("taipei");
  const [carpools, setCarpools] = useState("");
  const [orderRes, setOrderRes] = useState("");

  const departFromList = ["Taipei", "Taichung", "Kaohsiung", "Hualien"];

  const carpoolHandler = (data) => {
    setCarpools(data);
  };
  useEffect(() => {
    if (!orderRes) return;
    let msg = orderRes.msg;
    if (orderRes.msg === "預約成功") {
      const yourCarpool = orderRes.object[0];
      msg = `${msg}  共乘車次: ${yourCarpool.carpoolId} \n 訂位編號: ${yourCarpool.cmid}`;
    } else {
      msg = `${msg}  `;
    }

    alert(msg);
  }, [orderRes]);
  return (
    <div>
      <h2>this Passenger Page</h2>
      <label>出發地</label>

      <select
        value={departFrom}
        onChange={(e) => setDepartFrom(e.target.value)}
      >
        {departFromList.map((d) => (
          <option>{d}</option>
        ))}
      </select>

      <button
        onClick={() => {
          console.log("getCarpoolBySite 被點擊");
          getCarpoolBySite(departFrom, setCarpools);
        }}
      >
        搜尋
      </button>
      <div>
        <label>當前userId </label>
        <input
          type="number"
          value={currentUserId}
          onChange={(e) => {
            setCurrentUserId(e.target.value);
          }}
        />

        <label>(目前可用ID為8,9,10,11,預設為9，可自行更改)</label>
      </div>

      <div>
        {carpools &&
          carpools.map((d) => {
            return (
              <CarpoolContainer
                data={d}
                key={d.id}
                text="預定"
                fun={async () => {
                  const carpoolId = d.id;
                  const res = await orderCarpool(currentUserId, carpoolId);
                  setOrderRes(res);
                  //觸發預定共乘API
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GetCarpoolBySite;

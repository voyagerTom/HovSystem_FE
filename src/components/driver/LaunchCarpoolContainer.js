import React from "react";
import { getMyCarpool, cancelCarpool } from "../../hooks/UseDriver";

// 這個容器用來裝已發布共乘的樣板
const LaunchCarpoolContainer = ({ data, _carpoolId, _driverId }) => {
  return (
    <div className="carpool-card">
      <section>
        <p>共乘車次編號：{data.id}</p>
        <time>出發時間：{data.launchTime}</time>
        <div className="route">
          <strong>出發地：{data.site}</strong>
          <span> → </span>
          <strong>目的地：{data.destination}</strong>
        </div>
        <p>總座位數: {data.pickAmt}</p>
        <p>已預訂座位數: {data.orderAmt}</p>
      </section>
      <button
        onClick={() => {
          console.log("這是取消功能");
          cancelCarpool(data.id, data.driverId);
        }}
      >
        取消共乘
      </button>
    </div>
  );
};

export default LaunchCarpoolContainer;

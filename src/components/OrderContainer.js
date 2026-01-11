import React from "react";

// 這個是用於存放訂單的容器

const OrderContainer = ({ data, text, fun }) => {
  return (
    <div className="carpool-card">
      <section>
        <p>共乘車次編號: {data.id}</p>
        <time>出發時間: {data.launchTime}</time>
        <div className="route">
          <strong>出發地: {data.site}</strong>
          <span>→</span>
          <strong>目的地: {data.destination}</strong>
        </div>
        <div>
          <p className="leftSeat">剩餘座位數:{data.pickAmt - data.orderAmt}</p>
          <p>總座位數: {data.pickAmt}</p>
        </div>
      </section>

      <button onClick={fun}>{text}</button>
    </div>
  );
};

export default OrderContainer;

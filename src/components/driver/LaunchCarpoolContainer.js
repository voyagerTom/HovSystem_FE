import React from "react";
import { getMyCarpool, cancelCarpool } from "../../hooks/UseDriver";

// 這個容器用來裝已發布共乘的樣板
const LaunchCarpoolContainer = ({ data, _carpoolId, _driverId, onRefresh }) => {
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

      {/* 這段用來判斷，當查詢已取消共乘時，不要在呈現取消按鈕 */}
      {data.isCancel === "N" && (
        <button
          onClick={async () => {
            console.log("取消已發布共乘功能_啟動");
            const confirmCancel = window.confirm("確定要取消此共乘嗎？");
            if (!confirmCancel) return;
            await cancelCarpool(data.id, data.driverId);
            console.log("準備啟動onfresh");
            onRefresh();
          }}
        >
          取消共乘
        </button>
      )}
    </div>
  );
};

export default LaunchCarpoolContainer;

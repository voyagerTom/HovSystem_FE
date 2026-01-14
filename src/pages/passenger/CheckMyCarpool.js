import React from "react";
import { useState, useEffect } from "react";
import {
  checkMyCarpool,
  getCarpoolBySite,
  cancelOrderCarpoolById,
} from "../../hooks/UsePassenger";
import CarpoolContainer from "../../components/CarpoolContainer";
import { useLocation } from "react-router-dom";

const CheckMyCarpool = () => {
  const location = useLocation();
  const { userId } = location.state || {}; // 取得傳過來的參數
  const [currentUserId, setCurrentUserId] = useState(userId);

  const [carpools, setCarpools] = useState("");
  const [orderRes, setOrderRes] = useState("");
  const carpoolHandler = (data) => {
    setCarpools(data);
  };

  useEffect(() => {
    if (!orderRes) return;
    let carpoolMap = orderRes.object;
    console.log("carpoolMap", carpoolMap);
    let msg = `您的共乘車次 ${carpoolMap.cmid}已取消完成`;

    alert(msg);
  }, [orderRes]);

  return (
    <div>
      <h2>CheckMyCarpool 查詢我的共乘</h2>

      <label>使用者ID</label>
      <input
        type="number"
        value={currentUserId}
        onChange={(e) => setCurrentUserId(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("CheckMyCarpool 被點擊");
          checkMyCarpool(currentUserId, setCarpools);
        }}
      >
        搜尋
      </button>

      {carpools &&
        carpools.map((d) => {
          return (
            <CarpoolContainer
              data={d}
              key={d.id}
              text="取消預定"
              fun={async () => {
                console.log("取消共乘 測試觸發");
                const res = await cancelOrderCarpoolById(d.id, currentUserId);
                setOrderRes(res);
              }}
            />
          );
        })}
    </div>
  );
};

export default CheckMyCarpool;

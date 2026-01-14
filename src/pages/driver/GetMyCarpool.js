// 顯示司機所發布的共乘
// 查看已發布的共乘車次(包含歷史資料);
import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { getMyCarpool, cancelCarpool } from "../../hooks/UseDriver";
import {} from "../../hooks/UseDriver";
import LaunchCarpoolContainer from "../../components/driver/LaunchCarpoolContainer";

const GetMyCarpool = ({ isHis }) => {
  const [launchedCar, setLaunchedCar] = useState([]);
  const [currentUser, setCurrentUser] = useState("11");

  const location = useLocation();
  const userId = location.state?.userId || 10; // 取得傳過來的參數
  const [currentUserId, setCurrentUserId] = useState(userId);

  let res = "666";
  const fetchData = async () => {
    console.log("fetchData觸發");
    console.log(currentUserId);
    res = await getMyCarpool(currentUserId);
    console.log("GetMyCarpool hooks_", res.object);
    // console.log("hisData ", isHis);
    if (isHis === "his") {
      console.log("本次是歷史共乘");
      res = res.object.filter((caprool) => caprool.isCancel === "Y");
    } else {
      console.log("本次是現行共乘");
      res = res.object.filter((caprool) => caprool.isCancel === "N");
    }
    setLaunchedCar(res);
  };

  useEffect(() => {
    fetchData();
  }, [isHis, currentUserId]);

  return (
    <div>
      查看已發布的共乘車次
      <div className="launchedCarpools">
        {/* {console.log("hisData ", hisData)} */}
        {launchedCar &&
          launchedCar.map((d) => {
            return (
              <LaunchCarpoolContainer
                data={d}
                key={d.id}
                onRefresh={fetchData}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GetMyCarpool;

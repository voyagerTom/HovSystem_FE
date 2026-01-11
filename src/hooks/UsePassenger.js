// import { useState, useEffect } from "react";
import { PassengerService } from "../api/PassengerService";

//這層主要用於處理業務邏輯

export const getCarpoolBySite = async (_from, setCarpools) => {
  console.log("hooks_getCarpoolBySite");
  const res = await PassengerService.getCarpoolBySite(_from);
  console.log("hooks_完成請求");
  console.log("hooks_", res.object);
  setCarpools(res.object);
  return res.object;
};

// export default UsePassenger;

export const checkMyCarpool = async (_userId, setCarpools) => {
  console.log("hooks_checkMyCarpool");
  const res = await PassengerService.checkMyCarpool(_userId);
  console.log("hooks_完成請求");
  setCarpools(res);
  setCarpools(res.carpoolList);
  return res.carpoolList;
};

export const orderCarpool = async (_userId, carpoolId) => {
  console.log("hooks_orderCarpool____userId", _userId);
  const res = await PassengerService.ordercarpool(_userId, carpoolId);
  console.log("hooks_完成請求");
  console.log("orderCarpool", res);
  return res;
  //預約失敗，請確認是否已滿位、重複預約或車次已取消
};

//處理取消訂位
export const cancelOrderCarpoolById = async (_carpoolId, _userId) => {
  console.log("hooks_cancelOrderCarpoolById");
  const res = await PassengerService.cancelOrderCarpoolById(
    _carpoolId,
    _userId
  );
  console.log("hooks_完成請求");
  console.log("cancelOrderCarpoolById ", res);
  return res;
  //預約失敗，請確認是否已滿位、重複預約或車次已取消
};

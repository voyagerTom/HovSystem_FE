//這層主要用於處理業務邏輯

import { DriverService } from "../api/DriverService";

export const getMyCarpool = async (_driverId) => {
  console.log("hooks_getCarpoolBySite");
  const res = await DriverService.getMyCarpool(_driverId);
  console.log("hooks_完成請求");
  console.log("hooks_", res.data);
  return res.data;
};

export const cancelCarpool = async (_carpoolId, _driverId) => {
  console.log("hooks_cancelCarpool");
  const res = await DriverService.cancelCarpool(_carpoolId, _driverId);
  console.log("hooks_完成請求cancelCarpool");
  console.log("hooks_res", res);
  console.log("hooks_res.data", res.data);
  return res;
};

export const launchCarpool = async (_orderForm) => {
  console.log("hooks_launchCarpool");
  console.log("_orderForm", _orderForm);
  const res = await DriverService.launchCarpool(_orderForm);
  console.log(res.data);
  return res.data;
};

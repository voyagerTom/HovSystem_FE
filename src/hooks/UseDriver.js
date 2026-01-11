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
  console.log("hooks_完成請求");
  console.log("hooks_", res.data);
  return res.data;
};

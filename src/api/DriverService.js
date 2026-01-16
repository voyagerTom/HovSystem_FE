import React from "react";
import axios from "axios";

//實做API呼叫
// const driverAPI = "https://16c2944aec0d.ngrok-free.app/driver";
let driverAPI = "http://localhost:8099/driver";

export const DriverService = {
  getMyCarpool: async (_driverId) => {
    let getMyCarpoolAPI = `${driverAPI}/getmycarpool`;
    console.log("_driverId___", _driverId);
    try {
      const res = await axios.get(getMyCarpoolAPI, {
        params: { driverId: _driverId },
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        // withCredentials: true,
      });
      console.log("Driver_SVC ", res);
      return res;
    } catch (error) {
      if (error.response && error.response.status === 302) {
        console.warn(
          "發生 302 重新導向，目標位址為:",
          error.response.headers.location
        );
      }
      throw error;
    }
  },
  cancelCarpool: async (_carpoolId, _driverId) => {
    let cancelCarpoolAPI = `${driverAPI}/cancelcarpool`;
    const res = await axios.post(cancelCarpoolAPI, {
      carpoolId: _carpoolId,
      driverId: _driverId,
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res;
  },

  launchCarpool: async (_orderForm) => {
    console.log("要呼叫API", _orderForm);
    let launchCarpoolAPI = `${driverAPI}/launchcarpool`;
    const res = await axios.post(launchCarpoolAPI, _orderForm, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res;
  },
};

// export default DriverService;

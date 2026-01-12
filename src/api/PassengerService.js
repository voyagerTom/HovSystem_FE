import axios from "axios";

//實做API呼叫
// const passengAPI = "https://8c8f9624f031.ngrok-free.app/passenger";
const passengAPI = "http://localhost:8099/passenger";

// 這段headers是為了 ngrok
//   headers: {
//           "ngrok-skip-browser-warning": "true",
//         },

export const PassengerService = {
  getCarpoolBySite: async (_departFrom) => {
    let getCarpoolBySiteAPI = `${passengAPI}/getcarpoolbysite`;
    try {
      // console.log("SVC_getCarpoolBySiteAPI: " + getCarpoolBySiteAPI);
      const res = await axios.get(getCarpoolBySiteAPI, {
        params: { site: _departFrom },
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        // withCredentials: true,
      });
      console.log("PSG_SVC ", res.data);
      return res.data;
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

  checkMyCarpool: async (_userId) => {
    let checkMyCarpoolAPI = `${passengAPI}/checkmycarpool`;
    const res = await axios.get(checkMyCarpoolAPI, {
      params: { userId: _userId },
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    console.log("PSG_SVC checkMyCarpool ", res.data);
    return res.data;
  },

  // 預定共乘
  ordercarpool: async (_userId, _carpoolId) => {
    console.log("PSG_SVC ordercarpool start ");
    let checkMyCarpoolAPI = `${passengAPI}/ordercarpool`;
    const res = await axios.post(checkMyCarpoolAPI, {
      userId: _userId,
      carpoolId: _carpoolId,
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res.data;
  },

  // 取消共乘
  cancelOrderCarpoolById: async (_carpoolId, _userId) => {
    console.log("PSG_SVC cancelordercarpoolbyid start ");
    let cancelOrderCarpoolByIdAPI = `${passengAPI}/cancelordercarpoolbyid`;
    let res = null;
    try {
      res = await axios.post(cancelOrderCarpoolByIdAPI, {
        carpoolId: _carpoolId,
        userId: _userId,

        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      return res.data;
    } catch (err) {
      if (err.response?.status === 409) {
        alert(
          err.response.data.message ||
            "訂單狀態已變更，無法取消，就是重複取消MDFK"
        );
      }
    }
  },
};

export default PassengerService;

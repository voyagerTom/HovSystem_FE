import React from "react";
import { useState, useEffect } from "react";
import { launchCarpool } from "../../hooks/UseDriver";

// 用於發布共乘用的表單的表單

const LaunchCarpoolForm = () => {
  // 地點用陣列來限制
  const fromLocations = ["Taipei", "Taichung", "Kaohsiung", "Hualien"];
  const [launchForm, setForm] = useState({
    driverId: 9,
    launchTime: "",
    site: "Taipei",
    destination: "Taipei",
    pickAmt: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    console.log("handleChange");
    let { name, value } = e.target;

    if (name === "launchTime") {
      value = value.replace("T", " ") + ":00";
      console.log("launchTime", value);
    }

    console.log(name, value);
    console.log(e.target);
    setForm({
      ...launchForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (launchForm.site === launchForm.destination) {
      alert("出發地與目的地不能相同");
      return;
    }

    console.log(`呼叫後端發布共乘`);

    setIsSubmitting(true);

    // 這段用來做debug，讓頁面不刷新
    e.preventDefault();

    const res = await launchCarpool(launchForm);

    if (res) {
      //發布成功，出現提示視窗
      alert(`共乘發布處理結果: ${res.msg}  \n 共乘編號: ${res.object.id} `);
    } else {
      //發布失敗，出現提示視窗}
      alert("共乘發布失敗");
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>共乘發布表單</h2>
        <div>
          <label>司機 ID</label>
          <input
            type="number"
            name="driverId"
            value={launchForm.driverId}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>出發時間</label>
          <input
            type="datetime-local"
            name="launchTime"
            step="1800"
            value={launchForm.launchTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>出發地</label>
          <select name="site" value={launchForm.site} onChange={handleChange}>
            {fromLocations.map((from) => (
              <option key={from} value={from}>
                {from}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>目的地</label>

          <select
            name="destination"
            value={launchForm.destination}
            onChange={handleChange}
          >
            {fromLocations.map((to) => (
              <option key={to} value={to}>
                {to}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>可載人數</label>
          <input
            type="number"
            name="pickAmt"
            min="1"
            value={launchForm.pickAmt}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          送出申請
        </button>
      </form>
    </div>
  );
};

export default LaunchCarpoolForm;

import React from "react";
import { useState, useEffect } from "react";

// 用於發布共乘用的表單的表單

const LaunchCarpoolForm = () => {
  const [launchForm, setForm] = useState({
    driverId: 11,
    launchTime: "",
    site: "Ilan",
    destination: "Taipei",
    pickAmt: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setForm({
      //   ...launchForm,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit="/">
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
            value={launchForm.launchTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>出發地</label>
          {/* todo: 改為下拉式選單 */}
          <input
            type="text"
            name="site"
            value={launchForm.site}
            onChange={handleChange}
            placeholder="Taichung"
            required
          />
        </div>
        <div>
          <label>目的地</label>
          {/* todo: 改為下拉式選單 */}
          <input
            type="text"
            name="destination"
            value={launchForm.destination}
            onChange={handleChange}
            placeholder="Hualien"
            required
          />
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
        <button type="submit">送出申請</button>
      </form>
    </div>
  );
};

export default LaunchCarpoolForm;

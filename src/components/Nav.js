import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// 這作為導覽頁;// 控制各個下拉選單的狀態 (也可以合併成一個 state 管理)

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  // 從這邊控制所以頁面的user;
  const userName = "澎湖金城武";
  const userId = 9;
  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav>
      <p> 目前使用者ID: {userName} </p>
      <p> 目前使用者ID: {userId} </p>
      <ul>
        <li className="passengerBar">
          <Link to="/" state={{ userId: userId }}>
            首頁
          </Link>
        </li>

        {/* ------------------------------------- */}
        {/* 乘客選單 - 有子功能 */}
        <li className="passengerBar">
          <button onClick={() => toggleDropdown("passenger")}>乘客 ▼</button>

          {openMenu === "passenger" && (
            <ul>
              <li>
                <Link
                  to="/passenger/get-carpool-by-site"
                  state={{ userId: userId }}
                >
                  查詢共乘
                </Link>
              </li>
              <li>
                <Link
                  to="/passenger/check-my-carpool"
                  state={{ userId: userId }}
                >
                  查看已預訂的共乘
                </Link>
              </li>
              <li>
                <Link to="/passenger/apply-for-driver">申請成為司機</Link>
              </li>
            </ul>
          )}
        </li>

        {/* 司機選單 - 有子功能 */}
        <li className="driverBar">
          <button onClick={() => toggleDropdown("driver")}>司機 ▼</button>

          {openMenu === "driver" && (
            <ul>
              <li>
                <Link to="/driver/getmycarpool" state={{ userId: userId }}>
                  查看已發布的共乘車次
                </Link>
              </li>
              <li>
                <Link to="/driver/launchCarpool" state={{ userId: userId }}>
                  發布共乘
                </Link>
              </li>

              <li>
                <Link to="/driver/getmyhiscarpool" state={{ userId: userId }}>
                  已取消的共乘車次
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* ------------------------------------- */}
      </ul>
    </nav>
  );
};

export default Nav;

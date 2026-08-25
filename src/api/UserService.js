//這API專門用於實作登入API的

import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

//BE透過docker架設對外開放8888port
// let usergAPI = "http://localhost:8888/passenger";

//BE透過docker架設不對外開放8888port
// let usergAPI = "http://hov_ngx:80/driver";

const usergAPI = "http://localhost:8099/user";

export const UserService = {
  login: async (username, password) => {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    return instance.post("/login", params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  },
};

const instance = axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: true, // 重要：允許跨域攜帶 Cookie
});

// 自動將 Cookie 裡的 CSRF Token 放入 Header
instance.interceptors.request.use((config) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  if (csrfToken) {
    config.headers["X-XSRF-TOKEN"] = csrfToken;
  }
  return config;
});

export default UserService;

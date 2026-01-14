import { useState, useEffect } from "react";

import React from "react";
import { useLocation } from "react-router-dom";
import { getMyCarpool, cancelCarpool } from "../../hooks/UseDriver";
import {} from "../../hooks/UseDriver";
import LaunchCarpoolForm from "../../components/driver/LaunchCarpoolForm";

// 本頁面用於呈現發布共乘

const LaunchCarpool = () => {
  return (
    <div>
      LaunchCarpool
      <LaunchCarpoolForm />
    </div>
  );
};

export default LaunchCarpool;

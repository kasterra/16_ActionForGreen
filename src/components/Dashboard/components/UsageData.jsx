import React from "react";
import arrowForward from "assets/arrow-forward.svg";
import car from "assets/car.svg";
import data from "assets/data.svg";
import hotTub from "assets/hot-tub.svg";
import powerPlug from "assets/power-plug.svg";

// eslint-disable-next-line react/prop-types
const UsageData = ({ kindOfUsage, usedAmount, carbonEmit }) => {
  const iconSetter = () => {
    switch (kindOfUsage) {
      case "car":
        return car;
      case "data":
        return data;
      case "heat":
        return hotTub;
      case "elect":
        return powerPlug;
      default:
        break;
    }
  };
  const titleSetter = () => {
    switch (kindOfUsage) {
      case "car":
        return "자가용 사용량";
      case "data":
        return "데이터 사용량";
      case "heat":
        return "난방 사용량";
      case "elect":
        return "전력 사용량";
      default:
        break;
    }
  };
  const usageFormatter = () => {
    switch (kindOfUsage) {
      case "car":
        return usedAmount + " km";
      case "data":
        return `${
          usedAmount > 1024 ? Math.floor(usedAmount / 1024) + "GB " : ""
        }${usedAmount % 60}MB`;
      case "heat":
        return `${
          usedAmount > 60 ? Math.floor(usedAmount / 60) + "시간 " : ""
        }${usedAmount % 60}분`;
      case "elect":
        return usedAmount + " kw";
      default:
        break;
    }
  };
  return (
    <div className="usage">
      <div className="main-icon">
        <img src={iconSetter()} alt="icon" />
      </div>
      <span className="usage-title">{titleSetter()}</span>
      <div className="usage-detail">{usageFormatter()}</div>
      <div className="arrow-container">
        <img src={arrowForward} alt="forward arrow" />
      </div>
      <div className="usage-detail">{carbonEmit + " kg"}</div>
    </div>
  );
};

export default UsageData;

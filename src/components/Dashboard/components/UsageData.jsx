import React from "react";
import arrowForward from "assets/arrow-forward.svg";
import car from "assets/car.svg";
import data from "assets/data.svg";
import hotTub from "assets/hot-tub.svg";
import powerPlug from "assets/power-plug.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaucet } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const UsageData = ({ kindOfUsage, usedAmount, carbonEmit }) => {
  const iconSetter = () => {
    switch (kindOfUsage) {
      case "car":
        return (
          <div className="main-icon">
            <img src={car} alt="icon" />
          </div>
        );
      case "data":
        return (
          <div className="main-icon">
            <img src={data} alt="icon" />
          </div>
        );
      case "heat":
        return (
          <div className="main-icon">
            <img src={hotTub} alt="icon" />
          </div>
        );
      case "elect":
        return (
          <div className="main-icon">
            <img src={powerPlug} alt="icon" />
          </div>
        );
      case "water":
        return (
          <div className="main-icon">
            <FontAwesomeIcon icon={faFaucet} size="2x" />
          </div>
        );
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
      case "water":
        return "수도 사용량";
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
      case "water":
        return usedAmount + " L";
      default:
        break;
    }
  };
  return (
    <div className="usage">
      {iconSetter()}
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

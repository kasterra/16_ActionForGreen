import React from "react";
import settings from "assets/settings.svg";
import bell from "assets/bell.svg";
import UsageData from "./components/UsageData";
import Checkbox from "@mui/material/Checkbox";
import "./css/index.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ yourCarbon, averageCarbon }) => {
  return (
    <div className="dashboard">
      <div className="app-bar">
        <div className="app-bar-title">App Dashboard</div>
        <div className="buttons">
          <button>사용량 보기</button>
          <button>알림 설정</button>
        </div>
      </div>
      <div className="inner">
        {yourCarbon !== null ? (
          <>
            <div className="section">
              <div className="title box blue-1">
                <div className="text-container">
                  <div className="text">
                    <span>
                      <span className="large">
                        탄소배출량 : {yourCarbon}kg /
                      </span>{" "}
                      1인가구 평균 {averageCarbon}kg
                    </span>
                  </div>
                  <div className="text">
                    <span className="small">서비스 이용자 석차 : 20 / 100</span>
                  </div>
                  <div className="text">
                    <span>상위 몇%달성</span>
                  </div>
                </div>
              </div>
              <div className="main box">
                <UsageData kindOfUsage="car" usedAmount={90} carbonEmit={120} />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="heat"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
                <UsageData
                  kindOfUsage="data"
                  usedAmount={90}
                  carbonEmit={120}
                />
              </div>
              <div className="bottom box">
                <span>Username님의 총 탄소 배출량은 {yourCarbon}kg로,</span>
                <span>
                  평균 배출량 {averageCarbon}kg 대비,{" "}
                  {Math.abs(averageCarbon - yourCarbon)}kg 만큼{" "}
                  {averageCarbon > yourCarbon ? "덜" : "더"} 배출하셨습니다
                </span>
                {averageCarbon > yourCarbon ? (
                  <span>나무 N그루를 더 심으신 효과를 내셨습니다. 👍</span>
                ) : (
                  <span>나무 N그루가 더 필요하겠네요 ㅠㅠ 😥</span>
                )}
              </div>
            </div>
            <div className="section">
              <div className="box title blue-2">
                <div className="noti-wrapper">
                  <div className="icon-wrapper box">
                    <img src={bell} alt="bell icon" />
                  </div>
                  <span className="huge">알림 설정</span>
                </div>
              </div>
              <div className="main box">
                <div className="check-item">
                  <Checkbox size="large" />
                  <span>평균 1인가구 탄소배출량 50% 초과시 알림</span>
                </div>
                <div className="check-item">
                  <Checkbox size="large" />
                  <span>평균 1인가구 탄소배출량 75% 초과시 알림</span>
                </div>
                <div className="check-item">
                  <Checkbox size="large" />
                  <span>평균 1인가구 탄소배출량 90% 초과시 알림</span>
                </div>
                <div className="check-item">
                  <Checkbox size="large" />
                  <span>평균 1인가구 탄소배출량 100% 초과시 알림</span>
                </div>
                <div className="check-item">
                  <Checkbox size="large" />
                  <span>사용자 설정 : </span>{" "}
                  <input className="user-input" type="text" />
                  <span> kg</span>
                  <button className="save">저장</button>
                </div>
              </div>
              <div className="bottom box">🌲🌲🌲🌲🌲🌲🌲</div>
            </div>
          </>
        ) : (
          <div className="setting-please box">
            <div className="container">
              <Link to="/settings">
                <div className="cog-icon-container">
                  <img src={settings} alt="settings icon" />
                </div>
              </Link>
              <span className="setting-title">
                현재 등록된 IoT 기기가 없습니다. 등록해 주세요!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

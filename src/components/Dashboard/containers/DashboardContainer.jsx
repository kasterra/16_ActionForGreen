import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "../Dashboard";
import { addSerial, showInfo } from "components/AxiosAPI/boardAPI";

const DashboardContainer = () => {
  const history = useHistory();
  const [serialList, setSerialList] = useState([""]);
  const editSerial = (idx, serial) =>
    setSerialList(prev => [
      ...prev.slice(0, idx),
      serial,
      ...prev.slice(idx + 1, prev.length)
    ]);
  const pushSerial = () => {
    console.log("pushSerial", serialList);
    // if (serialList.includes(serial)) return;
    setSerialList(prev => [...prev, ""]);
  };
  const deleteSerial = idx => {
    setSerialList(prev => [
      ...prev.slice(0, idx),
      ...prev.slice(idx + 1, prev.length)
    ]);
  };
  const handleSerialSubmit = () => {
    addSerial(serialList);
  };
  useEffect(() => {
    if (!window.sessionStorage.getItem("idToken")) {
      history.push("/");
    }
    showInfo();
  });
  return (
    <Dashboard
      yourCarbon={100}
      averageCarbon={2000}
      serialList={serialList}
      editSerial={editSerial}
      pushSerial={pushSerial}
      deleteSerial={deleteSerial}
      handleSerialSubmit={handleSerialSubmit}
    />
  );
};

export default DashboardContainer;

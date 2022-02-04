import React, { useState } from "react";
import Dashboard from "../Dashboard";

const DashboardContainer = () => {
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
    console.log(serialList);
  };
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

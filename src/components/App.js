import React from "react";
import styled from "styled-components";

const CO2Rect = styled.div`
  width: 600px;
  height: 180px;
  background-color: #00000000;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  position: relative;
  top: 50px;
`;

const Consume = styled.div`
  width: 600px;
  height: 390px;
  background-color: #00000000;
  border-radius: 20px;
  position: relative;
  top: 50px;
`;
const Inst = styled.div`
  width: 600px;
  height: 114px;
  letter-spacing: 0.15px;
  line-height: 150px;
  white-space: nowrap;
  position: relative;
  top: 50px;
`;

function App() {
  return (
    <div className="Screen">
      <CO2Rect />
      <Consume />
      <Inst />
    </div>
  );
}

export default App;

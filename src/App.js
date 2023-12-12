import logo from './logo.svg';
import React, { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
import './App.css';
import MapChart from './map';

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <div class="text-header">
        <h1>Life Source Missions</h1>
      </div>
      <div class="text-sub-header">
        <h1>Spreading the transformative power of Christ globally,<br></br>
          extending support to communities in need.<br></br>
          
        </h1>
      </div>
      <ReactTooltip id="my-tooltip" />
      <div class="center">
      <MapChart setTooltipContent={setContent} />
      </div>
    </div>
  );
}

export default App;

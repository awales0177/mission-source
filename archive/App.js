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
      <h1>Mission Source</h1>
      <ReactTooltip id="my-tooltip" />
      <MapChart setTooltipContent={setContent} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "/features.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const MapChart = ({setTooltipContent}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);
    const handleClick = geo => () => {
      console.log(geo);
    };
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                  //onClick={handleClick(geo.properties)}
                  style={{
                    default: {
                        outline: 'none'
                    },
                    hover: {
                        outline: 'none'
                    },
                    pressed: {
                        outline: 'none'
                    }
                }}
                />
              );
            })
          }
        </Geographies>
      )}
      <Marker coordinates={[-74.006, 40.7128]}
      >
      <g
            fill="none"
            stroke="#FF5533"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Life Source International"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            onClick={handleClick("log1")}
            
            
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        
      </Marker>
      <Marker coordinates={[-100, 20]}
      >
      <g
            fill="none"
            stroke="#FF5533"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Site 1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            onClick={handleClick("log2")}
            
            
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;

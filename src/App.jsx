import { useState } from "react";

import allData from "./data.json";

import "./App.css";
import avatar from "./assets/image-jeremy.png";

import workLogo from "./assets/icon-work.svg";
import playLogo from "./assets/icon-play.svg";
import studyLogo from "./assets/icon-study.svg";
import exerciseLogo from "./assets/icon-exercise.svg";
import socialLogo from "./assets/icon-social.svg";
import selfcareLogo from "./assets/icon-self-care.svg";

function App() {
  const [timeFrame, setTimeFrame] = useState();
  const [dataState, setData] = useState(allData);
  const data = [...dataState];

  const logos = [
    workLogo,
    playLogo,
    studyLogo,
    exerciseLogo,
    socialLogo,
    selfcareLogo,
  ];

  const cardColors = [
    "ff8b64",
    "56C2E6",
    "FF5E7D",
    "4BCF83",
    "7235D1",
    "F1C75B",
  ];

  function renderCurrent(timeFrame, objectId) {
    switch (timeFrame) {
      case "daily":
        return data[objectId].timeframes.daily.current;
      case "weekly":
        return data[objectId].timeframes.weekly.current;
      case "monthly":
        return data[objectId].timeframes.monthly.current;
      default:
        return data[objectId].timeframes.weekly.current;
    }
  }
  function renderPrevious(timeFrame, objectId) {
    switch (timeFrame) {
      case "daily":
        return data[objectId].timeframes.daily.previous;
      case "weekly":
        return data[objectId].timeframes.weekly.previous;
      case "monthly":
        return data[objectId].timeframes.monthly.previous;
      default:
        return data[objectId].timeframes.weekly.previous;
    }
  }

  return (
    <div className="App bg-[#0D1323]">
      <div className="min-h-screen lg:h-screen w-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:justify-center  my-24">
          <div className="flex flex-col w-64 bg-[#1D204B] rounded-xl mb-4 lg:mb-0">
            <div className="flex flex-row lg:flex-col justify-evenly bg-[#5746EA] p-4 lg:p-8 rounded-xl lg:h-80">
              <div className="lg:h-24">
                <img
                  className="h-12 lg:h-16 border-2 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div>
                <h5 className="text-gray-400 text-xs">Report for</h5>
                <h1 className="text-white text-xl lg:text-4xl font-light">
                  Jeremy Robson
                </h1>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col justify-evenly bg-[#1D204B] lg:h-40 p-5 px-7 text-[#545992] font-semibold rounded-xl">
              <button
                className="hover:text-white focus:text-white cursor-pointer"
                onClick={() => setTimeFrame("daily")}
              >
                Daily
              </button>

              <button
                className="hover:text-white focus:text-white  cursor-pointer"
                onClick={() => setTimeFrame("weekly")}
              >
                Weekly
              </button>

              <button
                className="hover:text-white focus:text-white  cursor-pointer"
                onClick={() => setTimeFrame("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>
          {/* CARDS */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  lg:ml-10 rounded-xl">
            {data.map((object, objectId) => (
              <div
                key={objectId}
                className={`flex flex-col w-64 justify-end bg-[#${cardColors[objectId]}] rounded-t-xl rounded-b-xl relative`}
              >
                <img
                  className="absolute top-0 right-5 z-0"
                  width="79"
                  height="79"
                  src={logos[objectId]}
                  alt=""
                />
                <div className="flex flex-col lg:h-48 bg-[#1D204B] hover:bg-[#6F76C8] text-white mt-8 py-5 px-7 rounded-xl z-10 cursor-pointer">
                  <div className="flex justify-between items-center basis-1/4 mb-5">
                    <h4 className="font-semibold">{object.title}</h4>
                    <svg
                      width="21"
                      height="5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        fill="#BBC0FF"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start">
                    <h1 className="text-xl lg:text-5xl lg:mb-3">
                      {renderCurrent(timeFrame, objectId)}hrs
                    </h1>
                    <p className="text-sm text-gray-300">
                      Last Week - {renderPrevious(timeFrame, objectId)}hrs
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import avatar from "./assets/image-jeremy.png";

function App() {
  return (
    <div className="App bg-[#0D1323]">
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col 2xl:flex-row justify-center items-center">
          <div className="flex flex-col w-64 bg-[#1D204B] rounded-xl mb-4">
            <div className="flex flex-row 2xl:flex-col justify-evenly bg-[#5746EA] p-4 2xl:p-8 rounded-xl 2xl:h-80">
              <div className="2xl:h-24">
                <img
                  className="h-12 2xl:h-16 border-2 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div>
                <h5 className="text-gray-400 text-xs">Report for</h5>
                <h1 className="text-white text-xl 2xl:text-4xl font-light">
                  Jeremy Robson
                </h1>
              </div>
            </div>
            <div className="flex flex-row 2xl:flex-col justify-evenly bg-[#1D204B] 2xl:h-40 p-5 px-7 text-[#545992] font-semibold rounded-xl">
              <p>
                <span className="hover:text-white">Daily</span>
              </p>
              <p>
                <span className="hover:text-white">Weekly</span>
              </p>
              <p>
                <span className="hover:text-white">Monthly</span>
              </p>
            </div>
          </div>
          {/* CARD */}
          <div className="grid grid-cols-1 2xl:grid-cols-3 2xl:grid-rows-2 2xl:ml-10 rounded-xl">
            <div className="flex flex-col w-64 justify-end bg-[#FF8B64] rounded-t-xl rounded-b-2xl relative">
              <svg
                className="absolute top-0 right-5 z-0"
                width="79"
                height="79"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
                  fill="#D96C47"
                  fill-rule="nonzero"
                />
              </svg>
              <div className="flex flex-col 2xl:h-48 bg-[#1D204B] text-white mt-8 py-5 px-7 rounded-xl z-10">
                <div className="flex justify-between items-center basis-1/4 mb-5">
                  <h4 className="font-semibold">Work</h4>
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="#BBC0FF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-row 2xl:flex-col justify-between 2xl:justify-start items-center 2xl:items-start">
                  <h1 className="text-2xl 2xl:text-5xl 2xl:mb-3">32hrs</h1>
                  <p className="text-sm text-gray-300">Last Week - 36hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from "./assets/logo.png";
import { useState, useEffect } from "react";
import { BreakingBadCharacterdetails } from "./utils/breakingbad";
import "./App.css";
function App() {
  const [data, setData] = useState(BreakingBadCharacterdetails);
  const [val, setVal] = useState("");
  const [isempty, setIsempty] = useState(false);
  useEffect(() => {
    const characterfilter = BreakingBadCharacterdetails.filter((q) =>
      q.name.includes(val)
    );
    if (characterfilter.length === 0) {
      setIsempty(true);
      setData([]);
    } else {
      setData(characterfilter);
      setIsempty(false);
    }
  }, [val]);
  return (
    <div className="bg-cover bg-no-repeat bg-[url(assets/bg.jpg)] bg-gray-900 min-h-screen ">
      <div className="container mx-auto py-20">
        <img src={logo} alt="" className="lg:w-[15rem] block mx-auto w-2/3" />
        <input
          type="search"
          value={val}
          onChange={(e) => setVal(e.target.value.trim())}
          className="bg-white px-4 shadow-lg border border-gray-200 lg:w-1/3 block mx-auto my-10 h-10 rounded-lg focus:outline-none w-[80%]"
          placeholder="Search Character..."
        />
        {isempty && (
          <h1 className="text-center text-xl text-white">
            No characters found
          </h1>
        )}
        <div className="grid place-items-center lg:grid-cols-4 gap-4 lg:px-20 px-4 grid-cols-2">
          {Array.from(
            data,
            ({ name, full_name, birth_date, occupation, image_url }, index) => {
              return (
                <div key={index} className="w-full group relative ">
                  <img
                    src={image_url}
                    alt=""
                    className="w-full h-full aspect-square object-fill"
                  />
                  <div className="flex flex-col justify-around items-baseline gap-1 p-1 absolute bg-slate-500/55 lg:text-xl text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity inset-0 overflow-auto pt-4">
                    <h1>
                      <span className="font-semibold">Name</span> : {name}
                    </h1>
                    <h1>
                      <span className="font-semibold">Full-name </span> :{" "}
                      {full_name}
                    </h1>
                    <h1>
                      <span className="font-semibold">Birthday </span> :
                      {birth_date}
                    </h1>
                    <h1>
                      <span className="font-semibold">Occupation</span> :{" "}
                      {occupation[0]}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
export default App;

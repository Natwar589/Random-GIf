import "./App.css";
import Random from "./Random";
import Tag from "./Tag";
function App() {
  return (
    <div className="background relative w-full h-full items-center flex flex-col">

      <h1 className="bg-white w-11/12 rounded-lg text-center px-10 py-2 font-bold text-4xl  mt-[20px] ">
        Random GIFS
      </h1>

      <div className="flex flex-col w-full items-center mb-[70px] gap-9">

        <Random />

        <Tag />

      </div>
    </div>
  );
}

export default App;

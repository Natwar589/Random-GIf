
import React, {useState } from "react";
import Spinner from "./Spinner";

import useGif from "./useGif";
const Tag = () => {
  const[tag, setTag] = useState("car")
  const{gif,loading,fetchData} =useGif(tag);
 
  return (
    <div className="w-[50%] flex flex-col gap-6 justify-center items-center bg-green-300 text-center rounded-lg mt-3 border-black">

      <h1 className="mt-4 underline text-3xl font-bold uppercase">
        A {tag} Random GIF
      </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="350px" alt="img" className="text-center"/>)
      }

      
       <input
        className="text-center  rounded-md w-[90%] p-2"
        onChange={(event)=>{setTag(event.target.value)}}
        value={tag}
       />

      <button onClick={()=>{fetchData(tag)}} 
      className="w-[90%] bg-yellow-50    mb-4 p-2 rounded-lg">
        Genrate Random GIF
      </button>
    </div>
  );
};

export default Tag;

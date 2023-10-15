
import Spinner from "./Spinner";
import useGif from "./useGif";

const Random = () => {
const{gif,loading,fetchData} =useGif();
  return (
    <div className="w-[50%] flex flex-col gap-6 justify-center items-center bg-green-300 text-center rounded-lg mt-3 border-black">

      <h1 className="mt-4 underline text-3xl font-bold uppercase">
        A Random GIF
      </h1>
      {
        loading ? (<Spinner/>) : (<img  alt="img" src={gif} width="350px" className="text-center"/>)
      }

      
       
      <button onClick={()=>{fetchData()}} 
      className="w-[90%] bg-yellow-50  mb-4  rounded-lg p-5">
        Genrate Random GIF
      </button>
    </div>
  );
};

export default Random;

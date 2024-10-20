import { useState } from "react";import { IoCheckmarkDoneSharp } from "react-icons/io5";

let count = 1;
const Country = ({country,visitedList,flagList}) => {
    const {flags,name,capital,region,population} = country;
    const [btnName, setbtnName]=useState("IsVisited");
    const [visit, setVisit] = useState(true);

    const visitbtnHandellar =()=>{
        setbtnName("Visited")
        setVisit(!visit);
    }

    return (
        <div className={`border-2 p-4 rounded-xl flex flex-col gap-2 ${visit? "bg-white":"bg-purple-300"}`}>
           <div className="">
             <img src={flags?.png} alt="" className="w-full object-cover h-[250px] rounded-lg" />
           </div>
           <h1 className="text-xl font-bold">Name: {name?.common}</h1>
           <p className="text-gray-500 text-wrap">{name.official}</p>
           <div className="">
             <span className="font-bold">Capital: </span>
             <span className="text-gray-500">{capital}</span>
           </div>
           <p><span className="font-bold">Region: </span><span className="text-gray-500">{region}</span></p>
           <p><span className="font-bold">Population: </span><span className="text-gray-500">{population}</span></p>
           <div className="flex justify-between items-center">
            <button onClick={visitbtnHandellar} className={`text-white rounded-md py-2 px-4 ${!visit ? "bg-red-500": "bg-blue-500"}`}>{btnName}</button>

            {visit?<button onClick={()=> visitedList({idx:count++,visit:{visit} , setVisit:(setVisit()), name: name?.common, flag:flags?.png})} 
            className={`text-white rounded-md py-2 px-4 bg-blue-500`}>Mark As Visited</button>
            :<p className="text-2xl text-blue-500"><IoCheckmarkDoneSharp /></p>}

           </div>
        </div>
    );
};

export default Country;
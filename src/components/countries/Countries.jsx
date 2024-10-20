import { useState } from "react";
import Country from "../country/Country";
import { useEffect } from "react";
import VisitList from "../country/VisitList";


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [name, setName] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
         const res = await fetch("https://restcountries.com/v3.1/all");
         const data = await res.json();
         setCountries(data);
        }
        fetchData();

    },[]);

    const visitedList =(name1)=>{ 
      const {setVisit, visit} = name1
     setName([...name, name1]);
     setVisit(false)
    }

    const repetHandeller =(itemRemoved)=>{
     
      const remArr = name.filter(item=> item !== itemRemoved)
      setName(remArr)
      
    }
    
  
    return (
        <div>
           <div className="">
             <h1 className="text-3xl md:text-5xl font-bold text-center my-8">All Rest Countries</h1>
             <p className="text-xl text-gray-500 mb-6">Total Countries: {countries.length}</p>
           </div>
           <div className="">
            <h2 className="text-xl text-gray-500 mb-6">Visited Country List:</h2>
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
               {name.map((item,idx)=> <VisitList key={idx} repetHandeller={repetHandeller} item={item}></VisitList>)}
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {countries.map((country,index)=> <Country visitedList={visitedList} key={index} country={country}/>)}
           </div>

        </div>
    );
};

export default Countries;
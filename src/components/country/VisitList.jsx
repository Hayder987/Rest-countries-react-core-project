import { ImCross } from "react-icons/im";

const VisitList = ({item, repetHandeller}) => {
   
    return (
        <div className="relative">
            <div className='p-2 border-2 flex justify-around bg-slate-300'>
              <p className="text-xl font-bold">{item.name}</p>
              <img src={item.flag} alt="" className="w-14 h-10" />
            </div>
            <div className="absolute top-2 right-2 ">
              <button onClick={()=>repetHandeller(item)} className=""><ImCross /></button>
            </div>
        </div>
    );
};

export default VisitList;
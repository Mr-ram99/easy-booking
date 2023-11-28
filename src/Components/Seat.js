import { useEffect, useState } from "react";
import useLocalStorage from "../CustomHooks/useLocalStorage"; 
const Seat = ({row, col, movieid, handleChecked}) => {
  const [booked, setBooked] = useLocalStorage(`booked${movieid}`, [])
  const [disabled, setDisabled] = useState(false);
  useEffect(()=>{
    if(booked.includes(`${row}${col}`)){
      setDisabled(true);
    }
  },[])
  return (
    <div className="seat flex">
      <input type="checkbox" id={`${row}${col}`} className="hidden" onClick={(e)=>handleChecked(e, row, col)} disabled={disabled}/>
      <label htmlFor={`${row}${col}`} className="w-8 text-sm text-center m-1 border-2 border-slate-700 cursor-pointer">{row}{col}</label>
    </div>
  )
}
export default Seat;
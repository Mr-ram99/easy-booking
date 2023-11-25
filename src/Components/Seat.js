const Seat = ({row, col}) => {
  return (
    <div className="seat flex">
      <input type="checkbox" id={`${row}${col}`} className="hidden" />
      <label htmlFor={`${row}${col}`} className="w-8 text-sm text-center m-1 border-2 border-slate-700">{row}{col}</label>
    </div>
  )
}
export default Seat;
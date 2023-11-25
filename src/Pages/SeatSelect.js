import { Link } from 'react-router-dom'
import Seat from '../Components/Seat'
const SeatSelect = () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="text-center m-5">
      <div className="flex flex-col items-center justify-center overflow-x-auto">
        {rows.map((row) => {
          return (
            <div key={row} className="flex">
              <Seat row={row} col="A" />
              <Seat row={row} col="B" />
              <Seat row={row} col="C" />
              <Seat row={row} col="D" />
              <Seat row={row} col="E" />
              <Seat row={row} col="F" />
              <Seat row={row} col="G" />
              <Seat row={row} col="H" />
              <Seat row={row} col="I" />
              <Seat row={row} col="J" />
            </div>
          )
        })}
      </div>
      <div className="w-1/2 mx-auto mt-10 mb-5 border-t-4 border-t-slate-400 text-slate-400 rounded-full">Screen</div>
      <Link to='/payment'
        className="inline-block text-white rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >Next &gt;&gt;</Link>
    </div>
  )
}

export default SeatSelect;
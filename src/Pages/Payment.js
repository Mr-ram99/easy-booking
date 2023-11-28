import useLocalStorage from "../CustomHooks/useLocalStorage";
import { useNavigate, useParams } from "react-router-dom";
const Payment = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useLocalStorage(`selected${params.id}`, [])
  const [booked, setBooked] = useLocalStorage(`booked${params.id}`, [])
  const handlePayment = async () => {
    await setBooked([...booked, ...selected]);
    navigate("/");
  }
  return (
    <div className="p-5 flex flex-col justify-center bg-white sm:w-1/2 md:w-1/4 w-full m-auto">
      <h3 className="font-bold">Booking Summary</h3>
      <div className="border-b-2 border-slate-400">
        <div className="py-3 flex justify-between items-center">
          <p>Tickets</p>
          <p>{selected.length * 350}</p>
        </div>
        <div className="py-3 flex justify-between items-center">
          <p>{selected.length} X Tickets &#64; &#8377;350 Each</p>
          <p>{selected.length * 350}</p>
        </div>
      </div>
      <div className="py-3 flex justify-between items-center">
        <p className="font-medium">Total</p>
        <p className="font-medium">{selected.length * 350}</p>
      </div>
      <button onClick={handlePayment} className="inline-block text-white rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Pay</button>
    </div>
  )
}
export default Payment;
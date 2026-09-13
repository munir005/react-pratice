import { useDispatch } from 'react-redux'
import { incrementByNum } from '../Server/featuresOfCounter/counterSlice'

function IncByNum({inputVal}) {

  const dispatch = useDispatch()

  return (
    <div>
        <button
        onClick={()=>{
          dispatch(incrementByNum(Number(inputVal)))
        }}
        className="px-3 py-2 rounded-2xl bg-emerald-900 cursor-pointer  font-semibold text-2xl active:scale-97 flex gap-2">Increase by </button>
    </div>
  )
}

export default IncByNum
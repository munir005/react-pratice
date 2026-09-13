import { useSelector } from "react-redux"

function CountShow() {

  const count = useSelector(state => state.counter.value)

  return (
    <div className=' py-7 px-9 bg-cyan-950 rounded-2xl text-4xl'>
        {count}
    </div>
  )
}

export default CountShow
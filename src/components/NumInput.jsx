
const NumInput = ({inputVal, setInputVal}) => {
  return (
    <div>
        <input 
        value={inputVal}
        onChange={(e)=>{
          setInputVal(e.target.value)
        }}
        className='outline-none border w-16 px-1  rounded ' 
        type="number"
        min={1}
        />
    </div>
  )
}

export default NumInput
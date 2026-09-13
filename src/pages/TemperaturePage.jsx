import TempShow from '../components/temperatureComoonents/TempShow'
import TempInput from '../components/temperatureComoonents/TempInput'

function TemperaturePage() {
  return (
    <div className='md:text-2xl mt-4 flex flex-col items-center justify-center gap-4'>
        <TempInput />
        <TempShow />
    </div>
  )
}

export default TemperaturePage
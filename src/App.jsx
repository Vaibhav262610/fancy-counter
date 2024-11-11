import { useState } from 'react'
import './App.css'

function App() {

  const [num , setNum] = useState(0)
  const [limit , setLimit] = useState(true)

  const increNum = () => {
    if(num == 5){
      setLimit(false)
    }else{
      setNum(num + 1)
    }
  }
  const decreNum = () => {
    if(num > 0){
      setNum(num - 1)
    }
  }
  
  const resetNum = () => {
    setLimit(true)
    setNum(0)
  }

  return (
    <>
      <div className='bg-gray-800 flex-col flex justify-center items-center w-full h-screen'> 
        <div className='bg-white w-[255px] py-4 rounded-tl-lg rounded-tr-lg flex flex-col items-center'>
          {limit ? <h1 className='text-xl text-center font-semibold'>FANCY <br/> COUNTER</h1> : <h1 className='text-xl text-center font-semibold'>LIMIT <br /> REACHED !!</h1>}
          <h1 className='text-9xl font-bold mt-3'>{num}</h1>
          <button onClick={resetNum} className='text-xs mt-2 text-gray-400 font-semibold'>RESET</button>
        </div>
          <div className='flex'>
            <button onClick={decreNum} className='text-3xl bg-lime-300 rounded-bl-lg w-full py-7 px-14'>-</button>
            <button onClick={increNum} className='text-3xl bg-lime-300 w-full rounded-br-lg py-7 px-14'>+</button>
          </div>
      </div>
    </>
  )
}

export default App

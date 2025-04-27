import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("beige")
  function ColorSelector({h, css, text = "black"}){
    return (
      <button className='outline-none px-4' style={{backgroundColor: css, color: text}} onClick={() => setColor(css)}>{h}</button>
    )

  }
  return (
    <div className='w-screen h-screen duration-200 flex flex-col justify-end items-center' style={{backgroundColor: color}}>
      <div className='fixed flex mb-10'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg border-1 bg-white rounded-3xl'>
          <ColorSelector h="Red" css= "red"/>
          <ColorSelector h="Green" css= "green"/>
          <ColorSelector h="Yellow" css= "yellow"/>
          <ColorSelector h="Pink" css= "pink"/>
          <ColorSelector h="Lavander" css= "lavender"/>
          <ColorSelector h="Blue" css= "blue" text='white'/>
          <ColorSelector h="Black" css= "black" text='white'/>
          <ColorSelector h="Brown" css= "brown"/>
          <ColorSelector h="Orange" css= "orange"/>
          <ColorSelector h="Grey" css= "grey"/>
          <ColorSelector h="White" css= "white" text='black'/>
        </div>
      </div>
    </div>
  )
}

export default App

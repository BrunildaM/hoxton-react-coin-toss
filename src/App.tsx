
import { useState } from 'react';
import './App.css'



function App() {
  const [side, setSide] = useState(1)
  const [tossed, setTossed] = useState(0)

  const tossCoin = () => {
    const landedOn = Math.round(Math.random())
   setSide(landedOn)
    setTossed(tossed + 1)
  }

 let eagle = <img src='https://i.colnect.net/f/5450/348/10-Qindarka-10-Qindar-Leku.jpg' alt='' width={150} />
 let lion = <img src='https://i.pinimg.com/236x/53/c0/96/53c09607cf6fa7c439a22cbd13d154f1--rare-coins-albania.jpg' alt='' width={150}/>


  return (
    <div>
      <button onClick={tossCoin}>Toss coin</button>
      <p>{side === 1 ? eagle : lion}</p>
      <p>The coin has been tossed {tossed} times.</p>
    </div>
  )
}

export default App

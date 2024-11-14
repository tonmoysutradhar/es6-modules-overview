import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect( ()=> {
    fetch('watches.json')
    .then (res=> res.json())
    .then(data => setWatches(data));
  })

//   const watches = [
//     {id: 1, name: 'Apple Watch', price: 200},
//     {id: 2, name: 'Samsung Watch', price: 300},
//     {id: 3, name: 'MI Watch', price: 400},
//     {id: 4, name: 'Huawei Watch', price: 250},
//     {id: 5, name: 'Garmin Watch', price: 350}
// ];

  return (
    <>
      <h1>Vite + React</h1>
      
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App

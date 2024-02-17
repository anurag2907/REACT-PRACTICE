import { useState } from 'react'
//yea ho uppar wala use state likha hua ha usi se hooks ata ha o
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(5)
   //let counter =15
   const addValue =() =>{
    if(counter<=20)
    {
      // console.log('clicked',counter)
      //counter= counter+1
      setCounter(counter+1)
    }
    
   }
   const removeValue = () =>{

    if(counter>=0)
    {
      // console.log('clicked',counter)
      // counter= counter-1
      setCounter(counter-1)
    }
    
   }

  return (
    
     <>
     <h1>Anurag or react! learning hooks</h1>
     <h1>counter value :{counter}</h1>
     <button onClick={addValue}> add value:{counter}</button>
     <br/>
     <button onClick={removeValue}> decrease value:{counter}</button> 
     <p>footer:{counter}</p>

     </>
  )
}
//uppar me jo code kaha se jay jab react import nahi kary ha to wo jay ga ballble se under  the hood jsx se
 
export default App

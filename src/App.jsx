import React, { useState } from 'react'
import './App.css'
import Playbar from '../src/components/playbar/Playbar'
import OnListen from './feature/apicall/OnListen'





function App() {
 
  return (
  
    <div>
      <OnListen/>
      <Playbar/>
    </div>
  )
}

export default App

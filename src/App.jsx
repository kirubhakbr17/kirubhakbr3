import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Car(){
  const car=['bmw','audi','skoda','tata','toyota']
   return( <><h2>vanakam da mapla  </h2>
   <ul>
   {car.map((car)=> <li>{car}</li>)} 
   </ul>
   
   
   </>
   )}
   export default Car
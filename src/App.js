import { useState } from 'react'

import nachos from './nachos.jpg'
import './App.sass';

export default function App() {
  const [openModal, setOpenModal] = useState(false)

  const popup = 
    <div className='banner'>
      <img 
        src={nachos} 
        alt='nachos' 
        id='banner-nachos'
      />
      <h1>Yes please!</h1>
    </div>
  
  return (
    <div className='container'>
      {
        openModal
          ? <>
              <div className='shadow' onClick={() => setOpenModal(false)}></div>
              { popup }
            </>
          : <img 
              src={nachos} 
              alt='nachos' 
              id='nachos' 
              onClick={() => setOpenModal(true)} 
            />
      }
    </div>
  )
}

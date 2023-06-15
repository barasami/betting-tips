import React, { useState } from 'react'
import './Home.css'

function Form({findTip}) {
    const[date,setDate]=useState(' ')

    const submitData=(e)=>{
        e.preventDefault()

        if(!date || date === ' ')
        return

        findTip(date)
        setDate(' ')
    }

  return (
    <div>
        <div>
            <form onSubmit={submitData}>
                <div className='input'>
                    <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} className='date'/>
                </div>
                <div className='btn'>
                    <button className='button'>Search</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
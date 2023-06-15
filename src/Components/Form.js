import React, { useState } from 'react'

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
                <div>
                    <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
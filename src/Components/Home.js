import React, { useEffect, useState } from 'react'
import { coolTips } from './tips'
import Form from './Form'

function Home() {
    const[tip,setTips]=useState([])
    const[mytip,setMytip]=useState('2023-5-20')
    useEffect(()=>{
        coolTips(mytip)
        .then(({data})=>{
            console.log(data);
            setTips(data)
        })
    },[mytip])

    const findTip=(tips)=>{
        setMytip(tips);
    }
  return (
    <div>
        <div>
            <Form findTip={findTip}/>
        </div>
    </div>
  )
}

export default Home
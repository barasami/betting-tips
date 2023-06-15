import React, { useEffect, useState } from 'react'
import { coolTips } from './tips'
import Form from './Form'
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css'


function Home() {
    const[tip,setTips]=useState([])
    const[load,setLoad]=useState(false)
    const[mytip,setMytip]=useState('2023-5-20')
    useEffect(()=>{
        setLoad(true)
        coolTips(mytip)
        .then(({data})=>{
            setTips(data)
            setLoad(false)
        })
    },[mytip])

    const findTip=(tips)=>{
        setMytip(tips);
    }

    let myTips=tip?.data
    console.log(myTips);

    let tipsResult=myTips?.map((datas)=>{
        const{home_team,away_team,id,prediction,result,competition_cluster,status}=datas
        return(
            <tr key={id}>
                <td className='data'>{competition_cluster}</td>
                <td className='data'>{home_team}</td>
                <td className='data'>V/s</td>
                <td className='data'>{away_team}</td>
                <td className='data'>{prediction}</td>
                <td className='data'>{result}</td>
                <td className='data'>{status}</td>
                
            </tr>
        )
    })
  return (
    <div className='results'>
       <div className='fresult'>
            <div className='finder'>
                <Form findTip={findTip}/>
            </div>
            <div>
                {load ? <CircularProgress color='inherit' className='circular'/> : 
                <div>
                    {tipsResult}
                </div>
                }
            </div>
       </div>
    </div>
  )
}

export default Home
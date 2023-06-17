import React, { useEffect, useState } from 'react'
import { coolTips } from './tips'
import Form from './Form'
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css'
// import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


function Home() {
    // let today=new Date()
    // let f=Intl.DateTimeFormat('en-us',{
    //     dateStyle:'short'
    // })
    // let predictionDate=f.format(today).toString()
    // console.log(predictionDate);
    
    const[tip,setTips]=useState([])
    const[load,setLoad]=useState(false)
    const[mytip,setMytip]=useState('2018-12-01')
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
                <td className='data_country'>{competition_cluster}</td>
                <td className='data_home'>{home_team}</td>
                <td className='data_vs'>V/s</td>
                <td className='data_away'>{away_team}</td>
                <td className='data_diction'>{prediction}</td>
                <td className='data_result'>{result}</td>
                <td className='data_status'>{status}</td>
                
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
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
        const{home_team,away_team,id,prediction,result,competition_cluster}=datas
        return(
            <div key={id}>
                <div>
                    <table>
                        <tr>
                            <td>{home_team}</td>
                            <td>{away_team}</td>
                            <td>{prediction}</td>
                            <td>{result}</td>
                            <td>{competition_cluster}</td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    })
  return (
    <div>
        <div>
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
  )
}

export default Home
import axios from "axios";

const Url='https://football-prediction-api.p.rapidapi.com/api/v2/predictions'


const options = {
  method: 'GET',
  params: {
    market: 'classic',
    iso_date: '2023-5-20'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
  }
};



export const coolTips=async()=>{

    try{
        const data=await axios.get(Url,options)
        return data
    }

    catch (err){
        console.log(err);
    }

}
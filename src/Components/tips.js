import axios from "axios";

const Url='https://football-prediction-api.p.rapidapi.com/api/v2/predictions'


export const coolTips=async(mytip)=>{

    try{
        const data=await axios.get(Url,{
            method: 'GET',
            params: {
              market: 'classic',
              iso_date: `${mytip}`
            },
            headers: {
              'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
              'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
            }
          })
        return data
    }

    catch (err){
        console.log(err);
    }

}
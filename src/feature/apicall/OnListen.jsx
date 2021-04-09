
import React from 'react'
import {useState,useEffect} from 'react'



export default function onListen(){

const [items, setItems] = useState([])
const [isLoaded, setIsLoaded] = useState(false);
const [myChoice, setMyChoice] = useState()
const [error, setError] = useState()


    useEffect(() => {
       
        fetch("https://bazify-backend.basile.vernouillet.dev/api/v1/songs")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
               
              setItems(result);
              setMyChoice(items)
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
            )
            console.log(items)
        }, [])


        let urlTest = items.map((item)=>{
         return  item.s3_link
        })
        console.log(urlTest)
       
        
return urlTest
    
}






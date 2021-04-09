
import React from 'react'
import {useState,useEffect} from 'react'
import './OnListen.css'


export default function OnListen(){
const [response, setResponse] = useState()
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
             console.log(result)
              setMyChoice(items[0])
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
            )
            
           

        }, [])

    return(
        <div className="middle">
         <img src={items} alt=""/>
        </div>
    )
}






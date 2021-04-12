import React from 'react'
import './controls.css'
import {useEffect,useState} from 'react'


export default function Controls(props){

    const [audio, setAudio] = useState(document.getElementById("audio"))
    const [currentTime, setCurrentTime ] = useState()
    const [date, setDate] = useState(new Date());
    const [sliderValue, setSliderValue] = useState("0");
    const [sliderPos, setSliderPos] = useState("0");



    useEffect(function(){
        
        let audioTime = document.getElementById("audio")
        setCurrentTime(document.querySelector('.currentTime'))
        let slider = document.getElementById("myRange");
       
        window.setInterval(() => {
            setAudio(document.getElementById("audio"));
            
        }, 1000);
        
        
        
    },[])
    
    function handleClick(){
        console.log(audio)
        audio.play()
        console.log(audio.currentTime)
    }

    

    return(
        <div className="controls">
       <img src="./src/img/backward.svg" alt=""/>
       <img onClick={handleClick} src = "./src/img/play.svg" alt=""/>
       <img src="./src/img/forward.svg" alt=""/>
       
        </div>
    )
}
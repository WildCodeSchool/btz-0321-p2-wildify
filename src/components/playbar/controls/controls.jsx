import React from 'react'
import './controls.css'
import {useEffect,useState} from 'react'


export default function Controls(props){
const {handlePause} = props
const {handlePlay} = props;
const {myClick} = props;

    return(
        <div className="controls">
       <img onClick={handlePlay} src="./src/img/backward.svg" alt=""/>
       <img onClick={handlePlay}  src = "./src/img/play.svg" alt=""/>
       <img onClick={handlePause}  src="./src/img/pause.png" alt=""/>
       <img src="./src/img/forward.svg" alt=""/>
        </div>
    )
}
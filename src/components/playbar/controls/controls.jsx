import React from 'react'
import './controls.css'
import {useEffect,useState} from 'react'


export default function Controls(props){
const {handlePause} = props
const {handlePlay} = props;
const {handleBackWard} = props;
const {handleForWard} = props;


    return(
        <div className="controls">
       <img onClick={handleBackWard} src="./src/img/backward.svg" alt=""/>
       <img onClick={handlePlay}  src = "./src/img/play.svg" alt=""/>
       <img onClick={handlePause}  src="./src/img/pause.png" alt=""/>
       <img onClick={handleForWard} src="./src/img/forward.svg" alt=""/>
        </div>
    )
}
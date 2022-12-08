import {React,useState} from 'react'
import './Top.css'
import data from '../asset/data'

import arrowLeft from '../asset/images/icon-angle-left.svg'
import arrowRight from '../asset/images/icon-angle-right.svg'
import iconArrow from '../asset/images/icon-arrow.svg'
export const Top = () => {
  const [index,setIndex] = useState(0)

  
  function nextIndex(){

    setIndex(prevIndex => {
      console.log("Nextindex")
      if(prevIndex >= data.length-1)
      return  0
      else
      return  index+1
    })
  }
  function prevIndex(){
    console.log("previndex")
    setIndex(prevIndex => {
      if(prevIndex === 0)
      return  data.length-1
      else
      return  index-1
  })}
  return (
    <div className="top">
      <img className="top-left" src={data[index].src} alt="hero" />
      <div className="top-right">
        <div className="top-right-top">
          <div className="top-right-title">{data[index].title}</div>
        <div className="top-right-description">
        {data[index].description}
        </div>
        <a className="top-right-btn" href="/">Shop now <img src={iconArrow} alt="arrow"/></a>
        </div>
        <div className="btn">
          <img className="btn-left" onClick={prevIndex} src={arrowLeft} alt="btn-left" />
          <img className="btn-right" onClick={nextIndex} src={arrowRight} alt="btn-right" />
        </div>
      </div>
    </div>
  )
}

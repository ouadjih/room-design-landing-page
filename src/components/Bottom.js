import React from 'react'
import './Bottom.css'
import bottomImgDark from '../asset/images/image-about-dark.jpg'
import bottomImgLight from '../asset/images/image-about-light.jpg'
export const Bottom = () => {
  return (
    <div className="bottom">
      <img src={bottomImgDark} alt="darkimg" className="bottom-one"/>
      <div className="bottom-two">
        <div className="bottom-two-title">About our furniture</div>
        <div className="bottom-two-description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </div>
      </div>
      <img src={bottomImgLight} alt="lightimg" className="bottom-three"/>
    </div>
  )
}

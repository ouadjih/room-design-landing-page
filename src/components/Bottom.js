import React from 'react'
import './Bottom.css'
import bottomImgDark from '../asset/images/image-about-dark.jpg'
import bottomImgLight from '../asset/images/image-about-light.jpg'
export const Bottom = () => {
  return (
    <div class="bottom">
      <img src={bottomImgDark} alt="darkimg" class="bottom-one"/>
      <div class="bottom-two">
        <div class="bottom-two-title">About our furniture</div>
        <div class="bottom-two-description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </div>
      </div>
      <img src={bottomImgLight} alt="lightimg" class="bottom-three"/>
    </div>
  )
}

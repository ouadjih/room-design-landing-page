import React from 'react'
import './Top.css'
import firstImg from '../asset/images/desktop-image-hero-1.jpg'
import arrowLeft from '../asset/images/icon-angle-left.svg'
import arrowRight from '../asset/images/icon-angle-right.svg'
import iconArrow from '../asset/images/icon-arrow.svg'
export const Top = () => {
  return (
    <div className="top">
      <img className="top-left" src={firstImg} alt="hero" />
      <div className="top-right">
        <div className="top-right-top">
          <div className="top-right-title">Discover innovative ways to decorate</div>
        <div className="top-right-description">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </div>
        <a className="top-right-btn" href="/">Shop now <img src={iconArrow} alt="arrow"/></a>
        </div>
        <div className="btn">
          <img className="btn-left" src={arrowLeft} alt="btn-left" />
          <img className="btn-right" src={arrowRight} alt="btn-right" />
        </div>
      </div>
    </div>
  )
}

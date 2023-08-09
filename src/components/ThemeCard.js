import React from 'react'

const ThemeCard = (props) => {
  const { image, title, description } = props;
  return (
    <>
      <div className="theme-card">
        <div className="theme-img">
          <img src={image} alt="" />
        </div>
        <div className="theme-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ThemeCard

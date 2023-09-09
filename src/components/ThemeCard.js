import React from 'react'
import { Link } from 'react-router-dom';

const ThemeCard = (props) => {
  const { image, title, description, readMore, readMoreUrl } = props;
  return (
    <>
      <div className="theme-card">
        <div className="theme-img">
          <img src={image} alt="" />
        </div>
        <div className="theme-content">
          <h2>{title}</h2>
          <p>
            <span>{description}</span>
            <Link to={readMoreUrl} className='read-more-btn'>{readMore}</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default ThemeCard

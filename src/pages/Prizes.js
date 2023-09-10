import React from 'react'
import PrizeBySponsors from '../components/SponsorPrize'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../components/Loader'
import ThemePrize from '../components/ThemePrize'

const Prizes = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='container'>
            <Link to="/" className='go-back-btn' style={{ position: "fixed" }}>Go Back</Link >
            <div className="prize-page">
              <div className='prize-1'>
                <h1 className="common-title">Theme Prize</h1>
                <ThemePrize />
              </div>
              <div className='prize-2'>
                <h1 className="common-title">Sponsor Prize</h1>
                <PrizeBySponsors />
              </div>
            </div>
          </div >
        </>
      )
      }
    </>
  )
}

export default Prizes

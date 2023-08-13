import React from 'react'

const spnsrs = () => {
  return (
    <>
      <section className="section" id="sponsors">
        <div className="sponsors-section">
          <h1 className='common-title'>Sponsors</h1>
          <div className="sponsor-boxes">
            <div className="box">
              <h2 className='spnsr-title-1'>Platinum Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <img src="../Devfolio.png" alt="" />
                </div>
                <div className="spnsr-img">
                  <img src="../Polygon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <h2 className='spnsr-title-2'>Gold Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <img src="../Filecoin.png" alt="" />
                </div>
                <div className="spnsr-img">
                  <img src="../Replit.png" alt="" />
                </div>
                <div className="spnsr-img">
                  <img src="../Solana.png" alt="" />
                </div>
              </div>
            </div>
            {/* <div className="box">
              <h2 className='spnsr-title'>Silver Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <img src="../Verbwire.png" alt="" />
                </div>
              </div>
            </div>
             <div className="box">
              <h2 className='spnsr-title'>In-Kind Sponsors</h2>
              <div className="spnsr-img"></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default spnsrs


import React from 'react'

const spnsrs = () => {
  return (
    <>
      <section className="section" id="sponsors">
        <div className="sponsors-section">
          <h1 className='common-title'>Sponsors</h1>
          <div className="sponsor-boxes">
            <div className="box">
              <h2 className='spnsr-title-1 spnsr-title'>Platinum Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <a href='https://devfolio.co/'>
                    <img src="../Devfolio_Logo-Colored.png" alt="DEVFOLIO LOGO" />
                  </a>
                </div>
                <div className="spnsr-img">
                  <a href="https://polygon.technology/">
                    <img src="../Polygon_Logo-Colored.png" alt="POLYGON LOGO" />
                  </a>
                </div>
              </div>
            </div>
            <div className="box">
              <h2 className='spnsr-title-2 spnsr-title'>Gold Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <a href='https://filecoin.io/'>
                    <img src="../Filecoin Coloured White Text.png" alt="FILECOIN LOGO" />
                  </a>
                </div>
                <div className="spnsr-img">
                  <a href='https://replit.com/'>
                    <img src="../Replit-light-background.png" alt="REPLIT LOGO" />
                  </a>
                </div>
                <div className="spnsr-img">
                  <a href='https://solana.com/'>
                    <img src="../Solana-Colored.png" alt="SOLANA LOGO" />
                  </a>
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
            </div> */}
            <div className="box">
              <h2 className='spnsr-title-3 spnsr-title'>In-Kind Sponsors</h2>
              <div className='spnsr-grid'>
                <div className="spnsr-img">
                  <a href='https://www.wolfram.com/'>
                    <img src="../wolfram-med.png" alt="Wolffram"/>
                  </a>
                </div>
                <div className="spnsr-img">
                  <a href='https://balsamiq.com/'>
                    <img src="../balsamiq.png" alt="Balsamiq"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default spnsrs


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
              <h2 className='spnsr-title-2'>Gold Sponsors</h2>
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


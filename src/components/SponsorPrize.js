import React from 'react'

const PrizeCards = () => {
  const prizes = [
    {
      id: 1,
      prizeBy: "../Polygon_Logo-Colored.png",
      list: ["$100 for the best hack built on Ethereum, OR",
        "$200 for the best hack built on Ethereum + Pologon",
        "Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!"
      ]
    },
    {
      id: 2,
      prizeBy: "../Solana-Colored.png",
      list: ["$USDC 100 for the best project beginners just starting on Solana and/or",
        "$USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or",
        "$USDC 500 for the best advanced project that is almost ready for full-time development"
      ]
    },
    {
      id: 3,
      prizeBy: "../Filecoin Coloured White Text.png",
      list: ["$250 for use of IPFC and/or Filecoin",
        "Microgrants up to 5,000 USD, open grants of up to 50,000 USD"
      ]
    },
    {
      id: 4,
      prizeBy: "../Replit-light-background.png",
      list: ["$50 to winning project of hackathon (must be deployed on Replit)",
        "Replit schwags to 5 eligible submissions deployed on Replit",
        "Eligibility to apply for internship/full-time roles at Replit"
      ]
    },
    {
      id: 5,
      prizeBy: "../balsamiq.png",
      list: ["90-day extended trial promo code for Balsamiq Cloud."
      ]
    },

  ]
  return (
    <>
        <div className='prize-boxes'>
          {prizes.map((item) => {
            return (
              <div className='prize-page-cards'>
                <img src={item.prizeBy} alt='' />
                <ul>
                  {item.list.map((listItem) => {
                    return <li>{listItem}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default PrizeCards

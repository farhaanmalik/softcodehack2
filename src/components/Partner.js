import React from 'react'

const Partner = () => {
  const partner = [
    {
      name: "CodeClub - IIT Jammu",
      image: "../codeclub-iitjmu.jpg"
    },
    {
      name: "GDSC",
      image: "../gdsc-jicse.png"
    },
    {
      name: "Tech Surfers",
      image: "../techsurfers.jpg"
    },
    {
      name: "Hack Unicorn Club",
      image: "../HackUnicornClub.png"
    },
    {
      name: "OpenDev Community",
      image: "../opendevcommunity.png"
    },
    {
      name: "Campus Techies",
      image: "../CampusTechies.png"
    },
    {
      name: "SOS Tech",
      image: "../sos.png"
    },
    {
      name: "Zura Verse",
      image: "../Zura.png"
    },
    {
      name: "Geek Room",
      image: "../GeekRoom.jpg"
    },
    {
      name: "NoobCode",
      image: "../NoobCode.png"
    },
    {
      name: "DevDotCom",
      image: "../DDC_Logo.png"
    },
    {
      name: "Resourcio Community",
      image: "../resourcio.png"
    },
  ]
  return (
    <>
      <section className="section" id='partners'>
        <div className="partner-section">
          <h1 className='common-title'>Community Partners</h1>
          <div className="ptnr-boxes">
            {partner.map((item) => {
              return (
                <div className="ptnr-box" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner

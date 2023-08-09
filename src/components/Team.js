import React from 'react'

const Team = () => {
  const teams = [
    {
      id: 1,
      image: "../team.jpg",
      name: "Farhaan Malik",
    },
    {
      id: 2,
      image: "../team.jpg",
      name: "Farhaan Malik",
    },
    {
      id: 3,
      image: "../team.jpg",
      name: "Farhaan Malik",
    }
  ]
  return (
    <>
      <section id='mentors' className='section'>
        <div className="team-section">
          <h1 className="common-title">Mentors</h1>
          <div className="team">
            {teams.map((item) => {
              return (
                <div className="team-box" key={item.id}>
                  <div className="team-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="team-content">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

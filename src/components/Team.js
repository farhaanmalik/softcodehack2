import React from 'react';

const Team = () => {
   const mentors = [
    {
      id: 1,
      image: "../team.jpg",
      name: "Name 1",
      role: "Designation",
      companyName:"Company Name"
    },
    {
      id: 2,
      image: "../mentor-2.png",
      name: "Taranjot Singh",
      role: "Mentor and Judge",
      companyName:"Placewit"
    },
    {
      id: 3,
      image: "../team.jpg",
      name: "Name 3",
      role: "Designation",
      companyName:"Company Name"
    }
  ]
  return (
    <>
      <section id='mentors' className='section'>
        <div className="team-section">
          <h1 className="common-title">Mentors</h1>
          <div className="team">
            {mentors.map((item) => {
              return (
                <div className="team-box" key={item.id}>
                  <div className="team-img">
                    <img src={item.image} alt={`${item.name}-Profile`} />
                  </div>
                  <div className="team-content">
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                    <p><b>{item.companyName}</b></p>
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

export default Team;

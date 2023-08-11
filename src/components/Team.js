import React from 'react';

const Mentor = ({ image, name }) => (
  <div className="team-box">
    <div className="team-img">
      <img src={image} alt={`${name}'s profile`} />
    </div>
    <div className="team-content">
      <h3>{name}</h3>
    </div>
  </div>
);

const Team = () => {
  const mentors = [
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
  ];

  return (
    <section id='mentors' className='section'>
      <div className="team-section">
        <h1 className="common-title">Mentors</h1>
        <div className="team">
          {mentors.map((mentor) => (
            <Mentor key={mentor.id} image={mentor.image} name={mentor.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

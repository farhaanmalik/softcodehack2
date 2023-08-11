import React from 'react'
import ThemeCard from './ThemeCard'

const Themes = () => {
  const cards = [
    {
      id: 1,
      image: "../theme-1.jpg",
      title: "Automation and AI in Homes",
      description: "Develop innovative solutions that incorporate automation and artificial intelligence to make our daily home life more efficient, convenient, and enjoyable."
    },
    {
      id: 2,
      image: "../theme-2.jpeg",
      title: "Agri-Tech",
      description: "Use technology to help farmers increase their productivity and efficiency. This could include automated crop monitoring, precision agriculture technologies, or AI-driven pest control systems."
    },
    {
      id: 3,
      image: "../theme-3.jpg",
      title: "Academic Life Tools",
      description: "Focus on developing tools and software to help students and educators navigate academic life more effectively. This could include study aids, educational apps, or tools to help manage coursework and schedules."
    },
    {
      id: 4,
      image: "../theme-4.png",
      title: "Health, Fitness & Sports",
      description: "Develop services to promote healthy living, fitness, and sports performance. This could include wearable fitness trackers, AI-driven personal trainers, or nutrition tracking apps."
    },
    {
      id: 5,
      image: "../theme-5.jpeg",
      title: "Blockchain & Cybersecurity",
      description: "Explore the intersection of blockchain technology and cybersecurity, with the aim of creating solutions that address security challenges related to data privacy & authentication."
    },
    {
      id: 6,
      image: "../theme-6.jpeg",
      title: "Artistic Visualization",
      description: "Explore the possibilities of using technology to create stunning visual experiences that showcase creativity, imagination, and artistic expression."
    },
    {
      id: 7,
      image: "../theme-7.jpeg",
      title: "Smart Automation",
      description: "Create innovative solutions that automate tasks, optimize systems and processes, and increase productivity across a variety of industries."
    },
    {
      id: 8,
      image: "../theme-8.png",
      title: "Open Innovation",
      description: "Collaborate with others to develop innovative solutions that promote openness, transparency, and inclusivity in society. It involves sharing knowledge & resources to create a community-driven approach to innovation."
    }
  ]
  return (
    <>
      <section className="section" id='themes'>
        <div className="theme-section">
          <h1 className='common-title'>Themes To Hack</h1>
          <div className="themes">
            {cards.map((item) => {
              return <div key={item.id}>
                <ThemeCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Themes

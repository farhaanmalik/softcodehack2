import React from 'react'
import ThemeCard from './ThemeCard'

const Themes = () => {
  const cards = [
    {
      id: 1,
      image: "../theme-1.png",
      title: "Build Community App/Website",
      description: "Develop a platform that promotes social interaction, facilitates communication and builds a vibrant community. Key features must be user profiles, discussion forums, private messaging, events and meetups, gamification features, user moderation and safety and integration with social media.",
      details: ""
    },
    {
      id: 2,
      image: "../theme-2.jpg",
      title: "AI Apps for Developer Experience",
      description: "Enable more efficient and seamless developer workflows by automating repetitive work and forecasting next actions.",
      details: " Read More...",
      detailUrl: "/themes/ai-apps-for-developer-experience"
    },
    {
      id: 3,
      image: "../theme-3.jpg",
      title: "Career Opportunities App/Website",
      description: "Develop user-friendly and efficient app/website that simplifies the job search process and provides a comprehensive platform to explore a variety of career opportunities. Key features must be personalized job recommendations, advanced search filters, application tracker, company insights and reviews and career guidance resources.",
      details: ""
    },
    {
      id: 4,
      image: "../theme-4.jpeg",
      title: "Blockchain & Cybersecurity",
      description: "Explore the intersection of blockchain technology and cybersecurity, with the aim of creating solutions that address security challenges related to data privacy & authentication.",
      details: ""
    },
    {
      id: 5,
      image: "../theme-5.jpg",
      title: "AI Apps for Data-Driven Insights",
      description: "Utilize data to make predictive recommendations that unearth useful and unexpected insights.",
      details: " Read More...",
      detailUrl: "/themes/ai-apps-for-data-driven-insights"
    },
    {
      id: 6,
      image: "../theme-6.png",
      title: "Open Innovation",
      description: "Collaborate with others to develop innovative solutions that promote openness, transparency, and inclusivity in society. It involves sharing knowledge & resources to create a community-driven approach to innovation.",
      details: ""
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
                  readMoreUrl={item.detailUrl}
                  readMore={item.details !== null ?  item.details : ""}
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

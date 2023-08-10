import React from 'react';

const TimelineEvent = ({ dates, title, description }) => (
    <div className="timeline">
        <div className="timeline-content">
            <div className="timeline-dates">{dates}</div>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    </div>
);

const HackathonTimeline = () => (
    <div className="container">
        <h1>Timeline</h1>
        <div className="row pt-5">
            <div className="col-md-12">
                <div className="main-timeline">
                    <TimelineEvent
                        dates=""
                        title="Registration starts"
                        description="You can register by clicking on Apply with Devfolio button above."
                    />
                    <TimelineEvent
                        dates=""
                        title="Orientation session at 10:00 AM"
                        description="Join our discord server for getting session link."
                    />
                    <TimelineEvent
                        dates=""
                        title="Mentor session at 04:00 PM"
                        description="Get Insight on How to win the Hackathon?"
                    />
                    <TimelineEvent
                        dates=""
                        title="Registration end"
                        description="Last date of event registration"
                    />
                    <TimelineEvent
                        dates=""
                        title="Hackathon starts"
                        description="You can start building your project"
                    />
                    <TimelineEvent
                        dates=""
                        title="Mini-event: 1"
                        description="Get familiar with Machine Learning"
                    />
                    <TimelineEvent
                        dates=""
                        title="Mini-event: 2"
                        description="Get familiar with App Development"
                    />
                    <TimelineEvent
                        dates=""
                        title="Mini-event: 3"
                        description="Get familiar with Cyber Security"
                    />
                    <TimelineEvent
                        dates=""
                        title="Hackathon ends"
                        description="Last day of Hackathon"
                    />
                    <TimelineEvent
                        dates=""
                        title="Result announcement"
                        description="You can check winners"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default HackathonTimeline;

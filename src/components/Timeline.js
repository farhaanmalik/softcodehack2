import React from "react";



const Timeline = () => {

    return (
        <>
            <section className="section" id="timelines">
                <div className="timeline-section">
                    <h1 className="common-title">Event Timelines</h1>
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="timeline-content">
                                <div class="timeline-year" style={{ right: "-35px" }}>16 Aug 2023</div>
                                <h3 className="title">Registration starts</h3>
                                <p className="description">
                                    You can register by clicking on Apply with Devfolio button above.
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year"></div>
                                <h3 class="title">Orientation session at 10:00 AM</h3>
                                <p class="description">
                                    Join our discord server for getting session link.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year" style={{ right: "-25px" }}>
                                </div>
                                <h3 class="title">Mentor session at 04:00 PM</h3>
                                <p class="description">
                                    Get Insight on How to win the Hackathon?
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year">4 Oct 2023</div>
                                <h3 class="title">Registration end</h3>
                                <p class="description">
                                    Last date of event registration
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year">6 Oct 2023</div>
                                <h3 class="title">Hackathon starts</h3>
                                <p class="description">
                                    You can start building your project
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year"></div>
                                <h3 class="title">Mini-event: 1</h3>
                                <p class="description">
                                    Get familiar with Machine Learning
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year" style={{ right: "-42px" }}>
                                </div>
                                <h3 class="title">Mini-event: 2</h3>
                                <p class="description">
                                    Get familiar with App Development
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year" style={{ left: "-42px" }}>
                                </div>
                                <h3 class="title">Mini-event: 3</h3>
                                <p class="description">
                                    Get familiar with Cyber Security
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year" style={{ right: "-25px" }}>
                                    8 Oct 2023</div>
                                <h3 class="title">Hackathon ends</h3>
                                <p class="description">
                                    Last day of Hackathon
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="timeline-year" style={{ left: "-42px" }}>
                                </div>
                                <h3 class="title">Result announcement</h3>
                                <p class="description">
                                    You can check for winners
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
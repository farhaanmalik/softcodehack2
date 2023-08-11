import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is a hackathon?",
      content: `A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program..`,
    },
    {
      title: "What is in for me?",
      content:
        "Learning new skills, look good on your resume, networking, winning swags & cash prizes, working as a team, meet great people and having fun!.",
    },
    {
      title: "Is there any registration fee?",
      content: `No, It’s absolutely free of cost.`,
    },
    {
      title: "Is it online or offline?",
      content: `The Hackathon is online (14th - 16th July 2023).`,
    },
    {
      title: "How will the event be judged?",
      content: `The projects will be judged based on a variety of criteria, including originality, feasibility, market potential, and presentation.`,
    },
    {
      title: "Any other questions?",
      content: `If there is something that is still not clear or we didn’t cover please contact us at phicsit.community@gmail.com`,
    },
  ],
  styles: {
    bgColor: "0b1936d4",
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentTextSize: "20px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
  },
};
export default function FaqC() {
  const styles = {
    bgColor: "0b1936d4",
    titleTextColor: "white",
    rowTitleColor: "#E3E5E7",
    rowContentColor: '#B0B9BE',
    arrowColor: "white",
    rowContentPaddingBottom: "20px",
    rowContentPadding: "20px",
  };
  return (
    <section className="section" id="faq">
      <div className="faq-section">
        <h1 className="common-title">FAQ's</h1>
        <div className="faq-container">
          <Faq data={data} styles={styles} animate tabFocus collapseIcon className="faq-ques"/>
        </div>
      </div>
    </section>
  );
}

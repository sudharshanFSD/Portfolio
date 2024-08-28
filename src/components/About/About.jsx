import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import { Fade, Slide } from "react-awesome-reveal";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Slide direction="right">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </Slide>
          <div className="AboutBio">
            <Slide direction="right">
              Hello! My name is Muthukumar S, a passionate MERN Stack developer
              with hands-on experience in building full-stack web applications.
              I am skilled in front-end development using React, back-end
              development with Node.js and Express, and efficient database
              management with MongoDB. My strong foundation in JavaScript
              enables me to create dynamic and responsive web solutions.
            </Slide>

            <br />
            <br />

            <Slide direction="right">
              My previous experience includes working as an Automation Tester at
              Tech Mahindra, where I was involved in high-impact projects for
              major banking clients like Mizrahi Tefahot Bank in Israel and Itaú
              Unibanco in Brazil. During my tenure, I focused on ensuring the
              quality and reliability of T24 banking software by creating and
              maintaining automated test scripts, executing test cases, and
              reporting defects using tools like JIRA and MAGiX.
            </Slide>

            <br />
            <br />
            <Slide direction="right">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development.
            </Slide>
            <Slide direction="right">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </Slide>

            <Technologies>
              {stackList.map((stack, index) => (
                <Slide direction="right" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </Slide>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

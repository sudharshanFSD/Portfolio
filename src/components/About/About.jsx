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
            Hello! My name is Sudharshan, a fresher MERN Stack developer with a strong interest in building full-stack web applications. 
            I have foundational knowledge in front-end development using React, back-end development with Node.js and Express, and basic experience with MongoDB for database management. 
            My passion for JavaScript allows me to develop dynamic and responsive web solutions as I continue to grow and refine my skills in full-stack development.
            </Slide>

    
            
            <br />
            <Slide direction="right">
            I recently graduated in 2024 from Hindusthan College of Arts and Science with a degree in Computer Applications. During my college years, 
            I had the honor of serving as the President of my department, where I led various initiatives and gained leadership experience. I also presented at two international
             conferences and one national-level conference, which helped sharpen my communication skills. Additionally, I served on the Management Operating Committee (MoC) for two years .
             I completed a Full Stack Developer course at GUVI, affiliated with IIT-Madras, where I gained hands-on experience in building full-stack web applications.


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

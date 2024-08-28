import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import { Fade } from "react-awesome-reveal"; // Import Fade from react-awesome-reveal

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Fade key={index} direction="left"> {/* Use Fade for the animation */}
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} className="project-img"/>
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </Fade>
      ))}
    </>
  );
}

export default ProjectCard;

import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import { Fade, Flip } from "react-awesome-reveal"; // Import from react-awesome-reveal

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <Fade triggerOnce>
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Sudharshan.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Full-Stack Developer.',
                    1000,
                    () => setShowScrollDown(true),
                    // 1000,
                    // 'Full-Stack Developer.',
                    // 1000,
                    // 'Full-Stack Developer.',
                    // 1000,
                    // 'Full-Stack Developer.',
                    // 1000,
                    // 'Full-Stack Developer.',
                    // 1000,
                    // 'Full-Stack Developer.',
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 300,
                    
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 1000,
                    // "Full-Stack Developer.",
                    // 500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </Fade>
          </HeroLeft>
          <HeroRight>
            <Fade triggerOnce>
              <Image
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </Fade>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && 
          <Flip triggerOnce>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </Flip>}
      </HeroContainer>
    </main>
  );
}

export default Hero;

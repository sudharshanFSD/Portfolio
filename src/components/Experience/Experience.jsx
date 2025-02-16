import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

function Experience() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "Tech Jose, Kovilpatti, Tamilnadu: MERN Stack Developer Intern"
    );
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ExperienceWrapper id="internship">
      <Fade delay={300}>
        <StyledCard>
          <Details>
            <div className="title-row">
              <span><strong>Tech Jose, Kovilpatti, Tamilnadu</strong></span>

              <Tooltip
                PopperProps={{ disablePortal: true }}
                open={showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                TransitionComponent={Zoom}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="bottom"
              >
                <IconButton onClick={copyToClipboard}>
                  <MdContentCopy
                    size={20}
                    style={{ cursor: "pointer", color: "#fff" }}
                  />
                </IconButton>
              </Tooltip>
            
            </div>
            <br/>
            <p><strong>Role:</strong> MERN Stack Developer Intern (Dec 2024 – Feb 2025)</p>
            <br/>
            <p><strong>Key Contributions:</strong></p>
            <ul>
                <br/>
              <li>Contributed to frontend development, optimizing user experience and application functionality.</li>
              <li>Implemented data export and integration features, improving workflow efficiency and system performance.</li>
              <li>Used modern libraries like <strong>TanStack</strong> and state management tools like <strong>Redux</strong> for better performance and maintainability.</li>
              <li>Assisted in backend API development, ensuring smooth integration between frontend and server-side functionality.</li>
              <li>Contributed to <strong>user-based schema development</strong> for enhanced database management.</li>
            </ul>
          </Details>
        </StyledCard>
      </Fade>
    </ExperienceWrapper>
  );
}

export default Experience;

// Styled Components
const ExperienceWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const StyledCard = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 40px;
  border-radius: 20px;
  background: #111;
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Details = styled.div`
  text-align: left;

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }

  li {
    margin-bottom: 10px;
  }
`;

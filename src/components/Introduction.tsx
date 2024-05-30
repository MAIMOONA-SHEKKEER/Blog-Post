import React from "react";
import { Headline, StyledPara } from "@/styled-components/Typography";
import {
  CenteredContainer,
  ContainerDiv,
  StyledDiv,
} from "@/styled-components/Box";
import { Button } from "@/styled-components/Button";
import Image from "next/image";

const Introduction = () => {
  return (
    <CenteredContainer>
      <ContainerDiv>
        <div style={{ maxWidth: 800 }}>
          <Headline>Hi, I am John, Creative Technologist</Headline>
          <StyledPara>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </StyledPara>
          <Button>Download Resume</Button>
        </div>
        <Image src="/profile.svg" alt="links" width={243} height={243} />
      </ContainerDiv>
    </CenteredContainer>
  );
};

export default Introduction;

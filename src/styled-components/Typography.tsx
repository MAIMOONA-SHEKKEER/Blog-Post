import styled from "styled-components";

export const Headline = styled.span`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }

  &:hover {
    color: darkblue;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const DateSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GreyOutSpan = styled.span`
  color: grey;
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StyledPara = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StyledLink = styled.a`
  font-weight: 500;
  font-size: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }
`;

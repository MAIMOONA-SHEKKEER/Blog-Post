import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff7c7c;
  color: white;
  border: none;
  width: 200px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    padding: 8px;
  }
`;

export const PrimaryYearButton = styled.button`
  background-color: #142850;
  color: white;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px 5px 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SecondaryYearButton = styled.button`
  background-color: #ff7c7c;
  color: white;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px 5px 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

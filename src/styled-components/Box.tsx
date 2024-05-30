import styled from "styled-components";

export const StyledDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &:hover {
    background-color: lightgray;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 20px;

  @media (min-width: 768px) {
    margin-left: 200px;
    max-width: 1000px;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

export const HomeBlogDiv = styled.div`
    background-color: #EDF7FA;
      // div{
        div{
 
   width:400px;
    }}
  // }
`;

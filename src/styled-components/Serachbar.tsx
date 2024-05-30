import styled from "styled-components";

export const SearchBar = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;
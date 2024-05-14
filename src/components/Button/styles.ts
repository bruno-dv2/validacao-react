import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #7b68ee;
  color: #ffffff;

  border: 1px solid #7b68ee;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  :disabled {
    background-color: #7b68ee40;
    border: 1px solid #7b68ee40;
    cursor: not-allowed;
  }
`;

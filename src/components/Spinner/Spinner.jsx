import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span`
  width: 6rem;
  height: 6rem;
  border: 5px solid ${({ theme }) => theme.colors.input};
  border-bottom-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;

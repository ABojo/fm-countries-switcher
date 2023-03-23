import { ReactComponent as BackArrow } from "../../assets/back-arrow.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 2rem;
  font-weight: ${({ theme }) => theme.weights.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.br.buttons};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.2s;

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.elements};
  }
`;

function BackButton() {
  const navigate = useNavigate();

  function navigateBack() {
    const hasHistory = window.history.state.idx;

    if (hasHistory) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <Button onClick={navigateBack}>
      <BackArrow />
      Back
    </Button>
  );
}

export default BackButton;

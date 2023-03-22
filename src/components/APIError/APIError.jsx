import styled from "styled-components";
import Message from "../Message/Message";
import { CountriesContext } from "../../contexts/Countries";
import { useContext } from "react";

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: ${({ theme }) => theme.weights.lg};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.br.buttons};
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 auto;
  margin-top: 3rem;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.elements};
  }
`;

function APIError() {
  const { loadCountries } = useContext(CountriesContext);

  return (
    <>
      <Message>
        Sorry, the API that returns the country data isn't working :(
      </Message>
      <Button onClick={loadCountries}>Try Again</Button>
    </>
  );
}

export default APIError;

import { Container, Number, Arrow } from "./Pagination.styles";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

function Pagination({ pageNumber, setPageNumber, numberOfPages }) {
  function incrementPage() {
    setPageNumber((currentPageNumber) => currentPageNumber + 1);
  }

  function decrementPage() {
    setPageNumber((currentPageNumber) => currentPageNumber - 1);
  }

  return (
    <Container>
      {pageNumber > 1 && (
        <Arrow onClick={decrementPage}>
          <LeftArrow />
        </Arrow>
      )}
      <Number>{pageNumber}</Number>
      {pageNumber < numberOfPages && (
        <Arrow onClick={incrementPage}>
          <RightArrow />
        </Arrow>
      )}
    </Container>
  );
}

export default Pagination;

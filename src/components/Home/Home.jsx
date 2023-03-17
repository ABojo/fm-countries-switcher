import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Home;

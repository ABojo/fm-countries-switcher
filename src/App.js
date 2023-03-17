import Theme from "./contexts/Theme";
import { CountriesProvider } from "./contexts/Countries";
import Header from "./components/Header/Header";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory";
import CountryPage from "./components/CountryPage/CountryPage";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function AppOld() {
  return (
    <BrowserRouter>
      <Theme>
        <CountriesProvider>
          <Header />
          <Routes>
            <Route index element={<CountryDirectory />} />
            <Route index element={<div></div>}></Route>
            <Route path="/country/:countryName" element={<CountryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CountriesProvider>
      </Theme>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <CountriesProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<CountryDirectory />} />
              <Route path="country/:countryName" element={<CountryPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CountriesProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

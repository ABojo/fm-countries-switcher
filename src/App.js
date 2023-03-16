import Theme from "./contexts/Theme";
import { CountriesProvider } from "./contexts/Countries";
import Header from "./components/Header/Header";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory";
import CountryPage from "./components/CountryPage/CountryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <CountriesProvider>
          <Header />
          <Routes>
            <Route index element={<CountryDirectory />} />
            <Route path="/country/:countryName" element={<CountryPage />} />
          </Routes>
        </CountriesProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

import Theme from "./contexts/Theme";
import { CountriesProvider } from "./contexts/Countries";
import { FilterProvider } from "./contexts/Filter";

import CountryDirectory from "./components/CountryDirectory/CountryDirectory";
import CountryPage from "./components/CountryPage/CountryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Message from "./components/Message/Message";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <FilterProvider>
          <CountriesProvider>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<CountryDirectory />} />
                <Route path="country/:countryName" element={<CountryPage />} />
                <Route
                  path="*"
                  element={
                    <Message>Sorry, that page could not be found!</Message>
                  }
                />
              </Route>
            </Routes>
          </CountriesProvider>
        </FilterProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

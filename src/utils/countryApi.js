import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

const countryApi = {
  getAllCountries: async function () {
    const response = await client.get("/all");

    return response.data;
  },
  searchCountries: async function (searchString) {
    const response = await client.get(`/name/${searchString}`);

    return response.data;
  },
  getRegion: async function (regionName) {
    const response = await client.get(`/region/${regionName}`);

    return response.data;
  },
  getCountry: async function (countryName) {
    const response = await client.get(`/name/${countryName}?fullText=true`);

    return response.data;
  },
};

export default countryApi;

const storage = {
  getCountries: function () {
    const countries = localStorage.getItem("countries");

    if (!countries) return null;

    return JSON.parse(countries);
  },
  saveCountries: function (countries) {
    const stringified = JSON.stringify(countries);
    localStorage.setItem("countries", stringified);
  },
  getTheme: function () {
    const theme = localStorage.getItem("theme");

    if (!theme) return null;

    return theme;
  },
  saveTheme: function (theme) {
    localStorage.setItem("theme", theme);
  },
};

export default storage;

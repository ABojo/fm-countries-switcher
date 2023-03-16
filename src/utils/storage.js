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
};

export default storage;

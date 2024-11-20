const API_BASE_URL = "https://restcountries.com/v3.1"

export const fetchAllCountries = async () => {
    const response = await fetch(`${API_BASE_URL}/all`);
    return await response.json();
};

export const fetchCountryByName = async (name) => {
    const response = await fetch(`${API_BASE_URL}/name/${name}`);
    return await response.json();
};

export const fetchCountryByCca3 = async (cca3) => {
    const response = await fetch(`${API_BASE_URL}/alpha/${cca3}`);
    return await response.json();
};
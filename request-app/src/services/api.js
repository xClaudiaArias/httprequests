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

export const fetchCountryByCurrency = async (currency) => {
    const response = await fetch(`${API_BASE_URL}/currency/${currency}`);
    return await response.json();
};

export const fetchCountryByDemonym = async (demonym) => {
    const response = await fetch(`${API_BASE_URL}/demonym/${demonym}`);
    return await response.json();
};

export const fetchCountryByCapital = async (capital) => {
    const response = await fetch(`${API_BASE_URL}/capital/${capital}`);
    return await response.json();
};

export const fetchCountryByRegion = async (region) => {
    const response = await fetch(`${API_BASE_URL}/region/${region}`);
    return await response.json();
};
const API_BASE_URL = "https://restcountries.com/v3.1/name/"

export const fetchCountryByName = async (name) => {
    const response = await fetch(`${API_BASE_URL}/name/${name}`);
    return await response.json();
};
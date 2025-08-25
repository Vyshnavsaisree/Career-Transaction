import axios from 'axios';

const API_URL = 'https://api.example.com/vacancies';

export const fetchVacancies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching vacancies: ' + error.message);
    }
};

export const postVacancy = async (vacancyData) => {
    try {
        const response = await axios.post(API_URL, vacancyData);
        return response.data;
    } catch (error) {
        throw new Error('Error posting vacancy: ' + error.message);
    }
};

var counterDiv = document.getElementById('visit-counter');
if (counterDiv) {
    counterDiv.textContent = 'Site Visits: ' + visits;
}
var counterDivMobile = document.getElementById('visit-counter-mobile');
if (counterDivMobile) {
    counterDivMobile.textContent = 'Site Visits: ' + visits;
}
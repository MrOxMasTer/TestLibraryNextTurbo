import axios from 'axios';

const API_URL = 'http://localhost:3000/';

axios.defaults.baseURL = API_URL;

interface IContry {
    id: number;
    name: string;
}

export const countryServices = {
    async getAll() {
        return axios.get<IContry[]>('countries');
    },
};

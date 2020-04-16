import axios from 'axios';
const BASE_URL = 'http://localhost:8085';

export function updateRecord(items, id) {
    return axios.post(`${BASE_URL}/lab/lab1/update/${id}`, { items })
            .then(response => {
                    return response.data
            })
            .catch(err => Promise.reject(err.message));
}
import axios from 'axios';

const uri = 'http://localhost:8080';

export class ApiService {
    constructor(){

    }

    getLab1(){
        const url = `${uri}/lab/lab1/edit/${this.$route.params.id}`;
        return axios.get(url).then(response => {
            response.data;
        })
    }
}
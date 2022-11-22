import axios from 'axios'


const ax = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        "Content-type": "application/json"
    }
})

export default ax
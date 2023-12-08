import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    }
});
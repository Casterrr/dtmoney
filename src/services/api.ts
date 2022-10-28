import axios from "axios";

export const api = axios.create({
    //In development ambient
    // baseURL: 'http://localhost:3000/api',
    
    //In production ambient
    baseURL: 'https://dtmoney-caster.netlify.app/api',

})
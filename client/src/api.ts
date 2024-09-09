import axios from "axios";
const API_URL = `${import.meta.env.VITE_API}/api`
export const $axios = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})

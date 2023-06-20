import axios from 'axios';

export default axios.create({
    baseURL: 'https://vaximate.vercel.app/api'
});
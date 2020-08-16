import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID F7U7vvPTUka3TqO1Ps8jSMW00XALRsI8O_Wwvq8XTDo',
      }
})
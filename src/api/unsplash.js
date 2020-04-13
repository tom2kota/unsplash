// https://unsplash.com/oauth/applications/122771

import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID T1jeSm5paCHXobyz4E-DnXnuH_QtkUYmd-M8yr9eVso'
    }
})
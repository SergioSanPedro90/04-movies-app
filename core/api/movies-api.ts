import axios from 'axios'

export const moviesApi = axios.create({

    baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
    params: {
        language: 'es-Es',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
    }

})
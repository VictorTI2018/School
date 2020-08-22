import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API
})

Vue.use(VueAxios, http)

http.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

export default http
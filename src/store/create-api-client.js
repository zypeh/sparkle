import axios from 'axios'

const config = {
    site: 'https://localhost:8000', // our API site
}

export default axios.create({
  baseURL: config.site,
  timeout: 3000,
  headers: {'X-custom-Header': 'doboom-app-01'}
})

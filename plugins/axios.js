import axios from 'axios'

let options = {
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}

options.baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3089/api' : 'http://localhost:3089/api'
export default axios.create(options)

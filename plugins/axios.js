import axios from 'axios'

let options = {
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}

options.baseURL = (process.env.NODE_ENV === 'development') ? 'http://www.keenjaan.cn/api' : 'http://www.keenjaan.cn/api'
export default axios.create(options)

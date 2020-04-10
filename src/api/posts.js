import axios from 'axios'
import { API_HOST } from '../constants.js'

export default {
  index() {
    return axios.get(`${API_HOST}/posts.json`)
      .catch(() => { alert('API error') })
  },
  update(params) {
    let { postId, published } = params
    return axios.patch(`${API_HOST}/posts/${postId}`, { published: published })
      .catch(() => { alert('API error') })
  },
  create(params) {
    return axios.post(`${API_HOST}/posts`, params)
      .catch(() => { alert('API error') }) }
}

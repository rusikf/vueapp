import axios from 'axios'
import { API_HOST } from '../constants.js'

axios.defaults.headers['Content-Type'] = 'application/vnd.api+json'
axios.defaults.headers['Accept'] = 'application/vnd.api+json'

export default {
  index() {
    return axios.get(`${API_HOST}/posts?include=comments`)
      .catch(() => { alert('API error') })
  },
  update(params) {
    let { postId, published } = params

    let api_params = {
      data: {
        type: 'posts',
        id: postId,
        attributes: {
          published: published
        }
      }
    }
    return axios.patch(`${API_HOST}/posts/${postId}`, api_params)
      .catch(() => { alert('API error') })
  },
  create(params) {
    return axios.post(`${API_HOST}/posts`, params)
      .catch(() => { alert('API error') }) }
}

import axios from 'axios';
import { API_HOST } from '../constants.js'

export default {
  add(params) {
    let { id, content } = params

    return axios
      .post(`${API_HOST}/posts/${id}/comments`, { content: content })
      .catch(() => { alert('API comments error') })
  }
}

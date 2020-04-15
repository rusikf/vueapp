import axios from 'axios';
import { API_HOST } from '../constants.js'

axios.defaults.headers['Content-Type'] = 'application/vnd.api+json';
axios.defaults.headers['Accept'] = 'application/vnd.api+json';

export default {
  add(params) {
    let { id, content } = params

    let api_params = {
      data: {
        type: 'comments',
        attributes: { content: content },
        relationships: {
          post: {
            data: { type: 'posts', id: id }
          }
        }
      }
    }

    return axios
      .post(`${API_HOST}/posts/${id}/comments`, api_params)
      .catch(() => { alert('API comments error') })
  }
}

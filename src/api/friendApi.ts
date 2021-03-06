import { setHeaders } from 'utils/setHeaders'
import axiosClient from './axiosClient'

const friendApi = {
  getAllFriend() {
    const url = `/friends`
    return axiosClient.get(url, setHeaders())
  }
}

export default friendApi

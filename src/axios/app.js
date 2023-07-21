import http from './index.js'
export const testapi = (params) => {
  return http.post('/pet', params)
}
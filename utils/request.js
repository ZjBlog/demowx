/**
 * 微信请求
 */
function requestForGet (url,params) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: url,
      data: Object.assign({}, params),
      dataType: 'json',
      success: resolve,
      fail: reject,
      header: { 'Content-Type': 'json' },
      method: 'GET'
    })
  })
}
function requestForPost(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: Object.assign({}, params),
      dataType: 'json',
      success: resolve,
      fail: reject,
      header: { 'Content-Type': 'json' },
      method: 'POST'
    })
  })
}
function requestForGetDb(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: Object.assign({}, params),
      dataType: 'json',
      success: resolve,
      fail: reject,
      header: { 'Content-Type': 'json' },
      method: 'GET'
    })
  })
}
module.exports = {
  requsetForPost: requestForPost,
  requsetForGet: requestForGetDb,
  reqForGet: requestForGet
}

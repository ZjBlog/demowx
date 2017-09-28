function setStorage(key, obj) {
  return new Promise((resolved, rejected) => {
    wx.setStorage({ key: key, data: obj, success: resolved, fail: rejected })
  })
}
// 如果获取的key不存在 将是失败状态异步获取  同步获取如果key不存在将返回""
function getStorage(key) {
  return new Promise((resolved, rejected) => {
    wx.getStorage({ key: key, success: resolved, fail: rejected })
  })
}

function getLocation(type = 'wgs84') {
  return new Promise((resolved, rejected) => {
    wx.getLocation({ type: type,success: resolved, fail: rejected })
  })
}

module.exports = {
  setStorage,
  getStorage,
  getLocation
}

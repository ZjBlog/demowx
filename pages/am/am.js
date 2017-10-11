//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.contact')
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        // app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: ()=>{
        console.info('.........')
      }
    })
  }
})

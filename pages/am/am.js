//am.js
const {getStorage } = require('../../utils/weixin')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.contact'),
    subjects:[]
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    this.init()
  },
  init(){
    let vm = this
    getStorage('history').then(res=>{
      vm.setData({
        subjects:res.data
      })
    }).catch(()=>{
      console.info('shibai')
    })
  },
  go () {
    console.info('go')
  }
})

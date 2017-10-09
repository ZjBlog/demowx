const { getDate, isExpire } = require('../../utils/util')
const { setStorage, getStorage} = require('../../utils/weixin')
const { requsetForGet} = require('../../utils/request')

Page({
  data: {
    item: {},
    flag:false
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    this.init()
  },
  init () {
    let vm = this
    getStorage('per').then(res => {
        wx.hideLoading()
        vm.setData({
          item: res.data,
          flag: true
        })
    }).catch(res => {
      requsetForGet('https://api.douban.com/v2/movie/celebrity/1352153').then(res=>{
        console.info(res)
        wx.hideLoading()
        setStorage('per', res.data).then(() => {
          console.info('保存成功')
        })
        vm.setData({
          item: res.data,
          flag: true
        })
      })
    })
  }
})

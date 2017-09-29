const { getDate, isExpire } = require('../../utils/util')
const { setStorage, getStorage} = require('../../utils/weixin')
const { requsetForGet} = require('../../utils/request')

Page({
  data: {
    title: 'urlDemo',
    item: {},
    flag:false
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    let vm = this
    wx.showLoading({
      title: '加载中',
    })
    getStorage('item').then(res=>{
      if (isExpire(res.data.time)) {
        console.info('没超时')
        wx.hideLoading()
        vm.setData({
          item: res.data.item,
          flag:true
        })
        //vm.init1()
      }else {
        vm.init1()
      }
    }).catch(res=>{
      console.info('shibai')
      vm.init1()
    })
  },
  init () {
      let obj ={
        time:getDate(),
        list:this.data.list
      }
      setStorage('list',obj).then(()=>{
        console.info('保存成功')
      })
  },
  init1 () {
    let vm = this
    requsetForGet('https://api.douban.com/v2/movie/subject/26926321').then(res=>{
      console.info(res)
      let obj = {
        time: getDate(),
        item: res.data
      }
      wx.hideLoading()
      vm.setData({
        item: res.data,
        flag: true
      })
      setStorage('item', obj).then(() => {
        console.info('保存成功')
      })
    })
  }
})

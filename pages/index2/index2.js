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
     // vm.init1()
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
  },
  histoty(img){
    getStorage('history').then(res=>{
      let items = res.data
      if (items.indexOf(img)>-1) {
        console.info('已经存在')
      }else {
        if(items.length>19){
          items.pop()
          items.unshift(img)
        }else {
          items.unshift(img)
        }
        setStorage('history', items).then(res => {
          console.info('保存成功')
        }).catch((res) => {
          console.info('保存失败history')
        })
      }
    }).catch(()=>{
      let temp=[]
      temp.push(img)
      setStorage('history', temp).then(res=>{
        console.info('保存成功')
      }).catch((res)=>{
        console.info('保存失败history')
      })
    })
  }
})

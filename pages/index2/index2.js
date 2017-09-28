const { getDate, isExpire } = require('../../utils/util')
const { setStorage, getStorage} = require('../../utils/weixin')

Page({
  data: {
    title: 'urlDemo',
    list: [{title:'123'}],
    item: {key:'dddd'}
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    let vm = this
    getStorage('list').then(res=>{
      if (isExpire(res.data.time)) {
        console.info('没超时')
      }else {
        vm.init()
      }
    }).catch(res=>{
      console.info('shibai')
      vm.init()
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
  }
})

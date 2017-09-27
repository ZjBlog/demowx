const { requsetForGet } = require('../../utils/request')
const { getAna } = require('../../utils/ana')

Page({
  data: {
    title: 'urlDemo',
    movieList: [
      { url: 'https://api.douban.com/v2/movie/in_theaters' },
      { url: 'https://api.douban.com/v2/movie/coming_soon' },
      { url: 'https://api.douban.com/v2/movie/top250' },
      { url:'https://api.douban.com/v2/movie/us_box'}
    ],
    ana: getAna()
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    // let allPromises = this.data.movieList.map(m =>{
    //   return requsetForGet(m.url,{count: 10}).then((res) =>{
    //       m.title = res.data.title
    //       m.subjects = res.data.subjects
    //       return m
    //   })
    // })
    // Promise.all(allPromises).then((res)=>{
    //   this.setData({
    //     movieList: res
    //   })
    //   console.info(res)
    // })
  },
  more(event) {
    console.info(event)
    let url = event.currentTarget.dataset.more
    let index = url.lastIndexOf('\/')
    url = url.substring(index + 1, url.length)
    console.info(url)
    wx.navigateTo({
      url: '/pages/list/list?type=' + url
    })
  }
})

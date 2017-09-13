var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    title: '',
    toView: 'red',
    scrollTop: 0,
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 1000,
    duration: 1000,
    circular: false,
    x: 0,
    y: 0,
    timers: 0
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      title: 'Json-Demo'
    })
  },
  upper: function (e) {
    console.info('到顶了')
    console.log(e)
  },
  lower: function (e) {
    console.info('到底了')
    console.log(e)
  },
  scroll: function (e) {
    console.info('开始滚了')
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  bchange (e) {
    console.info(e)
    console.info('图片滚动')
  },
  changeCir () {
    this.setData({
      circular: !this.data.circular
    })
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  // 监听页面初次渲染完成
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  },
  time (e) {
    this.setData({
      timers: e.detail.currentTime
    })
  }
})

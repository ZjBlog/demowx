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
    interval: 5000,
    duration: 1000,
    circular: false
  },
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
  }
})

let initData = 'this is first line\nthis is second line'
let extraLine = [];
Page({
  data: {
    title: '',
    text: initData,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    percent: 50
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      title: '基础内容',
      iconSize: [20, 30, 40, 50, 60, 70],
      iconColor: [
        'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
      ],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ]
    })
  },
  add: function (e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
        extraLine.pop()
        this.setData({
          text:initData + '\n' + extraLine.join('\n')
        })
    }
  },
  tap(e) {
    console.info(e)
    console.log('tap')
  },
  per () {
    let intervalID = setInterval(()=>{
      if (this.data.percent <100) {
        this.setData({
          percent: this.data.percent+5
        })
      }else {
        clearInterval(intervalID)
      }
    }, 1000)
  }
})

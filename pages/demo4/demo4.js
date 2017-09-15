Page({
  data: {
    title: '表单剩余组件',
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    height: 20,
    focus: false
  },
  onLoad (options) {
    console.log(options)
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  slider1change (e) {
    console.log('发生 change 事件，携带值为', e.detail.value)
  },
    slider2change (e) {
    console.log('发生 change 事件，携带值为', e.detail.value)
  },
  slider3change (e) {
    console.log('发生 change 事件，携带值为', e.detail.value)
  },
  slider4change (e) {
      console.log('发生 change 事件，携带值为', e.detail.value)
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  }
})

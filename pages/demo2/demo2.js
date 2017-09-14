var types = ['default', 'primary', 'warn']
Page({
  data: {
    title: '',
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ]
  },
  //生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      title: '表单组件'
    })
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  default () {
    this.setData({
      defaultSize: this.data['defaultSize'] === 'default' ? 'mini' : 'default'
    })
  },
  primary () {
    this.setData({
      primarySize: this.data['primarySize'] === 'default' ? 'mini' : 'default'
    })
  },
  warn () {
    this.setData({
      warnSize: this.data['warnSize'] === 'default' ? 'mini' : 'default'
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})

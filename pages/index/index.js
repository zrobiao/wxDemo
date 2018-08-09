//index.js
//获取应用实例
var util = require('../../util/util.js')
const app = getApp()

Page({
  onlaunch: function () {

  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    defText: '这是一个很好玩的栗子！',
    imgArr: [{
      src: './../../image/slide.png',
      title: 'slide0'
    }, {
      src: './../../image/slide1.png',
      title: 'slide1'
    }, {
      src: './../../image/slide2.png',
      title: 'slide2'
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    checkGrop: [{
        name: '男',
        value: '男',
        checked: 'true'
      },
      {
        name: '女',
        value: '女',
        checked: 'true'
      },
    ],
  },
  onLoad: function () {
    // var time = util.formatTime( new Date());
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day
    }
    var formatDate = year + '-' + month + '-' + day;
    console.log(formatDate)
    this.setData({
      date: formatDate
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  viewTest: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '欢迎使用栗子的小程序',
      path: 'pages/test/test'

    }
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
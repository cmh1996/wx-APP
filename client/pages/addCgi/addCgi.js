//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        requestResult: '',
        canIUseClipboard: wx.canIUse('setClipboardData')
    },
    onLoad: function (options) {
      // Do some initialize when page load.
    },
    onReady: function () {
      // Do something when page ready.
    },
    onShow: function () {
      // Do something when page show.
    },
    onHide: function () {
      // Do something when page hide.
    },
    onUnload: function () {
      // Do something when page close.
    },
    onPullDownRefresh: function () {
      // Do something when pull down.
    },
    onReachBottom: function () {
      // Do something when page reach bottom.
    },
    onShareAppMessage: function () {
      return {
        title: '自定义转发标题',
        path: '/pages/addCgi/addCgi'
      }
      /*
      只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
      用户点击转发按钮的时候会调用
      此事件需要 return 一个 Object，用于自定义转发内容
      */
    },
    onPageScroll: function (options) {
      //options.scrollTop
      // Do something when page scroll
    },
    onTabItemTap(item) {
      console.log(item.index)
      console.log(item.pagePath)
      console.log(item.text)
    },
    // Event handler.
    viewTap: function () {
      this.setData({
        text: 'Set some data for updating view.'
      }, function () {
        // this is setData callback
      })
    },

    testCgi: function () {
        util.showBusy('请求中...')
        var that = this
        qcloud.request({
            url: `${config.service.host}/weapp/demo`,
            login: false,
            success (result) {
                util.showSuccess('请求成功完成')
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
                util.showModel('请求失败', error);
                console.log('request fail', error);
            }
        })
    },

    copyCode: function (e) {
        var codeId = e.target.dataset.codeId
        wx.setClipboardData({
            data: code[codeId - 1],
            success: function () {
                util.showSuccess('复制成功')
            }
        })
    }
})

/*
this.route获取当前页面路径。

this.setData()的 key 可以非常灵活，以数据路径的形式给出，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。

navigateTo, redirectTo 只能打开非 tabBar 页面。
switchTab 只能打开 tabBar 页面。
reLaunch 可以打开任意页面。
*/


var code = [
`router.get('/demo', controllers.demo)`,
`module.exports = ctx => {
    ctx.state.data = {
        msg: 'Hello World'
    }
}`
]

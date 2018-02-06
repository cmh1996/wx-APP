//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onLaunch: function (options) {
      // Do something initial when launch.
    },
    onShow: function (options) {
      // Do something when show.
    },
    onHide: function () {
      // Do something when hide.
    },
    onError: function (msg) {
      console.log(msg)
    },
    globalData: 'I am global data',
})
/*
在其它页面的js里获取全局APP对象：
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
通过 getApp() 获取实例之后，不要私自调用生命周期函数。
*/

/*
onLaunch, onShow 参数：
path 	String 	打开小程序的路径
query 	Object 	打开小程序的query
scene 	Number 	打开小程序的场景值
shareTicket 	String 	shareTicket，详见 获取更多转发信息
referrerInfo 	Object 	当场景为由从另一个小程序或公众号或App打开时，返回此字段
referrerInfo.appId 	String 	来源小程序或公众号或App的 appId，详见下方说明
referrerInfo.extraData  Object 	来源小程序传过来的数据，scene=1037或1038时支持
*/
// pages/search/search.js
const util = require('../../utils/util.js');

Page({
  data: {
    inputVal:'',
    hotPlaces: ['泰国', '台湾', '三亚', '厦门', '云南', '北京', '新加坡', '马尔代夫', '柬埔寨', '越南', '哈尔滨', '佛山', '西安', '英国', '土耳其'],
    historyPlaces:[],
    mockPlaces: ['测试词汇', '测试词汇', '测试词汇'],
    suggestPlaces: [],
    clientHeight:util.getClientSize().height+'px',
  },

  //获取input的value
  setValue:function(e){
    if(e.detail.value.trim().length>0){
      this.setData({
        suggestPlaces:this.data.mockPlaces,
        inputVal: e.detail.value
      });
    }else{
      this.setData({
        suggestPlaces: [],
        inputVal: e.detail.value
      });
    }
    
  },

  //搜索
  searchConfirm:function(){
    //保存搜索记录到本地
    let curArr = wx.getStorageSync("historySearch");
    if (!curArr || !(curArr instanceof Array)){
      curArr = [];
    }
    curArr.push(this.data.inputVal);
    curArr = [...new Set(curArr)];
    wx.setStorageSync('historySearch', curArr);

    util.showSuccess('搜索'+this.data.inputVal);
  },

  //直接点击目的地
  searchDirectly:function(e){
    this.setData({
      inputVal: e.target.dataset.place
    },()=>{
      this.searchConfirm();
    })
  },

  //清除历史记录
  clearHistory:function(e){
    this.setData({
      historyPlaces:[]
    })
    wx.removeStorageSync('historySearch');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'historySearch',
      success: (res)=>{
        this.setData({
          historyPlaces:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
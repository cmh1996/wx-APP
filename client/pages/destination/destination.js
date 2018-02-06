// pages/destination/destination.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotType:['景点','美食','酒店','购物','娱乐'],
    curHotTypeIndex:0,
    hotPlace: [{
      img: 'https://img.alicdn.com/bao/uploaded/i1/170040265302404422/TB2RgTkuXXXXXbcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75',
      name: '深圳世界之窗'
    }, {
        img: 'https://img.alicdn.com/bao/uploaded/i1/152410262911488745/TB2KOcptVXXXXauXXXXXXXXXXXX_!!0-travel.jpg_400x400q75',
      name: '深圳欢乐谷'
      }, {
        img: 'https://img.alicdn.com/bao/uploaded/i3/170040263573147307/TB2nY7KtVXXXXc1XpXXXXXXXXXX_!!0-travel.jpg_400x400q75',
        name: '东部华侨城'
    }, {
        img: 'https://img.alicdn.com/bao/uploaded/i1/170070262470115401/TB29XiDtVXXXXcKXpXXXXXXXXXX_!!0-travel.jpg_400x400q75',
      name: '锦绣中华'
      }, {
        img: 'https://img.alicdn.com/bao/uploaded/i3/170060268517979069/TB2383KXxfxQeBjSspjXXX4opXa_!!0-travel.jpg_400x400q75',
        name: '欢乐海岸'
      }],
      ranking:[
        {
          img:'https://img.alicdn.com/i6/TB1JSQfgWagSKJjy0FgM3kRqFXa_112001.jpg_200x200q75',
          title:'醉美东西冲'
        }, {
          img: 'https://img.alicdn.com/i7/TB1t0NAXAT85uJjSZFhf.QPEVXa_033858.jpg_200x200q75',
          title: '地王大厦'
        }, {
          img: 'https://img.alicdn.com/i3/TB1imNnoCYH8KJjSspdBB7RgVXa_025044.jpg_200x200q75',
          title: '深港环岛游'
        }
      ],
      typical:[{
        img:'https://img.alicdn.com/i6/TB1XoVBdlDH8KJjy1zet.djepXa_041525.jpg_200x200q75',
        title:'广州出发-深圳醉美盐田海滨栈道徒步大梅沙、小梅沙休闲摄影',
        num:'33%',
      }, {
          img: 'https://img.alicdn.com/i6/TB1J_BjjzihSKJjy0FeBE2JtpXa_115428.jpg_200x200q75',
        title: '广州深圳连线环香港岛双飞纯玩4天3晚跟团旅游珠江三角洲半自由行',
        num: '23%',
      }],
      otherCity:[{
        img:'https://gw.alicdn.com/tps/TB1pCfxPXXXXXXPaFXXXXXXXXXX-800-800.jpg_100x100xzq75.jpg',
        name:'广州',
        km:'xx'
      }, {
          img: 'https://gw.alicdn.com/tps/TB10olrOVXXXXcOapXXXXXXXXXX-800-800.jpg_100x100xzq75.jpg',
        name: '佛山',
        km: 'xx'
        }, {
          img: 'https://gw.alicdn.com/tps/TB11Qt4OVXXXXakXpXXXXXXXXXX-800-800.jpg_100x100xzq75.jpg',
          name: '东莞',
          km: 'xx'
        }],
        route:[{
          img:'https://img.alicdn.com/i8/TB1C_SSg_nI8KJjSszg9jk8ApXa_052920.jpg_200x200q75',
          title:'新八景之首-松湖烟雨骑行+百花洲百花齐放纯玩一日游',
          num:'235',
          price:'￥532'
        }, {
            img: 'https://img.alicdn.com/i3/TB1m1eZQVXXXXcYXpXXjYiB8FXX_025941.jpg_200x200q75',
            title: '春节深圳东部华侨城 咖酷旅馆2-6人套餐 送大侠谷茶溪谷双谷门票',
          num: '23',
          price: '￥518'
          }, {
            img: 'https://img.alicdn.com/i6/TB1gH8BmsrI8KJjy0FhzgDfnpXa_070043.jpg_200x200q75',
            title: '拖把儿 深圳模拟飞行驾驶舱全套VR体验机波音737飞机模拟舱训练机',
            num: '31',
            price: '￥398'
          }]
  },

  selectHotType(e){
    this.setData({
      curHotTypeIndex: e.target.dataset.index
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
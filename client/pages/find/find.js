// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findBtn:[
      {
        icon:'https://gw.alicdn.com/tfs/TB1XhMFbwoQMeJjy0FoXXcShVXa-48-48.png_48x48q50.jpg_.webp',
        text:'笔记'
      }, {
        icon: 'https://gw.alicdn.com/tfs/TB13HEsbrsTMeJjSszhXXcGCFXa-48-48.png_48x48q50.jpg_.webp',
        text: '头条'
      }, {
        icon: 'https://gw.alicdn.com/tfs/TB1AcoBbEgQMeJjy0FgXXc5dXXa-48-48.png_48x48q50.jpg_.webp',
        text: '游记'
      }, {
        icon: 'https://gw.alicdn.com/tfs/TB1_xIFbwoQMeJjy0FoXXcShVXa-48-48.png_48x48q50.jpg_.webp',
        text: '买家秀'
      }
    ],
    bannerList:[
      { img:'https://gw.alicdn.com/tfs/TB16PvKf26H8KJjy0FjXXaXepXa-750-180.jpg_760x760q75.jpg_.webp'
      }, {
        img: 'https://gw.alicdn.com/tfs/TB15IBqoLDH8KJjy1XcXXcpdXXa-750-234.png_760x760q75.jpg_.webp'
      }, {
        img: 'https://gw.alicdn.com/tfs/TB1ROktnBTH8KJjy0FiXXcRsXXa-750-234.jpg_760x760q75.jpg_.webp'
      },  {
        img: 'https://gw.alicdn.com/tfs/TB1_C6upcLJ8KJjy0FnXXcFDpXa-750-234.jpg_760x760q75.jpg_.webp'
    }],
    feedList:[],
    loadTimes: 0,
    perLoad: 4,
    dataList:[
      {
        userImg:'https://m.tuniucdn.com/filebroker/cdn/snc/e0/42/e0424052abef7fbcb73359c9279fb849_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName:'吴秋煌',
        content:'此篇游记是“吴秋煌”在途牛发表的游记攻略，记录了在“肇庆”旅游时的游记攻略，图片多多，真实好玩。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/51/9E/Cii-s1pxQaSIFogLAAWHUQgwZU8AAC-RgG2fr4ABYdp67_w800_h0_c0_t0.jpeg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/51/9E/Cii-s1pxQaSIFogLAAWHUQgwZU8AAC-RgG2fr4ABYdp67_w800_h0_c0_t0.jpeg'],
        company:'游在肇庆'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/4E/5B/Cii-s1pujnaIBBAuABeZh8xcHEYAAC58wD1ASAAF5mf376_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: 'vivian婷ting',
        content: '又要去澳大利亚了？这次我去的是西澳，有没有听到过珀斯这个地方？我也是第一次听到，原来我是要去毛里求斯的，可恶的航空公司取消了航线，还好我的签证还有效，说走就走。。。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/50/18/Cii-s1pwAGOISR39AAH8Fz5XY8wAAC8VwHkjqoAAfwv431_w800_h0_c0_t0.jpg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/50/18/Cii-s1pwAGOISR39AAH8Fz5XY8wAAC8VwHkjqoAAfwv431_w800_h0_c0_t0.jpg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/50/18/Cii-s1pwAGOISR39AAH8Fz5XY8wAAC8VwHkjqoAAfwv431_w800_h0_c0_t0.jpg'],
        company: '西澳大利亚'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/07/CA/Cii-slok4dCIRWQZAH0p2IGs8cIAAAYwQD2IkkAfSnw333_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '熊猫慢游',
        content: '经过了四个多小时车子到达了大叻，来时的山路也不是那么的颠簸，至少并没有给我留下特别深刻的印象，说明应该还是和平常的路没有多大的区别；怎么和在拉萨的时候一样啊，这是下车之后我的第一感觉，因为大叻属于高山小镇，海拔已经比海平面升高了许多',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4F/81/Cii-tFpvOuuIABgqAAkuLHhQo3UAAC7fgJPD3kACS5E996_w800_h0_c0_t0.jpg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4F/81/Cii-tFpvOuuIABgqAAkuLHhQo3UAAC7fgJPD3kACS5E996_w800_h0_c0_t0.jpg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4F/81/Cii-tFpvOuuIABgqAAkuLHhQo3UAAC7fgJPD3kACS5E996_w800_h0_c0_t0.jpg'],
        company: '游在大叻'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/07/CA/Cii-slok4dCIRWQZAH0p2IGs8cIAAAYwQD2IkkAfSnw333_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '熊猫慢游',
        content: '昨天下午上车之后并也没有睡觉，而是用手机在找寻着芽庄的旅店，之后便是一觉睡到车子到达芽庄，唯一中间有点印象的就是记得半夜有被车子颠醒过一次，然后迷迷糊糊的看见窗外星星点点的灯光一字排开非常漂亮，应该是正沿着海岸线在行驶，但是实在是太困了，根本没有继续观看便又熟睡过去了，可能也正在因为这样的匆匆一瞥让我久久的在回味那美景。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4F/51/Cii-s1pvGmGIePqwAA7opuM88v4AAC7YAE_nJ0ADui-288_w800_h0_c0_t0.jpg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4F/51/Cii-s1pvGmGIePqwAA7opuM88v4AAC7YAE_nJ0ADui-288_w800_h0_c0_t0.jpg'],
        company: '游在芽庄'
      }, {
        userImg: 'https://images.tuniucdn.com/head/2/2143812s.jpg',
        userName: '悦微小鱼',
        content: '宝钢是1978年12月23日开工建设的，我们四人都是1980年进宝钢工作的，阿根、阿贵是退伍军人，阿芳和我是2000名高中生，而阿根、阿贵分别将于2018年8月、10月光荣退休，想想在一起工作和生活了38年，转眼从弱冠之年到了花甲之年，不久之后将要分别，真是有点依依不舍和两眼泪汪汪的感觉，希望友情永驻。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4F/64/Cii-tFpvKLeIEwYqAAX2fJaKOs4AAC7bQHXq-YABfaU652_w800_h0_c0_t0.JPG'],
        company: '游在三亚'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G3/M00/1C/A0/Cii_LllTdRqIXRl4AAWySHDrT3gAAB35wIk7v8ABbJg999_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '雪泡儿',
        content: '成都，天府之城，是我最喜欢的城市，满眼的火锅，街道上搓麻的人们都是我爱成都的原因，你可以只为吃，也可以去看一次蜀风雅韵的表演，喝一碗茶，逛一逛有童年记忆的公园，都无比悠闲。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4E/EE/Cii-slpu3p-IWMMzAALdpExCNqYAAC64ACyYEIAAt2844_w800_h0_c0_t0.jpeg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4E/EE/Cii-slpu3p-IWMMzAALdpExCNqYAAC64ACyYEIAAt2844_w800_h0_c0_t0.jpeg'],
        company: '游在宽窄巷子'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G2/M00/2B/CC/Cii-T1g7iJmILXDfAAl7gR5XZFcAAE6cABV-J8ACXuZ398_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '黏黏小狐狸',
        content: '南京是一个计划了好久的地方，这次趁着途牛有活动买的机加酒的套餐其实非常划算。',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4D/94/Cii-tFptdNaIeSjyAAOY5XFzJpEAAC5EABv-ucAA5j9262_w800_h0_c0_t0.JPG', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4D/94/Cii-tFptdNaIeSjyAAOY5XFzJpEAAC5EABv-ucAA5j9262_w800_h0_c0_t0.JPG', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4D/94/Cii-tFptdNaIeSjyAAOY5XFzJpEAAC5EABv-ucAA5j9262_w800_h0_c0_t0.JPG'],
        company: '侵华日军南京大屠杀遇难同胞纪念馆'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G2/M00/9B/A5/Cii-TlkFPOiIVqjFAEYBV6mPBdQAAJhNwH7OOcARgFv182_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '夏草',
        content: '去年底、在途牛网发现越南一款十二日深度游的旅游产品、我就豪不犹豫的下单了、尽管这次去越南己是第三次了、我的第一次出国就是河内下龙湾、第二次去越南是胡志明市仅过了一夜。二次去越南己是八、九年之前的事了。这次虽然有重复、但美拖、头顿、芽庄、大勒、顺化、会安、岘港都是第一次去、事实证明、这次值得！',
        imgList: ['https://m.tuniucdn.com/fb2/t1/G5/M00/4D/A1/Cii-slptf92ITMo5AAlRB8IJE6UAAC5HwIxkYQACVEf829_w800_h0_c0_t0.JPG', 'https://m.tuniucdn.com/fb2/t1/G5/M00/4D/A1/Cii-slptf92ITMo5AAlRB8IJE6UAAC5HwIxkYQACVEf829_w800_h0_c0_t0.JPG'],
        company: '游在胡志明市'
      }
    ]
  },

  loadMore: function () {
    const loadTimes = this.data.loadTimes;
    const perLoad = this.data.perLoad;
    let temArr = this.data.dataList.slice((loadTimes * perLoad), (loadTimes * perLoad) + perLoad);
    if (temArr.length <= 0) {
      return;
    }

    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      let feedListArr = this.data.feedList.slice();
      feedListArr.push(...temArr);
      this.setData({
        feedList: feedListArr,
        loadTimes: loadTimes + 1
      }, () => {
        wx.hideLoading();
      })
    }, 1000);
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
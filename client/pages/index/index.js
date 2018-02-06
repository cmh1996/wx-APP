//index.js
const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config');
const util = require('../../utils/util.js');

Page({
    data: {
      bannerUrls: ['https://gw.alicdn.com/tfs/TB1MEhHoN6I8KJjy0FgXXXXzVXa-750-234.jpg_760x760q75.jpg_.webp', 'https://gw.alicdn.com/imgextra/i3/0/TB2O9BaoMLD8KJjSszeXXaGRpXa_!!0-travel.jpg_760x760q75.jpg_.webp', 'https://gw.alicdn.com/tfs/TB1WGnPmBTH8KJjy0FiXXcRsXXa-750-234.jpg_760x760q75.jpg_.webp','https://gw.alicdn.com/tfs/TB1vX7qoC_I8KJjy0FoXXaFnVXa-750-234.jpg_760x760q75.jpg_.webp'],
      types:[
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1lw9HfgoQMeJjy0FpXXcTxpXa-225-183.png',
          title:'机票'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1KsxcbjihSKJjy0FiXXcuiFXa-225-183.png',
          title: '酒店客栈'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1YxNfbjihSKJjy0FlXXadEXXa-225-183.png',
          title: '火车票'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1A0hdbaagSKJjy0FhXXcrbFXa-225-183.png',
          title: '汽车票'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1G_E.a6ihSKJjy0FeXXbJtpXa-227-183.png',
          title: '用车'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1YhCPfgMPMeJjy1XcXXXpppXa-225-183.png',
          title: '旅游线路'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1NBJibaagSKJjy0FcXXcZeVXa-225-183.png',
          title: '周边游'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1wtlcbjihSKJjy0FfXXbGzFXa-225-183.png',
          title: '门票'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB13_9IfgoQMeJjy0FpXXcTxpXa-225-183.png',
          title: '领里程'
        }, {
          imgUrl: 'https://gw.alicdn.com/tfs/TB1rv1IfgMPMeJjy1XbXXcwxVXa-227-183.png',
          title: '全部'
        }
      ],
      obSupermarket: ['国际机票', '签证', '国际酒店', '国际租车', '接送机', '境外上网', '景点票务', '当地玩乐'],
      headlines:[{
        tips1:'精选',
        title1:'海南五大小众海湾，景色绝美还不要门票',
        tips2:'超赞',
        title2:'这里的美景随手一拍都是大片'
      }, {
        tips1: '精选',
        title1: '2月最佳旅行地出炉！用一场旅行犒劳努力的自己',
        tips2: '超赞',
        title2: '告诉你五天怎么玩遍贵州经典的景点'
      }],
      station:[
        {
          name:'香港',
          img:'https://gw.alicdn.com/imgextra/i2/6000000007922/TB2pD1Sae2CK1JjSZFIXXa3OpXa_!!0-travel.jpg_400x400q75.jpg_.webp',
          intro:'初赏维港夜景，重返梦幻童年'
        }, {
          name: '日本',
          img: 'https://gw.alicdn.com/imgextra/i4/6000000006424/TB2OOhnXBOBJuJjy1XdXXXIXVXa_!!2-travel.png_400x400q75.jpg_.webp',
          intro: '第一次的邮轮之旅，去赛琳娜号'
        }, {
          name: '泰国',
          img: 'https://gw.alicdn.com/imgextra/i2/6000000004125/TB2XILLXhHBK1JjSZFkXXbg9VXa_!!0-travel.jpg_400x400q75.jpg_.webp',
          intro: '普吉亲子游，收获中泰友谊'
        }
      ],
      randomPlace:[
        {
          img:'https://gw.alicdn.com/tips/TB24CFwbShlpuFjSspkXXa1ApXa_!!689896364.jpg_400x400q75.jpg_.webp',
          name:'爸妈放心游',
          intro:'品质送爸妈'
        }, {
          img: 'https://gw.alicdn.com/tips/TB2KPh1sXXXXXamXXXXXXXXXXXX_!!490728022.jpg_400x400q75.jpg_.webp',
          name: '江浙沪包游',
          intro: '江南水乡荡悠悠'
        }, {
          img: 'https://gw.alicdn.com/tips/i6/TB1ArlNoL2H8KJjy1zkT3Br7pXa_044157.jpg_400x400q75.jpg_.webp',
          name: '全球游园汇',
          intro: '有些地方没打卡'
        }, {
          img: 'https://gw.alicdn.com/tips/T2aA4EXllaXXXXXXXX_!!503505992.jpg_400x400q75.jpg_.webp',
          name: '潜水老司机',
          intro: '旱鸭子也能潜水'
        }, {
          img: 'https://gw.alicdn.com/i2/T1PSH_FdNcXXXXXXXX_!!0-item_pic.jpg_400x400q75.jpg_.webp',
          name: '泡泡温泉',
          intro: '泡泡温泉泡泡你'
        }, {
          img: 'https://gw.alicdn.com/imgextra/i3/6000000004210/TB2suRdao3iyKJjSspnXXXbIVXa_!!0-travel.jpg_400x400q75.jpg_.webp',
          name: '天堂海岛游',
          intro: '享受马尔代夫自然美景'
        }
      ],
      hotPlace:[
        {
          name: '巴厘岛',
          img: 'https://gw.alicdn.com/imgextra/i3/6000000004600/TB2CtiIuhRDOuFjSZFzXXcIipXa_!!0-travel.jpg_760x760q50.jpg_.webp',
          num: '46.7'
        }, {
          name: '武汉',
          img: 'https://gw.alicdn.com/imgextra/i3/6000000001348/TB2_ENirb0kpuFjy0FjXXcBbVXa_!!2-travel.png_540x540q50.jpg_.webp',
          num: '84.3'
        }, {
          name: '越南',
          img: 'https://gw.alicdn.com/imgextra/i2/6000000006173/TB2_TJbvYtlpuFjSspfXXXLUpXa_!!0-travel.jpg_760x760q50.jpg_.webp',
          num: '53'
        }, {
          name: '上海',
          img: 'https://gw.alicdn.com/imgextra/i4/6000000006745/TB235SueLNZWeJjSZFpXXXjBFXa_!!0-travel.jpg_760x760q50.jpg_.webp',
          num: '78.9'
        }
      ],
      youlike:[],
      loadTimes:0,
      perLoad:4,
      likePlace:[
        {
          type:'三亚 | 自由行',
          img:'https://gw.alicdn.com/bao/uploaded/i4/2256687003/TB2NTLRbTTI8KJjSsphXXcFppXa_!!2256687003.jpg_400x400q75.jpg_.webp',
          title:'海南三亚5天4晚自由行 希尔顿泳池房连住 蜈支洲酒店泳池别墅自驾',
          price:'1999',
          peopleNum:'1934'
        }, {
          type: '迪拜 | 跟团游',
          img: 'https://gw.alicdn.com/bao/uploaded/i3/3190378410/TB28Gs5bgnD8KJjy1XdXXaZsVXa_!!3190378410.jpg_400x400q75.jpg_.webp',
          title: '迪拜旅游帆船酒店5678星定制7天私家团旅行含门票餐厅包车直升机',
          price: '37880',
          peopleNum: '154'
        }, {
          type: '塞班 | 自由行',
          img: 'https://gw.alicdn.com/bao/uploaded/i2/2935198750/TB2a1..fL6H8KJjy0FjXXaXepXa_!!2935198750.jpg_400x400q75.jpg_.webp',
          title: '春节出发美国塞班岛自由行5-6天含机票酒店赠送环岛+军舰岛旅游',
          price: '2999',
          peopleNum: '14'
        }, {
          type: '巴黎 | 跟团游',
          img: 'https://gw.alicdn.com/i4/754920082/TB2BUIWnbplpuFjSspiXXcdfFXa_!!754920082.jpg_400x400q75.jpg_.webp',
          title: '海南三亚5天4晚自由行 希尔顿泳池房连住 蜈支洲酒店泳池别墅自驾',
          price: '6978',
          peopleNum: '194'
        }, {
          type: '甘孜 | 跟团游',
          img: 'https://gw.alicdn.com/bao/uploaded/i7/TB1mKvOdMvD8KJjSsplTAGIEFXa_121140.jpg_400x400q75.jpg_.webp',
          title: '四川成都到海螺沟旅游燕子沟3天2晚纯玩跟团三日游温泉游中青旅',
          price: '299',
          peopleNum: '434'
        }, {
          type: '东京 | 自由行',
          img: 'https://gw.alicdn.com/bao/uploaded/i1/2438506708/TB2xKvZayqAXuNjy1XdXXaYcVXa_!!2438506708.jpg_400x400q75.jpg_.webp',
          title: '北京直飞东京大阪5-7天特价机票自由行 五星全日空往返 日本旅游',
          price: '2499',
          peopleNum: '634'
        }, {
          type: '香港 | 跟团游',
          img: 'https://gw.alicdn.com/bao/uploaded/i3/2120928523/TB2RlJjXNjxQeBjy1zbXXbqApXa_!!2120928523.jpg_400x400q75.jpg_.webp',
          title: '春节抢全国双飞港澳游5天4晚自由行迪士尼海洋公园香港澳门旅游团',
          price: '899',
          peopleNum: '1854'
        }, {
          type: '西安 | 跟团游',
          img: 'https://gw.alicdn.com/i3/2697550341/TB2Jey3qVXXXXbzXpXXXXXXXXXX_!!2697550341.jpg_400x400q75.jpg_.webp',
          title: '飞猪专线陕西西安旅游兵马俑一日游纯玩跟团游含华清池兵马俑门票',
          price: '235',
          peopleNum: '4676'
        }
      ]
    },

    loadMore:function(){
      const loadTimes = this.data.loadTimes;
      const perLoad = this.data.perLoad;
      let temArr = this.data.likePlace.slice((loadTimes * perLoad), (loadTimes*perLoad)+perLoad);
      if(temArr.length<=0){
        return;
      }

      wx.showLoading({
        title: '加载中',
      });
      setTimeout(() => {
        let youlikeArr = this.data.youlike.slice();
        youlikeArr.push(...temArr);
        this.setData({
          youlike: youlikeArr,
          loadTimes: loadTimes + 1
        },()=>{
          wx.hideLoading();
        })
      },1000);
    },

    onLoad: function (options) {
      // Do some initialize when page load.
    },
    onReady: function () {
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
      this.loadMore();
    }
})

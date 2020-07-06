//index.js
//获取应用实例
const app = getApp()
import { request } from '../../static/js/api.js';
Page({
  data: {
    swiperList: [], // 轮播图数据
    navgetList: [], // 导航数据
    goodsBox: [], // 商品列表
  },
  onLoad: function () {
    this.getSwiperData();
    this.getNavData();
    this.getGoodsData();
  },
  getSwiperData() {
    let _this = this; 
    let { swiperList } = _this.data;
    request({url: '/home/swiperdata'})
      .then(res => {
        swiperList = res.data.message;
        _this.setData({
          swiperList
        })
      })
  },
  getNavData() {
    let _this = this; 
    let { navgetList } = _this.data;
    request({url: '/home/catitems'})
      .then(res => {
        navgetList = res.data.message;
        _this.setData({
          navgetList
        })
      })
  },
  getGoodsData() {
    let _this = this; 
    let { goodsBox } = _this.data;
    request({url: '/home/floordata'})
      .then(res => {
        goodsBox = res.data.message;
        _this.setData({
          goodsBox
        })
      })
  }
})

// pages/goodsDetail.js
import { request } from '../../static/js/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetailList: [],
    goodsId: 40000,
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        let { goodsDetailList, goodsList, goodsId } = this.data;
    let Cates = wx.getStorageSync('Cates');
    if (!Cates) {
      this.setData({
        goodsId:options.goods_id || goodsId
      });
      this.getGoodsDetailData();
    } else {
      if (Date.now() - Cates.time >= 1000*50) {
        this.getGoodsDetailData();
      } else {
        goodsDetailList = Cates.data;
        goodsList = goodsDetailList.pics;
        this.setData({
          goodsDetailList,
          goodsList
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getGoodsDetailData() {
    let { goodsDetailList, goodsList, goodsId } = this.data;
    request({url:'/goods/detail',data:{goods_id: Number(goodsId)}})
      .then((res) => {
        wx.setStorageSync('Cates', {data:res.data.message,time:Date.now()});
        goodsDetailList = res.data.message;
        goodsList = goodsDetailList.pics;
        this.setData({
          goodsDetailList,
          goodsList
        })
      })
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
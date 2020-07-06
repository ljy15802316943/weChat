// pages/goodsDetail.js
import { request } from '../../static/js/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetailList: [],
    goodsId: 40000,
    goodsList: [],
    goodsData: {},
    urls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { goodsId } = this.data;
    this.setData({
      goodsId:options.goods_id || goodsId
    });
    this.getGoodsDetailData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getGoodsDetailData() {
    let { goodsDetailList, goodsList, urls, goodsId } = this.data;
    request({url:'/goods/detail',data:{goods_id: Number(goodsId)}})
      .then((res) => {
        goodsDetailList = res.data.message;
        goodsList = goodsDetailList.pics;
        urls = goodsList.map((k, v) => k.pics_mid);
        this.setData({
          goodsDetailList,
          goodsList,
          goodsData: {
            goods_name: res.data.message.goods_name,
            goods_price: res.data.message.goods_price,
            goods_introduce: res.data.message.goods_introduce.replace(/\.webp/g,'.jpg')
          },
          urls
        })
      })
  },

  handleGoodsList(e) {
    let current = e.currentTarget.dataset.index;
    let { urls } = this.data;
    wx.previewImage({
      current: urls[current], // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
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
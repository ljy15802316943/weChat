// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    jieSuan: {},
    CartData: {},
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let jieSuan = wx.getStorageSync('jieSuan');
    let CartData = wx.getStorageSync('CartData');
    let cart = wx.getStorageSync('cart').filter(v => v.checkbox);
    this.setData({
      cart,
      jieSuan,
      CartData,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
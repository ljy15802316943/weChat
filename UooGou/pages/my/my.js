// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userNavNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let userInfo = wx.getStorageSync('userInfo')||{};
    let userNavNum = (wx.getStorageSync('shouchang')||[]).length;
    this.setData({
      userInfo,
      userNavNum
    });
  },
  // 拨打电话
  handleUserPhone(e) {
    let { type } = e.currentTarget.dataset;
    wx.makePhoneCall({
      phoneNumber: type, //仅为示例，并非真实的电话号码
      fail(err) {
        console.log(err);
      }
    })
  },
  getUserInfo(e) {
    let { userInfo } = e.detail; 
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo
    });
  }
})
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [
      {
        id: 0,
        text: '全部订单',
        isActive: true
      },
      {
        id: 1,
        text: '待付款',
        isActive: false
      },
      {
        id: 2,
        text: '待收货',
        isActive: false
      },
      {
        id: 3,
        text: '退款退货',
        isActive: false
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { tabBar } = this.data;
    let id = Number(options.type)-1;
    tabBar.forEach(v => v.id === id ? v.isActive = true : v.isActive = false);
    this.setData({
      tabBar
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

  handleTabBar(e) {
    let { tabBar } = this.data;
    let { id } = e.currentTarget.dataset;
    tabBar.forEach(v => v.id===id?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar
    })
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
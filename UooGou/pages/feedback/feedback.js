// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [
      {
        id: 0,
        text: '体验问题',
        isActive: true
      },
      {
        id: 1,
        text: '商品、商家投诉',
        isActive: false
      }
    ],
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
  // 点击导航栏
  handleTabBar(e) {
    let { tabBar } = this.data;
    let { id } = e.currentTarget.dataset;
    tabBar.forEach(v => v.id===id?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar,
    })
  },
})
// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [
      {
        id: 0,
        name: '商品收藏',
        isActive: true
      },
      {
        id: 1,
        name: '品牌收藏',
        isActive: false
      },
      {
        id: 2,
        name: '店铺收藏',
        isActive: false
      },
      {
        id: 3,
        name: '浏览足迹',
        isActive: false
      },
    ],
    type: 1,
    shouchang: []
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
    let shouchang = wx.getStorageSync('shouchang')||[];
    this.setData({
      shouchang
    })
  },
  // 点击tabBar栏
  handleTabNarBtn(e) {
    let { tabBar } = this.data;
    let { id } = e.currentTarget.dataset;
    tabBar.forEach(v => v.id===id?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar
    })
  },
  // 点击分类栏
  handleTie(e) {
    let { type } = e.currentTarget.dataset;
    console.log(type);
    this.setData({
      type
    });
    if (type != 1) {
      wx.showToast({
        title: '暂无商品，请等待···',
        icon: 'none',
        mask: false,
        success: (result)=>{
          setTimeout(() => {
            type=1;
            this.setData({
              type
            })
          }, 1500);
        }
      });
    }
  }, 
  // 点击商品列表跳转商品详情
  handleGoodsList(e) {
    let { goodsid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?goods_id=' + goodsid
    })
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
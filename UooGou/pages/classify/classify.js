// pages/classify/classify.js
import { request } from '../../static/js/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorList: [],
    catId: 1,
    rightData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let Cates = wx.getStorageSync('Cates');
    if (!Cates) {
      this.getcategorData();
    } else {
      // 缓存时间5分钟
      if (Date.now() - Cates.time > 1000*50) {
        this.getcategorData();
      } else {
        let { categorList, rightData } = this.data
        categorList = Cates.data;
        rightData = categorList[0].children;
        this.setData({
          categorList,
          rightData
        })
      };
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  getcategorData() {
    let _this = this;
    let { categorList, rightData } = _this.data;
    request({url: '/categories'})
      .then( (res) => {
        wx.setStorageSync("Cates",{time: Date.now(),data: res.data.message});

        categorList = res.data.message;
        rightData = categorList[0].children;
        
        _this.setData({
          categorList,
          rightData
        });
      })
  },

  handleBarItem(e) {
    let { catId, rightData, categorList } = this.data
    catId = e.target.dataset.id;
    rightData = categorList.filter((res) => res.cat_id === catId)[0].children;
    this.setData({
      catId,
      rightData
    });
  },
  
  handleCatItem(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goodsList/goodsList?id=' + id
    });
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
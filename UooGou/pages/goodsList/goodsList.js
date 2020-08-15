import { request } from '../../static/js/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryParams: {
      query: "",
      cid: "",
      pagenum: 1,
      pagesize: 10
    },
    tabs: [
      {
        id: 0,
        name: '综合',
        isActive: true,
      },
      {
        id: 1,
        name: '销量',
        isActive: false
      },
      {
        id: 2,
        name: '价格',
        isActive: false,
        ascendImg: '../../static/img/ascend.png',
        selectAscendImg: '../../static/img/selectAscend.png',
        dropImg: '../../static/img/drop.png',
        selectDropImg: '../../static/img/selectDrop.png'
      }
    ],
    goodsList: [],
    total: null,
    imgIndex: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { queryParams } = this.data;
    queryParams.cid = options.id || '';
    queryParams.query = options.query || '';
    this.setData({
      queryParams
    });
    this.getGoodsList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getGoodsList() {
    request({url: "/goods/search", data:{...this.data.queryParams}})
      .then((res) => {
        let { goodsList, total } = this.data;
        total = res.data.message.total;
        goodsList = [...goodsList,...res.data.message.goods];
        this.setData({
          goodsList,
          total
        })
        wx.stopPullDownRefresh();
      })
  },

  handleTabsItem (e) {
    let { tabs, imgIndex, goodsList } = this.data;
    let { dataset } = e.currentTarget;
    tabs.forEach((k,v) => k.id===dataset.id?k.isActive=true:k.isActive=false);
    this.setData({
      tabs
    });
    if (dataset.name == '价格') {
      if (imgIndex > 1) {
        imgIndex = 1
        goodsList.sort(this.ascend("goods_price"));
      } else {
        imgIndex++;
        goodsList.sort(this.drop("goods_price"));
      };
      this.setData({
        imgIndex,
        goodsList
      });
    } else {
      this.setData({
        imgIndex: 1
      });
    }
  },

  handleGoodsList(e) {
    let { goodsid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?goods_id=' + goodsid
    })
  },

  ascend(p){ //这是比较函数
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return a - b; //升序
    }
  },

  drop(p){ //这是比较函数
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return b - a; //升序
    }
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
    let { queryParams, goodsList } = this.data;
    goodsList = [];
    queryParams.pagenum=1;
    this.setData({
      queryParams,
      goodsList
    })
    this.getGoodsList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let { goodsList, total, queryParams } = this.data; 
    if (goodsList.length>=total) {
      wx.showToast({
        title: '已加载全部',
        icon: 'none',
        duration: 1500
      })
    } else {
      queryParams.pagenum++;
      this.getGoodsList();
    };
    this.setData({
      queryParams
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
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
    urls: [],
    scroTopHidden: false
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

  // 轮播图预览
  handleGoodsList(e) {
    let current = e.currentTarget.dataset.index;
    let { urls } = this.data;
    wx.previewImage({
      current: urls[current], // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  },
  // 监听页面滚动
  onPageScroll(e) {
    let { scroTopHidden } = this.data;
    if (e.scrollTop >= 120) {
      scroTopHidden = true;
    } else {
      scroTopHidden = false;
    }
    this.setData({
      scroTopHidden
    })
  },
  // 页面回到顶部
  handleVBtn() {
    wx.pageScrollTo({
      scrollTop: 0
    });
  }
})
// pages/goodsDetail.js
import { request } from '../../static/js/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    goodsId: null,
    goodsData: {},
    urls: [],
    scroTopHidden: false,
    list: []
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
    let { goodsList, goodsData, urls, goodsId } = this.data;
    request({url:'/goods/detail',data:{goods_id: Number(goodsId)}})
      .then((res) => {
        goodsList = res.data.message.pics;
        urls = goodsList.map((k, v) => k.pics_mid);
        goodsData = res.data.message;
        goodsData.goods_introduce = goodsData.goods_introduce.replace(/\.webp/g, '.jpg');
        this.setData({
          goodsList,
          goodsData,
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
  },
  // 加入购物车
  handleCartAdd() {
    let { goodsData } = this.data;
    let cart = wx.getStorageSync('cart') || [];
    let index = cart.findIndex(v => v.goods_id === goodsData.goods_id);
    if (index === -1) {
      // 商品不存在
      goodsData.num = 1;
      goodsData.checkbox = false;
      cart.push(goodsData);
    } else {
      // 商品存在
      cart[index].num += 1;
    }
    wx.setStorageSync('cart', cart);
    // 加入购物车成功提示
    wx.showToast({
      title: '加入购物车',
      icon: 'success',
      mask: true
    });
  }
})
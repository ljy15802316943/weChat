import { showModal, showToast } from '../../static/js/public'
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let jieSuan = wx.getStorageSync('jieSuan');
    let CartData = wx.getStorageSync('CartData');
    let cart = wx.getStorageSync('cart').filter(v => v.checkbox);
    this.setData({
      cart,
      jieSuan,
      CartData,
    });
  },
  handlePay() {
    let cart = wx.getStorageSync('cart')||[];
    let order = [];
    showModal({title: '提示消息', content: '您将选择支付商品'})
      .then(res => {
        if (res.confirm) {
          showToast('支付成功');
          order = cart.filter((res) => res.checkbox);
          cart = cart.filter((res) => !res.checkbox);
          cart.map(res => {
            res.timestamp = new Date().getTime();
          })
          wx.setStorageSync('order', order);
          wx.setStorageSync('cart', cart);
          this.setData({
            cart: []
          });
        }
      })
  }
})
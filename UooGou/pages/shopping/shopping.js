import { deleteCart, showToast } from '../../static/js/public'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收货地址
    CartData: {},
    // 购物车列表数据
    cart: [],
    jieSuan: {
      checkAll: false,
      allNum: 0,
      allPrice: 0
    },
    disabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow() {
    let { disabled } = this.data;
    let CartData = wx.getStorageSync('CartData') || {};
    let cart = wx.getStorageSync('cart') || [];
    if (cart.length!=0) {
      disabled=false;
    } else {
      disabled = true;
    }
    this.setData({
      CartData,
      disabled
    });
    this.setCart(cart);
  },
  // 获取用户地址权限
  handleAddress() {
    let _this = this;
    wx.getSetting({
      success(res) {
        let type = res.authSetting["scope.address"]; 
        if (type===true||type===undefined) {
          _this.getAddress();
        } else {
          wx.openSetting({
            success: (result)=>{
              console.log(result,222);
              _this.getAddress();
            }
          });
        }
      }
    });
  },
  // 获取地址数据
  getAddress() {
    let _this = this;
    wx.chooseAddress({
      success(data) {
        let CartData = {
          address: data.provinceName + data.cityName + data.countyName + data.detailInfo,
          userName: data.userName,
          phone: data.telNumber
        }
        _this.setData({
          CartData
        })
        wx.setStorageSync('CartData', CartData);
      }
    })
  },
  // 勾选购物车列表
  checkboxChange (e) {
    let { goodsid } = e.currentTarget.dataset;
    let cart = wx.getStorageSync('cart');
    let index = cart.findIndex(v => v.goods_id === goodsid);
    cart[index].checkbox=!cart[index].checkbox;
    this.setCart(cart);
  },
  // 全选按钮
  handleCheckAll (e) {
    let { jieSuan } = this.data;
    let cart = wx.getStorageSync('cart') || [];
   
    jieSuan.checkAll = !jieSuan.checkAll;
    cart.forEach(v => jieSuan.checkAll ? v.checkbox = true : v.checkbox=false);

    this.setCart(cart);
  },
  // 运算符
  handleNum(e) {
    let { goodsid, operation } = e.currentTarget.dataset;
    let { jieSuan } = this.data;
    let cart = wx.getStorageSync('cart');
    let index = cart.findIndex(v => v.goods_id === goodsid);
    
    let _this = this;
    if (operation === '-') {
      if (cart[index].num <= 1) {
        cart[index].num = 1;
        deleteCart()
          .then(res => {
            if (res.confirm) {
              cart.splice(index,1);
              jieSuan.checkAll = cart.length>=1 ? jieSuan.checkAll : false;
            } else {
              cart[index].num = 1;
            }
            _this.setCart(cart);
          })
      } else {
        cart[index].num--;
      }
    } else {
      cart[index].num++;
    };

    this.setCart(cart);
  },
  // 点击结算
  handlePay() {
    let { CartData, jieSuan } = this.data;
    if (!CartData.address) {
      showToast('您未填写地址!')
      return;
    }
    if (!jieSuan.allNum) {
      showToast('您未选择商品!')
      return;
    };

    wx.setStorageSync('jieSuan', jieSuan);
    wx.navigateTo({
      url: '/pages/pay/pay?a=111'
    });
  },
  setCart(cart) {
    let { jieSuan } = this.data;

    jieSuan.allNum = 0;
    jieSuan.allPrice = 0;
    jieSuan.checkAll = cart.length>=1 ? true : false;
    cart.forEach(v => {
      if (v.checkbox) {
        jieSuan.allNum += v.num;
        jieSuan.allPrice += v.goods_price * v.num;
      } else {
        jieSuan.checkAll = false;
      }
    });

    wx.setStorageSync('cart', cart);
    this.setData({
      jieSuan,
      cart
    })
  }
})
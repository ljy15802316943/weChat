// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收货地址
    CarData: {},
    // 购物车列表数据
    cartList: [],
    jieSuan: {
      checkAll: false,
      allNum: 0,
      allPrice: 0,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow() {
    let { jieSuan } = this.data;
    let CarData = wx.getStorageSync('CarData') || {};
    let cartList = wx.getStorageSync('cart') || [];

    jieSuan.checkAll = true;
    jieSuan.allNum = 0;
    jieSuan.allPrice = 0;
    cartList.forEach(k => {
      if (k.checkbox) {
        jieSuan.allNum += k.num;
        jieSuan.allPrice += k.num * k.goods_price;
      } else {
        jieSuan.checkAll = false;
      }
    })

    this.setData({
      jieSuan,
      CarData,
      cartList
    });
  },
  // 获取用户地址权限
  handleAddress() {
    wx.getSetting({
      success(res) {
        if (JSON.stringify(res.authSetting) === '{}' || res.authSetting["scope.address"]) {
          wx.chooseAddress({
            success(data) {
              let CarData = {
                address: data.provinceName + data.cityName + data.countyName + data.detailInfo,
                userName: data.userName,
                phone: data.telNumber
              }
              wx.setStorageSync('CarData', CarData);
            }
          })
        } else {
          wx.openSetting();
        }
      }
    });
  },
  // 勾选购物车列表
  checkboxChange(e) {
    let { jieSuan, cartList } = this.data;
    let { goodsid } = e.currentTarget.dataset;

    let index = cartList.findIndex(k => k.goods_id === goodsid);
    cartList[index].checkbox = !cartList[index].checkbox;

    jieSuan.checkAll = true;
    jieSuan.allNum = 0;
    jieSuan.allPrice = 0;
    cartList.forEach(k => {
      if (k.checkbox) {
        jieSuan.allNum += k.num;
        jieSuan.allPrice += k.num * k.goods_price;
      } else {
        jieSuan.checkAll = false;
      }
    })

    wx.setStorageSync('cart', cartList);
    this.setData({
      jieSuan,
      cartList
    });
  },
  // 全选按钮
  handleCheckAll() {
    let { jieSuan, cartList } = this.data;
    jieSuan.checkAll = !jieSuan.checkAll;
    cartList.forEach(k => {
      if (jieSuan.checkAll) {
        k.checkbox = true;
        jieSuan.allNum += k.num;
        jieSuan.allPrice += k.num * k.goods_price;
      } else {
        k.checkbox = false;
        jieSuan.allNum = 0;
        jieSuan.allPrice = 0;
      }
    });
    this.setData({
      cartList,
      jieSuan,
    });
    wx.setStorageSync('cart', cartList);
  },
  handleNum(e) {
    let { jieSuan } = this.data;
    let { operation, goodsid } = e.currentTarget.dataset;
    let cartList = wx.getStorageSync('cart') || [];
    let index = cartList.findIndex(k => k.goods_id === goodsid);

    let _this = this;
    if (operation === '-') {
      cartList[index].num--;
      if (cartList[index].num < 1) {
        cartList[index].num = 1;
        wx.showModal({
          title: '确定要删除商品吗？',
          content: '',
          showCancel: true,
          cancelText: '取消',
          cancelColor: '#000000',
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (result) => {
            if (result.confirm) {
              cartList.splice(index, 1);

              jieSuan.checkAll = true;
              jieSuan.allNum = 0;
              jieSuan.allPrice = 0;
              cartList.forEach(k => {
                if (k.checkbox) {
                  jieSuan.allNum += k.num;
                  jieSuan.allPrice += k.num * k.goods_price;
                } else {
                  jieSuan.checkAll = false;
                }
              })

              _this.setData({
                cartList,
                jieSuan,
              });
              wx.setStorageSync('cart', cartList);
            }
          },
          fail: () => { },
          complete: () => { }
        });
      };
    } else {
      cartList[index].num++;
    }

    jieSuan.allNum = 0;
    jieSuan.allPrice = 0;
    cartList.forEach(k => {
      if (k.checkbox) {
        jieSuan.allNum += k.num;
        jieSuan.allPrice += k.num * k.goods_price;
      }
    })

    wx.setStorageSync('cart', cartList);
    this.setData({
      cartList,
      jieSuan,
    });
  }
})
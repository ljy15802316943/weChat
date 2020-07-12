// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CarData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow() {
    let CarData = wx.getStorageSync('CarData');
    if (CarData) {
      this.setData({
        CarData
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  handleAddress() {
    wx.getSetting({
      success(res) {
        if (JSON.stringify(res.authSetting) === '{}'　|| res.authSetting["scope.address"] ) {
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
  }
})
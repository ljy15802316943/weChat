
import { request } from '../../static/js/api';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeId: '',
    qsearch: [],
    inputValue: '',
    valueNone: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 输入框输入内容发起请求
  searchInput(e) {
    let { value } = e.detail;
    if (!value.trim()) {
      this.setData({
        qsearch: value,
        valueNone: false
      })
      return
    }
    // 实现防抖，概念：输入过程中不执行，等最后一次输入完成在执行程序。
    let { timeId } = this.data;
    clearTimeout(timeId);
    timeId=setTimeout(() => {
      request({url: '/goods/qsearch',data:{query: value}})
      .then((res) => {
        console.log(res.data.message);
        this.setData({
          qsearch: res.data.message,
          valueNone: true,
        })
      })
    },1000)
    this.setData({
      timeId
    })
  },
  // 清空输入框
  handleEmpty() {
    this.setData({
      qsearch: [],
      inputValue: '',
      valueNone: false
    })
  }
})
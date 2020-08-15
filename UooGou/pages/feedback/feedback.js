import { showToast } from '../../static/js/public'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fbList: [
      {
        id: 0,
        text: '功能建议'
      },
      {
        id: 1,
        text: '购买遇到问题'
      },
      {
        id: 2,
        text: '商品售后问题'
      },
      {
        id: 3,
        text: '其他'
      }
    ],
    fbIndex: 0,
    tempFilePaths:[],//上传图片数组
    textareaValue: '',
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

  },
  // 点击标题栏
  handleFbIndex(e) {
    let { fbIndex } = this.data;
    let { index } = e.currentTarget.dataset;
    fbIndex=index;
    console.log(index,'index');
    this.setData({
      fbIndex
    })
  },
  // 输入框
  textareaInput(e) {
    let { value } = e.detail;
    this.setData({
      textareaValue: value
    })
  },
  // 上传图片
  handleUploadImg() {
    let _this = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        let { tempFilePaths } = _this.data;
        // tempFilePath可以作为img标签的src属性显示图片
        tempFilePaths.push(res.tempFilePaths);
        
        _this.setData({
          tempFilePaths
        })
      }
    })
  },
  // 删除图片
  handleDelete(e) {
    let { tempFilePaths } = this.data;
    let { index } = e.currentTarget.dataset;
    tempFilePaths.splice(index,1);
    this.setData({
      tempFilePaths
    })
  },
  // 提交
  submit() {
    let { textareaValue } = this.data;
    if (!textareaValue.trim()) {
      showToast('请输入内容','none');
      return;
    }
    showToast('提交成功', 'none');
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 1500);
  }
})
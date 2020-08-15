// components/swiperBox/swiperBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSwiper(e) {
      let { goodsid } = e.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/goodsDetail/goodsDetail?goods_id=' + goodsid
      })
    }
  }
})

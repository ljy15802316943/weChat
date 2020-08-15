// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsBox: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleGoodsItem(e) {
      let query = e.currentTarget.dataset.navigatorurl.split('=')[1];
      wx.navigateTo({
        url: '/pages/goodsList/goodsList?query=' + query
      });
    },
  }
})

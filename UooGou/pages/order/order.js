// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [
      {
        id: 0,
        text: '全部订单',
        isActive: true
      },
      {
        id: 1,
        text: '待付款',
        isActive: false
      },
      {
        id: 2,
        text: '待收货',
        isActive: false
      },
      {
        id: 3,
        text: '退款退货',
        isActive: false
      },
    ],
    orderList: [
      {
        id: 0,
        list: [
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20200812000000001245',
            orderPrice: '订单价格',
            orderPriceNum: '13618',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD202008120000000012450234',
            orderPrice: '订单价格',
            orderPriceNum: '7768',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '9969',
            orderType: '订单类型',
            orderTypeContent: '已付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '16868',
            orderType: '订单类型',
            orderTypeContent: '已付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9106',
            orderType: '订单类型',
            orderTypeContent: '已付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9166',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2018/12/9 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001243242',
            orderPrice: '订单价格',
            orderPriceNum: '19680',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2018/2/9 下午9:36:25',
          },
        ]
      },
      {
        id: 1,
        list: [
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20200812000000001245',
            orderPrice: '订单价格',
            orderPriceNum: '13618',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD202008120000000012450234',
            orderPrice: '订单价格',
            orderPriceNum: '7768',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '9969',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '16868',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9106',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9166',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2018/12/9 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001243242',
            orderPrice: '订单价格',
            orderPriceNum: '19680',
            orderType: '订单类型',
            orderTypeContent: '待付款',
            orderTime: '订单日期',
            orderTimeNum: '2018/2/9 下午9:36:25',
          },
        ]
      },
      {
        id: 2,
        list: [
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20200812000000001245',
            orderPrice: '订单价格',
            orderPriceNum: '13618',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD202008120000000012450234',
            orderPrice: '订单价格',
            orderPriceNum: '7768',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '9969',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '16868',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9106',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9166',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2018/12/9 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001243242',
            orderPrice: '订单价格',
            orderPriceNum: '19680',
            orderType: '订单类型',
            orderTypeContent: '待收货',
            orderTime: '订单日期',
            orderTimeNum: '2018/2/9 下午9:36:25',
          },
        ]
      },
      {
        id: 3,
        list: [
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20200812000000001245',
            orderPrice: '订单价格',
            orderPriceNum: '13618',
            orderType: '订单类型',
            orderTypeContent: '退款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD202008120000000012450234',
            orderPrice: '订单价格',
            orderPriceNum: '7768',
            orderType: '订单类型',
            orderTypeContent: '退款',
            orderTime: '订单日期',
            orderTimeNum: '2020/8/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '9969',
            orderType: '订单类型',
            orderTypeContent: '退款',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001242342',
            orderPrice: '订单价格',
            orderPriceNum: '16868',
            orderType: '订单类型',
            orderTypeContent: '退货',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9106',
            orderType: '订单类型',
            orderTypeContent: '退货',
            orderTime: '订单日期',
            orderTimeNum: '2019/12/12 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001234352',
            orderPrice: '订单价格',
            orderPriceNum: '9166',
            orderType: '订单类型',
            orderTypeContent: '退款',
            orderTime: '订单日期',
            orderTimeNum: '2018/12/9 下午9:36:25',
          },
          {
            orderContent: '订单编号',
            orderNum: 'HMDD20190812000000001243242',
            orderPrice: '订单价格',
            orderPriceNum: '19680',
            orderType: '订单类型',
            orderTypeContent: '退货',
            orderTime: '订单日期',
            orderTimeNum: '2018/2/9 下午9:36:25',
          },
        ]
      },
    ],
    orders: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { tabBar, orders, orderList } = this.data;
    let id = Number(options.type)-1;
    tabBar.forEach(v => v.id === id ? v.isActive = true : v.isActive = false);
    orders = orderList[id];
    this.setData({
      tabBar,
      orders
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  handleTabBar(e) {
    let { tabBar, orders, orderList } = this.data;
    let { id } = e.currentTarget.dataset;
    tabBar.forEach(v => v.id===id?v.isActive=true:v.isActive=false);
    orders = orderList[id];
    this.setData({
      tabBar,
      orders
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
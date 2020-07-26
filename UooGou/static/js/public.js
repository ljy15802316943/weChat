// 购物车列表删除提示
let deleteCart = function () {
  return new Promise((resolve,reject) => {
    wx.showModal({
      title: '确定要删除吗？',
      success: (res) => {
        resolve(res);
      },
      fail: (err)=>{
        reject(err)
      }
    });
  })
}


export {
  deleteCart
}
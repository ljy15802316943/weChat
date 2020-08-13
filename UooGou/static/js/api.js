let requestIndex = 0;
const request = function (params) {
  requestIndex++;
  
  return new Promise((resolve,reject) => {
    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success (result) {
        resolve(result);
      },
      fail (err) {
        reject(err);
      },
      complete () {
        requestIndex--;
        if (requestIndex === 0) {
          wx.hideLoading();
        }
      }
    });
  })
}

export {
  request
}

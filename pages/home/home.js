// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [{
        name: 'boke',
        age: 18,
        sex: 1
      },
      {
        name: 'boke2',
        age: 38,
        sex: 1
      },
      {
        name: 'boke3',
        age: 48,
        sex: 1
      }
    ],
    counter: 0
  },

  handleBtnClick() {

    this.setData({
      counter: this.data.counter + 1
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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
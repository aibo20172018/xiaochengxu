// pages/index/welcome.js
/*
event 事件  navigateTo 和 redirectTo
*/
Page({
  photos: function (event) {
    wx.redirectTo({
         url: '../potos/potos',
       });
    

  },
  back: function () {
    console.log("王者归来")
  },
  fuxing :function(event){
     wx.navigateTo({
       url: '../fuxing/fuxing',
       
     })

  },


  /**
   * 页面的初始数据  
   */
  data: {
    
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
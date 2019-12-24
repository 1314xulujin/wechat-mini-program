// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=1369669552,4087886178&fm=26&gp=0.jpg",
      url: "pages/item/index?id=1002"
    }, {
      imgUrl: "http://img1.imgtn.bdimg.com/it/u=4167251516,4016921871&fm=26&gp=0.jpg",
      url: "pages/item/index?id=1005"
    }, {
      imgUrl: "http://img4.imgtn.bdimg.com/it/u=2975992454,3361088742&fm=26&gp=0.jpg",
      url: "pages/item/index?id=1008"
    }],
    swiperOption: {
      indicatorDots : true,
      indicatorColor : "pink",
      indicatorActiveColor:"orange",
      autoplay : true,
      interval : 1000,
      circular : true,
      vertical : false
    },
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  
})
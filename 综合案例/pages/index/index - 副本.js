// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerList:[ //轮播图数据
        {
          "id": 1000,
          "imgUrl": "https://img.alicdn.com/simba/img/TB1b1d4oNv1gK0jSZFFSuv0sXXa.jpg"
        },
        {
          "id": 1001,
          "imgUrl": "https://img.alicdn.com/tfs/TB1UsQQop67gK0jSZPfXXahhFXa-520-280.jpg_q90_.webp"
        },
        {
          "id": 1002,
          "imgUrl": "https://img.alicdn.com/simba/img/TB1hISkXUH1gK0jSZSySuttlpXa.jpg"
        },
        {
          "id": 1003,
          "imgUrl": "https://img.alicdn.com/simba/img/TB16V89oNz1gK0jSZSgSuuvwpXa.jpg"
        }
      ],
      options:{//轮播图的配置
        autoplay:true,
        interval:1000,
        circular:true,
        indicatorDots:true,
        indicatorColor:"#0eb6ff"	
      },
      noticeList:[],//系统提示消息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //获取轮播图的数据
      wx.request({
        url: 'https://www.fastmock.site/mock/b1efeced7f26d83cf82c81f022d83dc6/hmsx/getBannerList',
        success:(res)=>{
          console.log(res);
          //重新设置数据
           this.setData({
             bannerList:res.data.data
           })
        }
      })
      //获取系统消息
      wx.request({
        url: 'https://www.fastmock.site/mock/b1efeced7f26d83cf82c81f022d83dc6/hmsx/getNotice',
        success:(res)=>{
          console.log(res);
          this.setData({
            noticeList:res.data.data
          })
        }
      })
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

  },
  scanCode(){
    console.log('正在进行扫码');
    //调用微信的扫描api
    wx.scanCode({
      onlyFromCamera:true,
      success:(res)=>{
        console.log(res)
        wx.showModal({
          title: '扫码结果',
          content: res.result,
        })
        //跳转到对应的页面 
      }
    })
  }
})
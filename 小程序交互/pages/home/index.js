// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:"教育改变生活",
      tmp:"",
      sex:3,
      arr:['苹果','香蕉','橘子'],
      obj:{
        name:"张三",
        age:20,
        sex:"男"
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('小程序页面加载完毕!');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('小程序页面初次渲染完毕! 只触发一次');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('小程序页面显示完毕!');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('小程序页面隐藏完毕!');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('小程序页面销毁完毕!');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户正在下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("小程序已经滚到底了!")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户正在分享')
  },
  tapHandler(e){
    console.log(e);
    // console.log('触摸事件!!!!');
    // console.log(this);
    // this.data.title = 'sssss'; // 此种方式可以改变当前页面实例中的数据 ,但是无法更新到页面的内容中
    //setData()  用于设置小程序页面中的数据实现更新渲染
    this.setData({
      // title:"有内鬼, 交易取消!"
      title: this.data.tmp
    })
  },
  inputHandler(e){
    console.log(e);
    this.setData({
      tmp:e.detail.value
    })
  },
  submitHandler(e){
    console.log(e);
  },
  changeSex(){
    if(this.data.sex==0){
       this.setData({
          sex:1
       })
    }else{
      this.setData({
        sex: 0
      })
    }
  }
})
// pages/index/index.js
//获取全局App下的数据
let App = getApp();
//导入自己封装好 api 接口模块
import API from "../../utils/api.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [ //轮播图数据
      // {
      //   "id": 1000,
      //   "imgUrl": "https://img.alicdn.com/simba/img/TB1b1d4oNv1gK0jSZFFSuv0sXXa.jpg"
      // },
      // {
      //   "id": 1001,
      //   "imgUrl": "https://img.alicdn.com/tfs/TB1UsQQop67gK0jSZPfXXahhFXa-520-280.jpg_q90_.webp"
      // },
      // {
      //   "id": 1002,
      //   "imgUrl": "https://img.alicdn.com/simba/img/TB1hISkXUH1gK0jSZSySuttlpXa.jpg"
      // },
      // {
      //   "id": 1003,
      //   "imgUrl": "https://img.alicdn.com/simba/img/TB16V89oNz1gK0jSZSgSuuvwpXa.jpg"
      // }
    ],
    options: { //轮播图的配置
      autoplay: true,
      interval: 1000,
      circular: true,
      indicatorDots: true,
      indicatorColor: "#0eb6ff"
    },
    noticeList: [], //系统提示消息
    goodsSorts: [], //商品分类数据
    scrollXList: [], //今日王牌大赏数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取轮播图的数据
    API.getBannerList().then((res) => {
      //重新设置数据
      this.setData({
        bannerList: res.data.data
      })
    })

    //获取系统消息
    API.getNotice().then((res) => {
      this.setData({
        noticeList: res.data.data
      })
    })

    //获取商品分类数据
    API.getGoodsSorts().then((res) => {
      //  console.log(res.data);
      this.setData({
        goodsSorts: res.data.data
      })
    })

    //获取王牌大赏数据
    API.getscrollXList().then((res) => {
      this.setData({
        scrollXList: res.data.data
      })
    })
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
  scanCode() {
    console.log('正在进行扫码');
    //调用微信的扫描api
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        wx.showModal({
          title: '扫码结果',
          content: res.result,
        })
        //跳转到对应的页面 
      }
    })
  },
  addInCart(e) { //添加购物车
  console.log(this.data.scrollXList)
    // console.log(App);
    //  console.log(e.target.id);
    let id = e.target.id;
    let {
      myCartList
    } = App.globalData;
    // console.log(this);
    //判断当前加入购物车商品是否曾经在购物中
    let cartIndex = -1;//-1表示没找到
    let tmp = myCartList.filter((item, index) => {
      if (item.id == id) {
        cartIndex = index;
        return true;
      }
      return false;
    })
    console.log(cartIndex)
    if (cartIndex >= 0) { //表示当前商品已经加入过购物车
      myCartList[cartIndex].count++;
    } else { //当前商品暂未加入过购物车
      //从对应商品中获取到商品的记录信息
      let obj = {
        image: null,
        unit: null,
        price: null,
        name: null,
        count: 1,
        id
      };
      // console.log(this);
      this.data.scrollXList.forEach((item) => {
        if (item.id == id) {
          obj.image = item.image;
          obj.price = item.price;
          obj.unit = item.unit;
          obj.name = item.name;
        }
      })
      myCartList.push(obj); //往购物车中加入商品
    }
    // console.log(tmp,cartIndex);
      //将购物车数据存储到本地存储
      wx.setStorage({
        key: 'myCartList',
        data: myCartList,
      })
      //如果需要服务器多端同步 ,此时还需要再次把购物车数据发送给服务器,不然没有保存
     console.log(myCartList);
  }
})
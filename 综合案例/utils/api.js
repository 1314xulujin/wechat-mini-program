//封装所有的接口方法 - 统一管理接口

//导入请求模块
import ajax from "./request.js";
const getNotice = (params) => ajax.get("/getNotice"); //获取系统消息
const getBannerList = (p) => ajax.get("/getBannerList");//获取轮播图
//获取商品分类
const getGoodsSorts = (p) => ajax.get("/goodsSorts");
//获取今日王牌大赏数据
const getscrollXList = () => ajax.get("/scrollXList");



//模块化工具的规范 ,一定要遵循导出  (跟node.js一样的  commonJS 规范)
module.exports = {
   getNotice,
   getBannerList,
   getGoodsSorts,
   getscrollXList
}
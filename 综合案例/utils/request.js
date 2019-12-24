const baseUrl = 'https://www.fastmock.site/mock/b1efeced7f26d83cf82c81f022d83dc6/hmsx';
//将wx.request() 请求模块封装成一个方法 - 模块
const get = (url,params)=>{ //url 请求地址 , parmas 发送的参数
   return new Promise((resolve,reject)=>{
        wx.request({
          url: baseUrl + url,
          success:(res)=>{
             resolve(res);
          },
          fail:(err)=>{
             reject(err); 
          }
        })
   })
}

//在小程序中,模块化开发 ,每一个文件 都可以视为一个模块 ,每次导出或者引入模块 ,都要遵循对应模块规范
module.exports = {
   get
}

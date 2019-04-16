//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  doLogin(e) {
    console.log(e.detail);
    wx.login({
      success: (res) => {
        console.log(res);
        // 获取登录临时凭证
        const { code } = res;
        // 调用后端，获取微信的session_key, 
        
      }
    })
  }
})

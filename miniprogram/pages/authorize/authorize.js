const app = getApp();
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        var that = this;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            //用户已经授权过
                            wx.switchTab({
                                url: '/pages/mine/mine'
                            })
                        }
                  });
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            //插入登录的用户的相关信息到数据库
            this.setUserInfo(e.detail.userInfo);
            //授权成功后，跳转进入小程序首页
            wx.switchTab({
                url: '/pages/mine/mine'
            })
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title:'警告',
                content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel:false,
                confirmText:'返回授权',
                success:function(res){
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    }
                }
            })
        }
    },
    setUserInfo: function (info) {
      const db = wx.cloud.database()
      console.log(info.userInfo)
      // db.collection('user').add({
      //   data: {
      //     nickName: info.nickName,
      //     avatarUrl: info.avatarUrl,
      //     isVip: 0,
      //   }
      // })
    },

})

const config = require('../../utils/config.js');
var app = getApp();
Page({
  data: {
  	
  },
  onLoad: function () {
  	var that = this;
		config.requstGet(config.getBanner,{},function (res) {
			console.log(res.data.data)
			if (res.data.code==0) {
				var banner = [];
				for (var i = 0; i < res.data.data.length; i++) {
					banner.push(config.baseUrl+res.data.data[i].image);
				}
				that.setData({
					banner:banner
				})
				console.log(banner)
			} 	
  	})
  },
  imgYu:function(e){
		var src = e.currentTarget.dataset.src;//获取data-src
		console.log(e.currentTarget.dataset.yu)
		//图片预览
		wx.previewImage({
			current: src,
			urls:e.currentTarget.dataset.yu // 需要预览的图片http链接列表
		})
	}
});
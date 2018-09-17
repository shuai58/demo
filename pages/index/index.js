const config = require('../../utils/config.js');
var app = getApp();
Page({
	data: {
		 
	},
	onLoad: function () {
		
	},
	getimg:function () {
		var that = this;
   		var ctx = wx.createCanvasContext('shareCanvas')
   		ctx.clearRect(0, 0, 84, 112)
		ctx.save(); // 先保存状态 已便于画完圆再用
        ctx.beginPath(); //开始绘制    
	    // 底图
	    ctx.drawImage('/img/dw.png', 0, 0, 84, 112)
	    // 小程序码
	    var qrImgSize = 62;
	    ctx.arc(84/2, 82/2, qrImgSize/2, 0, Math.PI * 2, false);
    	ctx.clip();//画了圆 再剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
	    ctx.drawImage('/img/21.jpg', (84 - qrImgSize) / 2, 10, qrImgSize, qrImgSize)
	    ctx.restore();
	    ctx.draw(true, setTimeout(function () {
	        wx.canvasToTempFilePath({ //导出图片
	        	width: 84,
	        	height: 112,
	        	destWidth: 84,
	        	destHeight: 112,
	        	canvasId: 'shareCanvas',
	        	success: res => {
	        		console.log(res.tempFilePath)
	        		config.upImgone(config.upload,res.tempFilePath,function (res) {
	        			that.setData({
		        			img:config.baseUrl+res
		        		})
	        		})	
	        	}
	        }, this)
	    }, 100))
	}
})
require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"template": "libs/template-web",
		"url": "module/url",
		"base":"module/base",
		"about":"module/about",
		"banner":"module/banner",
		"atama":"module/atama",
		"hot":"module/hot",
		"loginn":"module/loginn",
		"reg":"module/reg",
		"detaill":"module/detaill",
		"cart":"module/cart"
		//这个名字随意    这个和module下的js文件名字对应
	},
	shim: {
			base:{
				deps:["jquery"]
			},
			banner:{
				deps:["jquery"]
			},
			atama:{
				deps:["jquery"]
			},
			hot:{
				deps:["jquery"]
			},
			loginn:{
				deps:["jquery"]
			},
			reg:{
				deps:["jquery"]
			},
			detaill:{
				deps:["jquery"]
			},
			cart:{
				deps:["jquery"]
			}
	}
})
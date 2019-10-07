$(function(){
	// 为栏目绑定事件
	$("#nav").on("click","li",function(){
		// this = event.currentTarget]
		$("#nav > li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		//拼接时间戳的问题是为了消除缓存
		$("#wrapper").load(url+"?time="+Math.random())
	})
	// 默认选中第yi个li
	$("#first").trigger("click");
});
//页面加载完成后进行跳转
window.onload = function () {
	var enterMain = $("#enterMain");
	var main = $(".main");
	var loading = $(".loading");
	var loaded = $(".loaded");
	var music = $(".music");

	function load() {
		loaded.css("opacity", "1");
		setTimeout(function () {
			loaded.css("display", "flex");
			loading.css("display", "none");
		}, 500);
	}

	setTimeout(load, 1500);

	enterMain.click(function () {
		loaded.css("opacity", "0");
		setTimeout(function () {
			music[0].play();
			loaded.css("opacity", "0");
			main.css("opacity", "1");
			loaded.css("display", "none");
		}, 500);
	});
};

//项目展示标题的选择切换
var slide1 = $("#slide1");
var slide2 = $("#slide2");
var navItem = $("#nav li");
navData = 0;
var showWeb = $("iframe");
var preLoaded = $(".preLoaded");

navItem.each(function () {
	var text = $(this).text();
	if (text.length > 16) {
		var newText = text.substring(0, 16) + "...";
		$(this).text(newText);
	}
});

navItem.on("click", function () {
	var self = $(this);
	navData = self.attr("data-a");
	setTimeout(function () {
		$("#nav li").removeClass("navSelected");
		self.addClass("navSelected");
	}, 100);
	var position = $(this).position();
	slide1.css("top", position.top + "px");
	swWeb(navData);
});

navItem.on("mouseenter", function () {
	var position = $(this).position();

	slide2.css({ top: position.top + "px", transform: "scale(1)", opacity: "1" });
});

navItem.on("mouseleave", function () {
	slide2.css({ transform: "scale(0.8)", opacity: "0" });
});

//根据点击的项目展示对应的页面
showWeb.on("load", function () {
	setTimeout(function () {
		preLoaded.css("display", "none");
	}, 1000);
});

function swWeb(data) {
	switch (data) {
		case "1":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/第一次作业.html");
			showWeb.addClass("nav1");
			break;
		case "2":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/第二课堂项目/index.html");
			showWeb.addClass("nav2");
			break;
		case "3":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/DOM图片操作/task05.html");
			showWeb.addClass("nav3");
			break;
		case "4":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/坦克游戏/task3.html");
			showWeb.addClass("nav4");
			break;
		case "5":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/广告实验/index.html");
			showWeb.addClass("nav5");
			break;
		case "6":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/jQuery操作/task4.html");
			showWeb.addClass("nav6");
			break;
		case "7":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/页游逻辑/index.html");
			break;
		case "8":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/插件/index.html");
			break;
		case "9":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/注册页面/index.html");
			showWeb.addClass("nav9");
			break;
		case "10":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/用户名查询.html");
			showWeb.addClass("nav10");
			break;
		case "11":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/小米商城手机板块/index.html");
			showWeb.addClass("nav11");
			break;
		case "12":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/腾讯新闻/index.html");
			showWeb.addClass("nav12");
			break;
		case "13":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/仿重庆政府/index.html");
			showWeb.addClass("nav13");
			break;
		case "14":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/仿重庆百货首页/index.html");
			showWeb.addClass("nav14");
			break;
		case "15":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/金属/index.html");
			showWeb.addClass("nav15");
			break;
		case "16":
			showWeb.removeClass();
			showWeb.attr("src", "./assets/menu/MIStoreLoginAndSignin/index.html");
			showWeb.addClass("nav16");
			break;
	}
}

var prev = $(".prev");
var next = $(".next");
var nav = $("#nav");
var step = 525; // 每次移动的步长

function nextPage() {
	var currentPosition = parseInt(nav.css("top")) || 0;
	var rest = nav.height() - Math.abs(currentPosition);
	if (rest >= step) {
		nav.css("top", currentPosition - step + "px");
	}
}

function prevPage() {
	var currentPosition = parseInt(nav.css("top")) || 0;
	if (Math.abs(currentPosition) >= step) {
		nav.css("top", currentPosition + step + "px");
	} else {
		nav.css("top", "0px");
	}
}

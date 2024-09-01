var imgs = document.querySelectorAll(".ad>ul>li"); //获取轮播区域的所有图片
var points = document.querySelectorAll(".ad>ol>li"); //获取轮播区域的所有焦点
var ad = document.querySelector(".ad"); //获取轮播区域
var index = 0; //记录当前显示的图片的下标
//翻页切换功能
function changeOne(type) {
	imgs[index].className = "";
	points[index].className = "";
	if (type === true) {
		index++;
	} else if (type === false) {
		index--;
	} else {
		index = type;
	}
	if (index >= imgs.length) {
		index = 0;
	}
	if (index < 0) {
		index = imgs.length - 1;
	}
	imgs[index].className = "active";
	points[index].className = "active";
}
//绑定点击事件
ad.onclick = function (e) {
	//点击左按钮
	if (e.target.className === "left") {
		changeOne(false);
	}
	//点击右按钮
	if (e.target.className === "right") {
		changeOne(true);
	}
	//点击焦点
	if (e.target.dataset.name === "point") {
		console.log("焦点");
		let i = e.target.dataset.i - 0;
		changeOne(i);
	}
};
//自动轮播
setInterval(function () {
	changeOne(true);
}, 5000);

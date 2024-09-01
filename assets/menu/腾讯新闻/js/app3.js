var imgs = document.querySelectorAll(".lb>ul>li"); //获取轮播图中的所有图片
var points = document.querySelectorAll(".lb>ol>li"); //获取轮播图中的所有焦点
var lb = document.querySelector(".lb"); //获取轮播区域
var index = 0; //记录当前显示的图片的下标
//翻页功能
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
//点击事件，点击焦点切换图片
lb.onclick = function (e) {
	if (e.target.dataset.name === "point") {
		console.log("焦点");
		let i = e.target.dataset.i - 0;
		changeOne(i);
	}
};
//自动翻页切换
setInterval(function () {
	changeOne(true);
}, 4000);

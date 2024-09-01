// 国务院信息和政务活动的内容切换
var titles1 = document.querySelectorAll(".middle-bottom .mb-left .title");
var titles1waps = document.querySelectorAll(".middle-bottom .wapmessage .bigtitle .title");
var titles11waps = document.querySelectorAll(".middle-bottom .wapmessage .bigtitle .title1");
var gwys = document.querySelectorAll(".middle-bottom .mb-left .message .gwy");
var zws = document.querySelectorAll(".middle-bottom .mb-left .message .zw");
var zwwaps = document.querySelectorAll(".middle-bottom .wapmessage .zw");
var gwywaps = document.querySelectorAll(".middle-bottom .wapmessage .gwy");
var jrcqwaps = document.querySelectorAll(".middle-bottom .wapmessage .jrcq");
var tzggwaps = document.querySelectorAll(".middle-bottom .wapmessage .tzgg");
titles1.forEach((title, index) => {
	title.addEventListener("mouseover", () => {
		titles1.forEach((t) => t.classList.remove("cuur"));
		title.classList.add("cuur");
		if (index === 0) {
			gwys.forEach((gwy) => (gwy.style.display = "block"));
			zws.forEach((zw) => (zw.style.display = "none"));
		} else if (index === 1) {
			zws.forEach((zw) => (zw.style.display = "block"));
			gwys.forEach((gwy) => (gwy.style.display = "none"));
		}
	});
});

titles1waps.forEach((title, index) => {
	title.addEventListener("click", () => {
		titles1waps.forEach((t) => t.classList.remove("cuur"));
		title.classList.add("cuur");
		if (index === 0) {
			gwywaps.forEach((gwy) => (gwy.style.display = "block"));
			jrcqwaps.forEach((jrcq) => (jrcq.style.display = "none"));
		} else if (index === 1) {
			jrcqwaps.forEach((jrcq) => (jrcq.style.display = "block"));
			gwywaps.forEach((gwy) => (gwy.style.display = "none"));
		}
	});
});

titles11waps.forEach((title, index) => {
	title.addEventListener("click", () => {
		titles11waps.forEach((t) => t.classList.remove("cuur"));
		title.classList.add("cuur");
		if (index === 0) {
			zwwaps.forEach((zw) => (zw.style.display = "block"));
			tzggwaps.forEach((tzgg) => (tzgg.style.display = "none"));
		} else if (index === 1) {
			tzggwaps.forEach((tzgg) => (tzgg.style.display = "block"));
			zwwaps.forEach((zw) => (zw.style.display = "none"));
		}
	});
});
// <----------------------------------------------------------------------------------------------------------------------------->
// <----------------------------------------------------------------------------------------------------------------------------->
// 政务公开板块左边三个标题的内容切换
var titles2 = document.querySelectorAll(".zwgk .zwgk-left .title");
var titles2waps = document.querySelectorAll(".zwgk .zwgkwap .bigtitle .title");
var zxzcs = document.querySelectorAll(".zwgk .zwgk-left .zxzc");
var zxzxwaps = document.querySelectorAll(".zwgk .zwgkwap .zxzc");
var zcjds = document.querySelectorAll(".zwgk .zwgk-left .zcjd");
var zcjdwaps = document.querySelectorAll(".zwgk .zwgkwap .zcjd");
var hygqs = document.querySelectorAll(".zwgk .zwgk-left .hygq");
var hygqwaps = document.querySelectorAll(".zwgk .zwgkwap .hygq");

titles2waps.forEach((title, index) => {
	title.addEventListener("click", () => {
		console.log("1");
		titles2waps.forEach((t) => t.classList.remove("cuur"));
		title.classList.add("cuur");
		if (index === 0) {
			// console.log("1");
			zxzxwaps.forEach((zxzc) => (zxzc.style.display = "block"));
			zcjdwaps.forEach((zcjd) => (zcjd.style.display = "none"));
			hygqwaps.forEach((hygq) => (hygq.style.display = "none"));
		} else if (index === 1) {
			zcjdwaps.forEach((zcjd) => (zcjd.style.display = "block"));
			zxzxwaps.forEach((zxzc) => (zxzc.style.display = "none"));
			hygqwaps.forEach((hygq) => (hygq.style.display = "none"));
		} else if (index === 2) {
			hygqwaps.forEach((hygq) => (hygq.style.display = "block"));
			zcjdwaps.forEach((zcjd) => (zcjd.style.display = "none"));
			zxzxwaps.forEach((zxzc) => (zxzc.style.display = "none"));
		}
	});
});

titles2.forEach((title, index) => {
	title.addEventListener("mouseover", () => {
		titles2.forEach((t) => t.classList.remove("cuur"));
		title.classList.add("cuur");
		if (index === 0) {
			zxzcs.forEach((zxzc) => (zxzc.style.display = "block"));
			zcjds.forEach((zcjd) => (zcjd.style.display = "none"));
			hygqs.forEach((hygq) => (hygq.style.display = "none"));
		} else if (index === 1) {
			zcjds.forEach((zcjd) => (zcjd.style.display = "block"));
			zxzcs.forEach((zxzc) => (zxzc.style.display = "none"));
			hygqs.forEach((hygq) => (hygq.style.display = "none"));
		} else if (index === 2) {
			hygqs.forEach((hygq) => (hygq.style.display = "block"));
			zcjds.forEach((zcjd) => (zcjd.style.display = "none"));
			zxzcs.forEach((zxzc) => (zxzc.style.display = "none"));
		}
	});
});

// <----------------------------------------------------------------------------------------------------------------------------->
// <----------------------------------------------------------------------------------------------------------------------------->
// 底部相关链接的展示切换
var ercontents = document.querySelectorAll(".ercontent");
var zgzfws = ercontents[0].querySelectorAll(".zgzfw");
var gwybmwzs = ercontents[0].querySelectorAll(".gwybmwz");
var dfzfwzs = ercontents[0].querySelectorAll(".dfzfwz");
var szfbmwzs = ercontents[0].querySelectorAll(".szfbmwz");
var qxzfwzs = ercontents[0].querySelectorAll(".qxzfwz");
var qtwzs = ercontents[0].querySelectorAll(".qtwz");
var ggfwdwwzs = ercontents[0].querySelectorAll(".ggfwdwwz");
var xwmtwzs = ercontents[0].querySelectorAll(".xwmtwz");
var ermenus = document.querySelectorAll(".footer .ermenu>ul li");

ermenus.forEach((ermenu, index) => {
	ermenu.addEventListener("click", () => {
		var isActive = ermenu.querySelector("img").style.transform === "rotate(180deg)";
		ermenus.forEach((ermenu) => {
			ermenu.querySelector("img").style.transform = "rotate(0deg)";
		});
		ermenu.querySelector("img").style.transform = "rotate(180deg)";
		ercontents.forEach((ercontent) => {
			if (!isActive) {
				ercontent.classList.add("active");
			} else {
				ercontent.classList.remove("active");
				ermenu.querySelector("img").style.transform = "rotate(0deg)";
			}

			if (index === 0) {
				ercontent.style.overflow = "hidden";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "flex"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 1) {
				ercontent.style.overflow = "hidden scroll";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "flex"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 2) {
				ercontent.style.overflow = "hidden scroll";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "flex"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 3) {
				ercontent.style.overflow = "hidden scroll";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "flex"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 4) {
				ercontent.style.overflow = "hidden scroll";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "flex"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 5) {
				ercontent.style.overflow = "hidden scroll";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "flex"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 6) {
				ercontent.style.overflow = "hidden";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "flex"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "none"));
			} else if (index === 7) {
				ercontent.style.overflow = "hidden";
				zgzfws.forEach((zgzfw) => (zgzfw.style.display = "none"));
				gwybmwzs.forEach((gwybmwz) => (gwybmwz.style.display = "none"));
				dfzfwzs.forEach((dfzfwz) => (dfzfwz.style.display = "none"));
				szfbmwzs.forEach((szfbmwz) => (szfbmwz.style.display = "none"));
				qxzfwzs.forEach((qxzfwz) => (qxzfwz.style.display = "none"));
				qtwzs.forEach((qtwz) => (qtwz.style.display = "none"));
				ggfwdwwzs.forEach((ggfwdwwz) => (ggfwdwwz.style.display = "none"));
				xwmtwzs.forEach((xwmtwz) => (xwmtwz.style.display = "flex"));
			}
		});
	});
});
// 点击其他区域关界面
document.addEventListener("click", function (event) {
	var target = event.target;
	if (!isDescendantOf(target, document.querySelector(".ercontent")) && !isDescendantOf(target, document.querySelector(".footer .ermenu"))) {
		ercontents.forEach((ercontent) => {
			ercontent.classList.remove("active");
		});
		ermenus.forEach((menu) => {
			menu.querySelector("img").style.transform = "rotate(0deg)";
		});
	}
});

// 关闭辅助函数
function isDescendantOf(child, parent) {
	var node = child.parentNode;
	while (node != null) {
		if (node == parent) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
}

// <----------------------------------------------------------------------------------------------------------------------------->
// <----------------------------------------------------------------------------------------------------------------------------->
// 今日重庆旁的轮播图
document.addEventListener("DOMContentLoaded", function () {
	var maxLength = 20;
	var paragraphs = document.querySelectorAll(".lunbo1 ul li p");
	paragraphs.forEach(function (paragraph) {
		var text = paragraph.innerText;
		if (text.length > maxLength) {
			var truncatedText = text.substring(0, maxLength) + "...";
			paragraph.innerText = truncatedText;
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".lunbo1 ul");
	const slides = carousel.querySelectorAll("li");
	const focusItems = document.querySelectorAll(".lunbo1 ol li");
	const slideWidth = 100;
	let currentIndex = 0;

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		updateCarousel();
	}

	function updateCarousel() {
		const translateValue = -currentIndex * slideWidth;
		if (currentIndex === 6) {
			setTimeout(() => {
				carousel.style.transition = "none";
				carousel.style.transform = `translateX(0rem)`;
				currentIndex = 0;
			}, 500);
		} else {
			carousel.style.transition = "all .5s ease-in-out";
		}

		carousel.style.transform = `translateX(${translateValue}%)`;
		updateFocus();
	}

	function updateFocus() {
		focusItems.forEach((item) => item.classList.remove("selected"));
		focusItems[currentIndex % focusItems.length].classList.add("selected");
	}

	focusItems.forEach(function (item, index) {
		item.addEventListener("click", function () {
			currentIndex = index;
			updateCarousel();
		});
	});
	setInterval(nextSlide, 4000);
});

// <----------------------------------------------------------------------------------------------------------------------------->
// <----------------------------------------------------------------------------------------------------------------------------->
// 政务服务下方的轮播图
const container = document.getElementById("lbbigbox");
const items= document.getElementById("btbig");
const prevBtn = document.getElementById("prev"); 
const nextBtn = document.getElementById("next"); 
const indicatorsContainer = document.getElementById("indicators");
const totalItems = document.querySelectorAll(".lbbox").length / 2; 
let currentIndex = 0;

btbig.addEventListener("mouseover", () => {
	prevBtn.style.display = "block";
	nextBtn.style.display = "block";
	console.log("enter");
});

btbig.addEventListener("mouseout", () => {
	prevBtn.style.display = "none";
	nextBtn.style.display = "none";
});

prevBtn.addEventListener("click", () => {
	prev();
});
nextBtn.addEventListener("click", () => {
	next();
});

for (let i = 0; i < totalItems; i++) {
	const indicator = document.createElement("div");
	indicator.classList.add("indicator");
	indicatorsContainer.appendChild(indicator);

	indicator.addEventListener("click", () => {
		currentIndex = i;
		updateCarousel();
	});
}

updateCarousel();

function updateCarousel() {
	const itemWidth = container.clientWidth / 4;
	const offset = -currentIndex * itemWidth;
	container.style.transform = `translateX(${offset}px)`;
	const indicators = document.querySelectorAll(".indicator");
	indicators.forEach((indicator, i) => {
		if (currentIndex < 6) {
			indicator.classList.toggle("get", i === currentIndex);
		} else {
			indicator.classList.toggle("get", i === 0);
		}
	});
}

function next() {
	if (currentIndex < totalItems) {
		currentIndex++;
	} else {
		currentIndex = 0;
		updateCarousel();
		container.style.transition = "none";
		container.style.transform = `translateX(0)`;
		setTimeout(() => {
			updateCarousel();
			container.style.transition = "transform 0.5s ease-in-out";
		}, 0);
	}
	updateCarousel();
}

function prev() {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalItems - 1;
		container.style.transition = "none";
		container.style.transform = `translateX(${-totalItems * 25}%)`;
		setTimeout(() => {
			container.style.transition = "transform 0.5s ease-in-out";
			updateCarousel();
		}, 0);
	}
	updateCarousel();
}

setInterval(next, 3000);

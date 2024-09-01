var more = document.getElementById("more"); //获取“更多”按钮选项
var subMenu = document.getElementById("erji"); //获取二级菜单
//鼠标悬停事件，二级菜单的出现和消失
more.addEventListener("mouseenter", function () {
	subMenu.style.display = "block";
});
more.addEventListener("mouseleave", function () {
	subMenu.style.display = "none";
});
subMenu.addEventListener("mouseleave", function () {
	subMenu.style.display = "none";
});

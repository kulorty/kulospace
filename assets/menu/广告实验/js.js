// 获取左侧广告
var tie1 = document.getElementById("tie1");
// 获取广告的默认位置
var defaultTop = parseInt(window.getComputedStyle(tie1).getPropertyValue('top'));
// 获取右侧广告
var tie2 = document.getElementById("tie2");
// 获取广告的默认位置
var defaultTop2 = parseInt(window.getComputedStyle(tie2).getPropertyValue('top'));
//绑定广告和主体在一起，不会随缩放而移动位置，使用css和js共同定位，此处使用js代替css的position:fixed；
window.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset;//获取滚动条滚动的距离
    //广告的默认位置+滚动条滚动的距离。保持广告位置不变
    var newTop = defaultTop + scrollDistance;
    tie1.style.top = newTop + 'px';
    var newTop2 = defaultTop2 + scrollDistance;
    tie2.style.top = newTop2 + 'px';
});
//获取弹出广告
var tanchu = document.getElementById("tanchu");
//执行广告弹出
function showAd() {
    tanchu.classList.add("show");
}
setTimeout(showAd, 200); // 0.2s后执行

//广告关闭操作
function gtie1() {//关闭左侧广告
    tie1.style.left = "-100%"; // 向左移动
    setTimeout(function () {
        tie1.style.display = "none"; // 隐藏
    }, 500); // 0.5s后执行
}
function gtie2() {//关闭右侧广告
    tie2.style.right = "-100%"; // 向右移动
    setTimeout(function () {
        tie2.style.display = "none"; // 隐藏
    }, 500); // 0.5s后执行
}
function gtie3() {//关闭弹出广告
    tanchu.classList.add("move");
    tanchu.style.bottom = "-100%"; // 向下移动
    setTimeout(function () {
        tanchu.style.display = "none"; // 隐藏
    }, 800); // 0.8s后执行
}
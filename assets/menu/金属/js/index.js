var images = document.querySelectorAll('.bd ul li');  // 获取轮播区域的所有图片
var point = document.querySelectorAll('.lunbotu .hd ul li');
var prevButton = document.querySelector('.lunbotu .prev');   // 获取向前切换按钮
var nextButton = document.querySelector('.lunbotu .next');   // 获取向后切换按钮
var bd = document.querySelector('.lunbotu');
var currentIndex = 0;  // 记录当前显示的图片的索引
var intervalId;  // 用于存储自动轮播的间隔ID

// 切换图片的显示
function changeSlide(index) {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    images[index].classList.add('active');
    changePoint(index); // 切换点的样式
}

// 切换点的样式
function changePoint(index) {
    for (var i = 0; i < point.length; i++) {
        point[i].classList.remove('active');
    }
    point[index].classList.add('active');
}

// 向前切换
prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(currentIndex);
});

// 向后切换
nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
});

// 自动轮播
function lunbo(type) {
    if (type === 'start') {
        currentIndex = (currentIndex + 1) % images.length;
        changeSlide(currentIndex);
    } else if (type === 'stop') {
        clearInterval(intervalId);
    }
}

// 为每个点添加事件监听器
for (var i = 0; i < point.length; i++) {
    point[i].addEventListener('mouseenter', function () {
        currentIndex = Array.from(point).indexOf(this);
        changeSlide(currentIndex);
        lunbo('stop');
    });

    point[i].addEventListener('mouseleave', function () {
        lunbo('start');
    });
}

// 启动自动轮播
intervalId = setInterval(function () {
    lunbo('start');
}, 4000);

// 鼠标进入 .bd 区域时
bd.addEventListener('mouseenter', function () {
    lunbo('stop');
    prevButton.style.opacity = 0.8;  // 改变左按钮样式（这里设置为显示）
    nextButton.style.opacity = 0.8;  // 改变右按钮样式（这里设置为显示）
});

// 鼠标离开 .bd 区域时
bd.addEventListener('mouseleave', function () {
    lunbo('start');
    prevButton.style.opacity = 0;  // 改变左按钮样式（这里设置为隐藏）
    nextButton.style.opacity = 0;  // 改变右按钮样式（这里设置为隐藏）
});

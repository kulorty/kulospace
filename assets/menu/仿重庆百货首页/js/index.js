
//新闻中心的切换选择
var len = 0;//长度设置
var anime_xw = false;//判断动画是否结束
//点击右按钮向左滑动
$("#xwr").click(function () {
    //条件判断，动画结束后才能继续执行
    if (!anime_xw) {
        anime_xw = true;//动画开始
        //长度判断，当长度小于70时，右按钮显示，否则隐藏
        if (len <= 70) {
            $("#xwl").css("display", "block");
            if (70 - len >= 10) {
                //配合拖动，判断剩余长度，大于等于10时，使用固定的滑动距离
                //向左滑动
                $(".xinwenzhanshi").animate({ left: "-=410px" }, 400, function () {
                    len += 10;//长度增加10
                    anime_xw = false;//动画结束
                });
            } else {
                //当剩余长度小于10时，直接滑动到最右边
                $(".xinwenzhanshi").animate({ left: "-3270px" }, 400, function () {
                    anime_xw = false;//动画结束
                    len = 70;//长度无剩余
                });
            }
        } else {
            //到底，按钮消失
            $("#xwr").css("display", "none");
        }
    } else {
        //动画正在执行，操作无效
        return;
    }
});
//点击左按钮向右滑动
$("#xwl").click(function () {
    if (!anime_xw) {
        anime_xw = true;//动画开始
        if (len >= 10) {
            //长度大于等于10时，左按钮显示
            $("#xwr").css("display", "block");
            //向右滑动固定长度
            $(".xinwenzhanshi").animate({ left: "+=410px" }, 300, function () {
                len -= 10;//长度减少10
                anime_xw = false;//动画结束
            });
        } else {
            //长度小于10时，直接滑动到最左边
            $(".xinwenzhanshi").animate({ left: "0px" }, 300, function () {
                len = 0;//长度归0
                anime_xw = false;//动画结束
                $("#xwl").css("display", "none");//左按钮消失
            });
        }
    } else {
        //动画正在执行，操作无效
        return;
    }
});
//新闻中心的新闻拖动查看更多
$(function () {
    //使用jqueryui的draggable方法
    $(".xinwenzhanshi").draggable({
        axis: "x",//规定拖动方向
        //拖动时触发的事件
        drag: function (event, ui) {
            var distanceX = ui.position.left;//获取拖动的距离
            var $element = $(this);
            //配合点击按钮，判断拖动的距离
            if (distanceX <= -3360) {
                return false;//拖动到最右边时，拖动无效
            } else if (distanceX >= 0) {
                return false;//拖动到最左边时，拖动无效
            }
            len = Math.abs(distanceX / 480) * 10;//计算拖动后len的长度
        }
    });
});

//顶部轮播图
var intervalID = true;//是否自动轮播
var imgpos = 1;//设置图片编号
var i = 0;//设置焦点编号
var anime = false;//判断动画是正在执行
//自动轮播
function startInterval() {
    intervalID = setInterval(function () {
        i = imgpos;//焦点编号等于图片编号
        anime = true;//动画开始
        //判断图片编号，当为前4张图时，图片向左滑动，焦点编号加1
        if (imgpos <= 4) {
            $(".lunbo ol li").eq(i).addClass("active").siblings().removeClass("active");//焦点切换
            //图片滑动
            $(".imgBox").animate({ left: "-=" + "100%" }, 800, function () {
                anime = false;//动画结束
                imgpos++;//焦点编号加1
            });
        } else {
            //到最后一张图时，图片滑动到第一张图，焦点编号归1
            $(".lunbo ol li").eq(i = 0).addClass("active").siblings().removeClass("active");//焦点切换
            $(".imgBox").animate({ left: "0" }, 800, function () {//图片滑动
                anime = false;//动画结束
                imgpos = 1;//焦点编号归1
            });
        }
    }, 3000);
};
startInterval();//默认启用轮播
//点击右按钮切换
$("#lbr").click(function () {
    clearInterval(intervalID);//轮播暂停
    //动画未执行时，才能继续执行
    if (!anime) {
        anime = true;//动画开始
        if (imgpos < 5) {
            i = imgpos;
            $(".lunbo ol li").eq(i).addClass("active").siblings().removeClass("active");
            console.log(imgpos);
            $(".imgBox").animate({ left: "-=" + "100%" }, 800, function () {
                anime = false;
            });
            imgpos++;
            i++;
            startInterval();
        } else {
            i = 0;
            $(".imgBox").animate({ left: "0" }, 800, function () {
                anime = false;
            });
            $(".lunbo ol li").eq(i).addClass("active").siblings().removeClass("active");
            imgpos = 1;
            startInterval();
        }
    } else {
        return;
    }
    anime = false;
});
//点击左按钮切换
$("#lbl").click(function () {
    clearInterval(intervalID);
    if (!anime) {
        anime = true;
        if (imgpos > 1) {
            i = imgpos - 2;
            $(".lunbo ol li").eq(i).addClass("active").siblings().removeClass("active");
            console.log(imgpos);
            $(".imgBox").animate({ left: "+=" + "100%" }, 800, function () {
                anime = false;
            });
            imgpos--;
            i--;
            startInterval();
        } else {
            i = 4;
            $(".imgBox").animate({ left: "-400%" }, 800, function () {
                anime = false;
            });
            $(".lunbo ol li").eq(i).addClass("active").siblings().removeClass("active");
            imgpos = 5;
            startInterval();
        }
    } else {
        return;
    }
    anime = false;
});
//左右按钮的显示和隐藏
$(".lunbo").mouseenter(function () {
    $(".lunbol").css("display", "block");
    $(".lunbor").css("display", "block");
});
$(".lunbo").mouseleave(function () {
    $(".lunbol").css("display", "none");
    $(".lunbor").css("display", "none");
});
//点击lunbo中的ol下的li，并根据li的data-i属性值来切换图片
$(".lunbo ol li").click(function () {
    if (!anime) {
        anime = true;
        clearInterval(intervalID);
        i = $(this).attr("data-i");
        $(this).addClass("active").siblings().removeClass("active");
        $(".imgBox").animate({ left: "-" + i + "00%" }, 800, function () {
            imgpos = i;
        });
        i++;
        startInterval();
        anime = false;
    }
});


//新闻中心内容的动态获取
fetch('https://mock.apifox.cn/m1/2846389-0-default/xinwen/')
    .then(r => r.json())
    .then(data => {
        console.log(data);
        let tag_ul = document.querySelector('.xinwenzhanshi');

        for (let key in data) {
            let item = data[key];
            let tag_li = document.createElement('li');
            tag_li.innerHTML =
                `<h2>${item.data1}<span>${item.data2}</span><img src="./images/xinwenyong.png"></h2>
                <p>${item.title}</p>
                <div><img class="xinwentu${item.code}" src="${item.image_address}"></div>
                `
            tag_ul.append(tag_li);
        }
    });
//招投标中心内容的动态获取
fetch('https://mock.apifox.cn/m1/2846389-0-default/zhaotoubiao/')
    .then(r => r.json())
    .then(data => {
        console.log(data);
        let zb = document.querySelector('.ztbnrjuti');

        for (let key in data) {
            let item = data[key];
            let zb_div = document.createElement('div');
            zb_div.className = 'zbjt';

            // 判断是否显示图片
            let imageHTML = '';
            if (item.situation === '招标中') {
                imageHTML = '<img src="./images/zb.png">';
            }

            // 添加省略号
            let content = item.content.length > 28 ? item.content.slice(0, 28) + '...' : item.content;

            zb_div.innerHTML = `
                        <a>
                            <div>
                                <div>${imageHTML}
                                    <p>${item.situation}</p>
                                </div>
                                <h2>${content}</h2>
                                <span>${item.data}</span>
                            </div>
                        </a>
                    `

            // 设置CSS样式
            if (item.situation === '已结束') {
                let bg = zb_div.querySelector('a > div > div');
                let p = bg.querySelector('p');
                // 设置背景颜色
                bg.style.background = '#ededed';
                p.style.color = '#747475';
                p.style.left = '10px';
                // 可以根据需要设置其他样式
            }

            zb.append(zb_div);
        }
    });

fetch('https://mock.apifox.cn/m1/2846389-0-default/gsyt/')
    .then(r => r.json())
    .then(data => {
        console.log(data);
        let yt = document.querySelector('.gsyt_zonghe');

        for (let key in data) {
            let items = data[key];
            let yt_div = document.createElement('div');

            if (items.code === '1') {
                yt_div.classList.add('item', 'active');
            } else {
                yt_div.classList.add('item');
            }

            yt_div.innerHTML = `
                <div class="shadow"></div>
                <div class="content">
                    <div class="text">
                        <div class="ti">${items.title}</div>
                        <div class="tit">${items.content}</div>
                    </div>
                </div>
            `;

            yt_div.style.background = `url(${items.imgAddress})`;
            yt_div.style.backgroundSize = 'cover';
            yt_div.style.backgroundPosition = 'center';
            yt_div.style.display = 'flex';
            yt.append(yt_div);
        }

        // 公司业态展示
        let items = document.querySelectorAll('.item');

        // 函数设置，样式的切换
        function setActive() {
            items.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        }

        // 鼠标移入事件类似于hover
        items.forEach(item => {
            item.addEventListener('mouseenter', function () {
                let self = this;
                setTimeout(function () {
                    if (self.matches(':hover')) {
                        setActive.call(self);
                    }
                }, 100);
            });
        });
    });

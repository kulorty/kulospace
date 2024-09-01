function disptime() {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var date = today.getDate();
	var day = today.getDay();
	var week = {
		0: "星期日",
		1: "星期一",
		2: "星期二",
		3: "星期三",
		4: "星期四",
		5: "星期五",
		6: "星期六",
	}
	document.getElementById("time_2").innerHTML = year + "年" + month + "月" + date + "日" + " " + week[day];
	var today = new Date();
	var hh = today.getHours();
	var mm = today.getMinutes();
	document.getElementById("time").innerHTML = +hh + ":" + mm;
	setTimeout(disptime, 1000);
}
disptime()
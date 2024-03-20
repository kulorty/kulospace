(function() {
	$(window).on('load', init);

	var all_links = $('.transition');
	var all_pages = $('.page');
	var	prefix = ['webkit', 'moz', 'o', 'ms', ''];
	var	data_prefix = 'data-';
	var is_anim = false;
	var current = 0;

	function set_current_page() {
		$(all_pages[current]).addClass('current-page');
	}

	function transition(link) {
		var data_transition = $(link).attr(data_prefix + 'transition');
		var data_reverse = $(link).attr(data_prefix + 'reverse');
		var class_in = '';
		var class_out = '';

		if(data_reverse === '' || data_reverse === 'true') {
			data_transition += '-reverse';
		}

		console.log(data_transition);

		switch(data_transition) {
			case 'horizontal':
				class_out = 'slide-to-right';
				class_in = 'slide-from-left';
				break;
			case 'horizontal-reverse':
				class_out = 'slide-to-left';
				class_in = 'slide-from-right';
				break;
			case 'vertical':
				class_out = 'slide-to-top';
				class_in = 'slide-from-bottom';
				break;
			case 'vertical-reverse':
				class_out = 'slide-to-bottom';
				class_in = 'slide-from-top';
				break;
			case 'horizontal-easing':
				class_out = 'slide-to-right-easing';
				class_in = 'slide-from-left';
				break;
			case 'horizontal-easing-reverse':
				class_out = 'slide-to-left-easing';
				class_in = 'slide-from-right';
				break;
			case 'vertical-easing':
				class_out = 'slide-to-top-easing';
				class_in = 'slide-from-bottom';
				break;
			case 'vertical-easing-reverse':
				class_out = 'slide-to-bottom-easing';
				class_in = 'slide-from-top';
				break;
			case 'horizontal-fade':
				class_out = 'slide-to-fade';
				class_in = 'slide-from-right';
				break;
			case 'horizontal-fade-reverse':
				class_out = 'slide-to-fade';
				class_in = 'slide-from-left';
				break;
			case 'vertical-fade':
				class_out = 'slide-to-fade';
				class_in = 'slide-from-bottom';
				break;
			case 'vertical-fade-reverse':
				class_out = 'slide-to-fade';
				class_in = 'slide-from-top';
				break;
			default:
				class_out = 'slide-to-left';
				class_in = 'slide-from-right';
		}

		return [class_out, class_in];
	}

	function set_current_index(new_current_page) {
		for(var i = 0, len = all_pages.length; i < len; i++) {
			if($(all_pages[i]).attr('id') === new_current_page.attr('id')) {
				current = i;
				return true;
			}
		}
	}

	function reset_classes(old_page, new_page, classes) {
		old_page.attr('class', classes[0]).removeClass('current-page');
		new_page.attr('class', classes[1]).addClass('current-page');
	}

	function apply_animations(current_page, next_page, animation) {
		var class_out = animation[0];
		var class_in = animation[1];
		var classes = [current_page.attr('class'), next_page.attr('class')];

		set_current_index(next_page);
		set_current_page();

		current_page.addClass(class_out);
		next_page.addClass(class_in);

		for(var i = 0, len = prefix.length; i < len; i++) {
			all_pages.on(prefix[i] + 'animationend', function() {
				all_pages.off(prefix[i] + 'animationend');
				is_anim = false;
				reset_classes(current_page, next_page, classes);
			});
		}
	}

	function pages(link) {
		var current_page = $(all_pages[current]);
		var next_page = $('#' + $(link).attr(data_prefix + 'to'));
		var animation = transition(link);

		if(!is_anim) {
			is_anim = true;
			apply_animations(current_page, next_page, animation);
		}
	}

	function link_clicked() {
		all_links.on('click', function(e) {
			e.preventDefault();
			pages(this);
		});
	}

	function init() {
		set_current_page();
		link_clicked();
	}
})();


// var kzzx = document.getElementsByClassName("kzzx")[0];
// var pos_8= kzzx.getElementsByClassName("pos_8")[0];
// var image_wrapper= kzzx.getElementsByClassName("image-wrapper")[0];
// var image_wrapper_1 = kzzx.getElementsByClassName("image-wrapper_1")[0];
// var image_wrapper_2 = kzzx.getElementsByClassName("image-wrapper_2")[0];
// var equal_division_item1= kzzx.getElementsByClassName("equal_division_item1")[0];
// var equal_division_item2= kzzx.getElementsByClassName("equal_division_item2")[0];
// var equal_division_item3= kzzx.getElementsByClassName("equal_division_item3")[0];
// var equal_division_item4= kzzx.getElementsByClassName("equal_division_item4")[0];
// var equal_division_item5= kzzx.getElementsByClassName("equal_division_item5")[0];
// var equal_division_item6= kzzx.getElementsByClassName("equal_division_item6")[0];

// function dj(){
// 	if(this.style.backgroundColor == "rgb(42, 130, 228)"){
// 		this.style.backgroundColor = "#cccccc99";
// 	}else{
// 		this.style.backgroundColor = "#2A82E4";
// 	}
// 	this.style.transition = "all 1s";
// }
// pos_8.onclick = dj;
// image_wrapper.onclick = dj;
// image_wrapper_1.onclick = dj;
// image_wrapper_2.onclick = dj;
// equal_division_item1.onclick = dj;
// equal_division_item2.onclick = dj;
// equal_division_item3.onclick = dj;
// equal_division_item4.onclick = dj;
// equal_division_item5.onclick = dj;
// equal_division_item6.onclick = dj;


var kzzxList = document.getElementsByClassName("kzzx");
for (var i = 0; i < kzzxList.length; i++) {
  var kzzx = kzzxList[i];
  var pos_8= kzzx.getElementsByClassName("pos_8")[0];
  var image_wrapper= kzzx.getElementsByClassName("image-wrapper")[0];
  var image_wrapper_1 = kzzx.getElementsByClassName("image-wrapper_1")[0];
  var image_wrapper_2 = kzzx.getElementsByClassName("image-wrapper_2")[0];
  var equal_division_item1= kzzx.getElementsByClassName("equal_division_item1")[0];
  var equal_division_item2= kzzx.getElementsByClassName("equal_division_item2")[0];
  var equal_division_item3= kzzx.getElementsByClassName("equal_division_item3")[0];
  var equal_division_item4= kzzx.getElementsByClassName("equal_division_item4")[0];
  var equal_division_item5= kzzx.getElementsByClassName("equal_division_item5")[0];
  var equal_division_item6= kzzx.getElementsByClassName("equal_division_item6")[0];
  pos_8.onclick = dj;
  image_wrapper.onclick = dj;
  image_wrapper_1.onclick = dj;
  image_wrapper_2.onclick = dj;
  equal_division_item1.onclick = dj;
  equal_division_item2.onclick = dj;
  equal_division_item3.onclick = dj;
  equal_division_item4.onclick = dj;
  equal_division_item5.onclick = dj;
  equal_division_item6.onclick = dj;
}

function dj() {
  if (this.style.backgroundColor == "rgb(42, 130, 228)") {
    this.style.backgroundColor = "#cccccc99";
  } else {
    this.style.backgroundColor = "#2A82E4";
  }
  this.style.transition = "all 1s";
}

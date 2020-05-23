$(document).ready(function() {

	// json文件中获取图片相关信息
	$.getJSON('js/imageData.json',function (data) {
		if (data){
			displayImgs(data.images);
		}else{
			console.log("出错了");
		}
	});

	// overlay层显示
	function showOverlay() {
		$('.overlay').fadeIn('slow');
	}

	// overlay层隐藏
	function hideOverlay() {
		$('.overlay').fadeOut('slow');
	}

	function displayImgs(imageJSON) {
		var singleImage;
		for (var i = 0; i<imageJSON.length; i++) {
			singleImage = '<li class="col-lg-2 col-md-2 col-sm-3 col-xs-4">'+
				'<img class="img-responsive imgLink" alt="'+imageJSON[i].name+'" src="'+imageJSON[i].imgSource+'">'+
				'</li>';
			$('.galleryContainer').append(singleImage);
		}
	}

	$(document).on('click','.imgLink',function(e){
		e.preventDefault();
		showOverlay();

		// 获取当前点击图片的信息
		// 并设置相应的下标，从0开始
		var imgSrc = $(this).attr('src');
		var imgNumber = $(this).parent('li').index();

		// 获取当前翻页事件的图片，向前向后属性
		// 给翻页按钮增加属性href，数值为相应的翻页图片
		$('.next').attr('href', imgNumber + 2);
		$('.prev').attr('href', imgNumber);

		// 修改当前大图片的路径，并显示
		$('.bigImage').attr('src', imgSrc).load(function() {
			$(this).fadeIn('slow');
		});

		// jq的trigger()方法用例：
		// 触发 input 元素的 select 事件：
		// $("button").click(function(){
		// 	$("input").trigger("select");
		// });

		// 触发 a.navigationControls 的点击事件 click
		$('a.navigationControls').trigger('click');
		return false;
		// 当从事件处理程序返回false时，它阻止该事件的默认操作，并停止事件通过DOM冒泡。也就是说，它相当于这样做：
		// return false; ==> event.preventDefault(); event.stopPropagation();
	});

	// 大图片的关闭按钮 点击事件，用于隐藏该层
	$('.closebtn').click(function(event) {
		hideOverlay();
	});

	// 当键盘上的Esc键被按下时，隐藏大图片层
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			hideOverlay();
		}
	});

	// 放大的图片点击后隐藏
	$(document).on('click','.overlay',function(e){
		hideOverlay();
		return false;
	});

	// 放大的图片页面，点击翻页部分事件
	$(document).on('click','.navigationControls',function(e){
		e.preventDefault();

		// 获取当前点击的图片的相关信息
		var imgNumber = $(this).attr('href');
		var imgSrc = $('ul.row li:nth-child('+ imgNumber +') img').attr('src');
		var imgName = $('ul.row li:nth-child('+ imgNumber +') img').attr('alt');

		// 将当前点击的图片印到大图片层
		$('.bigImage').attr('src', imgSrc);
		$('.imageTitle').html(imgName);

		// 获取当前显示图片的上一张及下一张的信息
		var newPrevNo = parseInt(imgNumber) - 1;
		var newNextNo = parseInt(newPrevNo) + 2;

		// navigationControls有前后两个翻页按钮，当navigationControls点击时，
		// 判断当前被点击的按钮拥有的类名，改变翻页状态
		if($(this).hasClass('prev')){
			$(this).attr('href', newPrevNo);
			$('a.next').attr('href', newNextNo);
		}else{
			$(this).attr('href', newNextNo);
			$('a.prev').attr('href', newPrevNo);
		}

		// 获取图片总数
		var totalImages = $('ul.row li').length + 1;

		// 判断是否为最后一张
		if(totalImages === newNextNo){
			$('a.next').hide();
		}else{
			$('a.next').show()
		}

		// 判断是否为第一张
		if(newPrevNo === 0){
			$('a.prev').hide();
		}else{
			$('a.prev').show()
		}

		return false;
	});
});
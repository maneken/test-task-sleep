$(document).ready(function(){

	$(".sidebar__menu-link").on("click", function(e){
		var submenu = $(this).next(".sidebar__submenu");
		if(submenu.length > 0){
			e.preventDefault();

			submenu.slideToggle();
			var parent = $(this).parents(".sidebar__menu-item");
			parent.toggleClass("active");

			if(parent.hasClass("active")){
				parent.find(".icon").html('&#xe801;');
			} else {
				parent.find(".icon").html('&#xe800;');
			}
		}
	});

	$(".product__tab-switch-link").on("click", function(e){
		e.preventDefault();

		var parent = $(this).parents(".product__tab");

		parent.find(".product__tab-switch-link, .product__tab-content").removeClass("active");
		$(this).addClass("active");
		var target = $(this).attr("href");

		$(target).addClass("active");
	});

	var slider_full = $("#slider-full").lightSlider({
		item: 1,
		pager: false,
		enableDrag: false,
		controls: false
	}); 

	var slider_thumb = $("#slider-thumb").lightSlider({
		item: 4,
		pager: false,
		enableDrag: false,
		autoWidth: false,
		vThumbWidth: 100,
		controls: false
	});

	$(".slider-thumb__item").on("click", function(){
		slider_full.goToSlide($(this).data("slide"));
	});

	$(".slider-thumb__control-left").on("click", function(e){
		e.preventDefault();
		slider_thumb.goToPrevSlide();
	});

	$(".slider-thumb__control-right").on("click", function(e){
		e.preventDefault();
		slider_thumb.goToNextSlide();
	});

	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))){
		$("html").addClass("ie");
	}

});

$(window).on("load resize", function(){
	setTimeout(function(){
		var zoom_place = $(".slider-thumb-zoom").outerHeight();
		var thumbs = $("#slider-thumb").outerHeight();

		var margin = (zoom_place - thumbs) / 2;
		$("#slider-thumb").parents(".slider-thumb-wrap").css({
			"marginTop" : margin + "px"
		});
	}, 500);
});
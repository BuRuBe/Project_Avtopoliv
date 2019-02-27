$(document).ready(function () {
	//Mobile mode menu 
	var touch = $('#TouchMenu');
	var menu = $('.nav');
	var wid = $(window).width();
	if (wid < 765) {
		$('#communication').addClass('communicationMobile');
	} else {
		$('#communication').removeClass('communicationMobile');
	}
	if (wid < 765) {
		$('#schedule').addClass('scheduleMobile');
	} else {
		$('#schedule').removeClass('scheduleMobile');
	}
	if (wid < 765) {
		$('#map').addClass('mapMobile');
	} else {
		$('#map').removeClass('mapMobile');
	}
	//Menu fixed effect
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 80) {
			$("nav").addClass('fixed');
		} else {
			$("nav").removeClass('fixed');
		}
	});
	$(touch).on('click', function (e) {
		e.preventDefault();
		menu.slideToggle();
	});
	if (wid < 765) {
		$('.callback-btn').on('click', function (e) {
			e.preventDefault();
			menu.slideToggle();
		});
	}
	//Callback buttons action
	$(document).mouseup(function (e) {
		var container = $('.callbackArea');
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});
	$('.callback-btn').on('click', function (e) {
		$('.callbackForm').addClass('formActive');
		$('.callbackForm').removeClass('formInactive');
		$('#callbackArea').addClass('callbackArea');
		var container = $('.callbackArea');
		container.show();
	})
	$('.close').on('click', function (e) {
		$('.callbackForm').addClass('formInactive');
		$('.callbackForm').removeClass('formActive');
		$('#callbackArea').removeClass('callbackArea');
	})
	//Service page blur effect
	$('.servicesBox').mouseover(function () {
		$(this).addClass('noBlur');
		$('.servicesBox').addClass('blurBox');
	});
	$('.servicesBox').mouseleave(function () {
		$('.servicesBox').removeClass('blurBox');
		$('.servicesBox').removeClass('noBlur');
	});
	//Footer changes
	$(window).resize(function () {
		var wid = $(window).width();
		if (wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
		if (wid < 765) {
			$('#communication').addClass('communicationMobile');
		} else {
			$('#communication').removeClass('communicationMobile');
		}
		if (wid < 765) {
			$('#schedule').addClass('scheduleMobile');
		} else {
			$('#schedule').removeClass('scheduleMobile');
		}
		if (wid < 765) {
			$('#map').addClass('mapMobile');
		} else {
			$('#map').removeClass('mapMobile');
		}
	});
});
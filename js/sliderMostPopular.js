$(document).ready(function(){
    //Slider block (Частопокумаемые товары)
	var slidesMarket = document.querySelectorAll('#slidesMarket .slideMarket');
	var currentSlideMarket = 0;
	var slideMarketInterval = setInterval(nextSlideMarket,3000);

	function nextSlideMarket() {
		slidesMarket[currentSlideMarket].className = 'slideMarket';
		currentSlideMarket = (currentSlideMarket+1)%slidesMarket.length;
		slidesMarket[currentSlideMarket].className = 'slideMarket showing';
	}
});
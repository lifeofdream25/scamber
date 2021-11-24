//Скролінг до певного блоку
function slowScroll6 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},200);
			return false;
}
function slowScroll1 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},800);
			if($(window).width()<767)
				burger_menu();
			return false;
}
function slowScroll2 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},800);
			if($(window).width()<767)
				burger_menu();
			return false;
}
function slowScroll3 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},1000);
			if($(window).width()<767)
				burger_menu();
			return false;
}
function slowScroll4 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},1300);
			if($(window).width()<767)
				burger_menu();
			return false;
}
function slowScroll5 (id) {
			var offset = 0;
			$("html, body").animate({
				scrollTop: $(id).offset().top - offset
			},1800);
			if($(window).width()<767)
				burger_menu();
			return false;
}

function replace1() {
			document.location.replace("https://www.google.com/maps/place/%D0%9F%D0%A0%D0%90%D0%A2+%22%D0%86%D0%92%D0%90%D0%9D%D0%9E-%D0%A4%D0%A0%D0%90%D0%9D%D0%9A%D0%86%D0%92%D0%A1%D0%AC%D0%9A-%D0%90%D0%92%D0%A2%D0%9E%22+%D0%BE%D1%84.+%D0%B4%D0%B8%D0%BB%D0%B5%D1%80+KIA,+CHERY,+ZAZ,+JETOUR,+LADA/@48.9140834,24.7437868,15.74z/data=!4m5!3m4!1s0x0:0x58f8a4c9e062a4e!8m2!3d48.9136321!4d24.7494419")
}

//Закріплення меню
window.onscroll =function Scroll() {
	if (window.pageYOffset > 0) {
		$('.navbar').addClass('navbar_fixed');
		$('.nav').addClass('nav_fixed');
		$('.h1_header').addClass('h1_header_fixed');
		$('.logo_text').addClass('logo_text_fixed');
		$('.a_header').addClass('a_fixed');
		$('.burger').addClass('burger_fixed');
		$('.navbar').css('background','rgba(1, 1, 1, 0.6)');
		if($('.conteiner').width != $(window).width()){
			var width = $('.conteiner').width() - $('.logo').width()-90;
			$('.burger_fixed').css('margin-left',width);
		}

	}else{
		$('.navbar').removeClass('navbar_fixed');
		$('.nav').removeClass('nav_fixed');
		$('.h1_header').removeClass('h1_header_fixed');
		$('.logo_text').removeClass('logo_text_fixed');
		$('.a_header').removeClass('a_fixed');
		$('#burger').removeClass('burger_fixed');
		$('.navbar').css('background','none')
	}
}
function burger_menu(){
	if($('#burger').hasClass('burger_open')==false)
	{
		$('.nav2').css({'display':'block','top':'0%'});
		$('.navbar_fixed').css('background','none');
		$('.burger').addClass('burger_open');
	}
	else{
		$('.burger').removeClass('burger_open');
		$('.navbar_fixed').css('background-color','rgba(1, 1, 1, 0.6)');
		$('.nav2').css('display','none');
		$('.nav2').css({'display':'block','top':'-100%'});
	}
};
//Функції для переадресування на сторінку з певним авто
function replace2() {
	document.location.replace("auto/pgt.html")
}
function replace3() {
	document.location.replace("auto/mers.html")
}
function replace4() {
	document.location.replace("auto/toyota.html")
}
function replace5() {
	document.location.replace("auto/bmvx7.html")
}
function replace6() {
	document.location.replace("auto/lex.html")
}
function replace7() {
	document.location.replace("auto/volvo.html")
}
//Функція для перевірки даних у формі
function valid(form){
			var fail = false;
			var name = $('#name').value;
			var adr_pattern = /[a-z\s]+/ig;
			var numberTest = /^(\+380|0|380)?[\s\-]?\(?[0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
			if (adr_pattern.test(name) == false)
				fail = "Ви ввели ім'я неправильно";
			else if (numberTest.test(number.value) == false)
				fail = "Ви ввели не правильно номер телефону";
			if(fail)
				alert(fail);
			else{
				$('.popup').css('display','block');
				$('.popup_content').css('transform','translate(0px, 0px)');
			}
}

function hid2(){
	$('.popup').css('display','none');
	$('.popup_content').css('display','none');
	location.reload();

}
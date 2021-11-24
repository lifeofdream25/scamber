$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight:true,
		centerMode:true,
		variableWidth: true,
		waitForAnimate: false
	});
})
function info() {
	$(".foto_auto").css('display','none');
	$(".gol").css('color','#404040');
	$(".info").css('color','black');
	$(".com").css('color','#404040');
	$(".info_detail").css('display','block');
	$("#comentars").css('display','none');
}
function gol() {
	$(".foto_auto").css('display','flex');
	$(".gol").css('color','#000');
	$(".info").css('color','#404040');
	$(".com").css('color','#404040');
	$(".info_detail").css('display','none');
	$("#comentars").css('display','none');
}
function com() {
	$(".foto_auto").css('display','none');
	$(".gol").css('color','#404040');
	$(".com").css('color','black');
	$(".info").css('color','#404040');
	$(".info_detail").css('display','none');
	$("#comentars").css('display','block');
}
window.onscroll =function Scroll() {
	if (window.pageYOffset > 180) {
		$('.fix_div').css({'position':'fixed', 'top':'65px', 'left':'212px'})
		$('.info_detail_table').css('margin-left','370px')
	}else{
		$('.fix_div').css({'position':'relative', 'top':'0px','left':'0px'})
		$('.info_detail_table').css('margin-left','100px')
	}
}
function buy(){
	$('.popup').css('display','block');
	$('.popup_content').css('display','block');
}
function hid1(){
	$('.popup').css('display','none');
	$('.popup_content').css('display','none');
}
function valid(form){
			var fail = false;
			var name = form.name.value;
			var firstname = form.firstname.value;
			var E_mail = form.E_mail.value;
			var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
			var numberTest = /^(\+380|0|380)?[\s\-]?\(?[0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
			if (name=="" || name ==" ")
				fail = "Ви не ввели своє ім'я";
			else if (firstname=="" || firstname ==" ")
				fail = "Ви не ввели своє прізище";
			else if (E_mail=="" || E_mail ==" ")
				fail = "Ви не ввели E-mail";
			else if (adr_pattern.test(E_mail) == false)
				fail = "Ви ввели E-mail неправильно";
			else if (numberTest.test(number.value) == false)
				fail = "Ви ввели не правильно номер телефону";
			if(fail)
				alert(fail);
			else{
				$('.popup').css('display','none');
				$('.answer').css('display','block');
				$('.answer_content').css('display','block');
			}
}
function hid2(){
	$('.answer').css('display','none');
	$('.answer_content').css('display','none');
}

$(document).ready(function () {
			$(document).on("click", "#add_comment", function () {
				var form = $("form[name = 'form']");
				form.css("display", "block");
				$("#add_comment").replaceWith(form);
			});

			$(document).on("click", "input[name='send']", function () {
				$('#comments').css('margin-top','80px')
				var username = $("#com_name").val();
				var date = new Date().toLocaleString();
				var comment = $("textarea[name = 'comment']").val();
				$("<div class='div_com_all'><div class='div_com'><p class='p_user'>" + username + "</p><p class='p_date'>"+ date+"</p></div><hr class='hr_com' align='center' size='1.5px' color='#4a4a4a'><p class='p_com'>" + comment + "</p></div>").appendTo("#comments");
				document.getElementById('textarea').value = "";
			});
});
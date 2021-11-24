function auto(){
	var auto = $("#select").val();
	if (auto != ''){
		$('#img_auto').attr("src","../img/auto.jpg");
		$('#img_auto').css('display','block')
	}
	else {
		$('#img_auto').attr("src","");
		$('#img_auto').css('display','none')
	};
}

function valid(form){
			var fail = false;
			var name = $('#name').val();
			var numberTest = /^(\+380|0|380)?[\s\-]?\(?[0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
			if ($("#select").val() == "") {
				fail = "Ви не вибрали автомобіль"
			}
			else if(name=="" || name ==" "){
				fail = "Ви не ввели ім'я"
			}
			else if (numberTest.test(number.value) == false){
				fail = "Ви ввели не правильно номер телефону";
			}
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

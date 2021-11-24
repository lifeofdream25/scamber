//for catalog

function page1() {
	
	$('.auto_catalog2').css('display','none');
	$('.auto_catalog1').css('display','block');
	$('.page_swap:first-child').css('background-color','#cfcfcf');
	$('.page_swap:last-child').css('background','none')
}
function page2() {
	$('.page_swap:last-child').css('background-color','#cfcfcf');
	$('.page_swap:first-child').css('background','none')
	$('.auto_catalog1').css('display','none');
	$('.auto_catalog2').css('display','block');
}
/*$('.page1').click( function () {
	$('.auto_catalog2').css('display','none');
	$('.auto_catalog1').css('display','block');
})
$('.page2').click( function () {
	$('.auto_catalog1').css('display','none');
	$('.auto_catalog2').css('display','block');
})*/
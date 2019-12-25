$(document).ready(function () {
    var latest_p = 25;
    $('#papers li:lt('+latest_p+')').show();
    $('#hideOldPapers').hide();
    $('#hideOld').hide();
    var items_p =  $("#papers li").length;
    var items_s =  $("#softwares li").length;
    $('#seeAllPapers').click(function () {
	$('#hideOldPapers').show();
	$('#papers li:lt('+items_p+')').show();
	$('#seeAllPapers').hide();
    });
    $('#hideOldPapers').click(function () {
	$('#papers li').not(':lt('+latest_p+')').hide();
	$('#seeAllPapers').show();
	$('#hideOldPapers').hide();
    });
});

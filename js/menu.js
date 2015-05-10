var build_menu_status = false;
function build_menu_button(){
	if(build_menu_status == false){	
		$('#add_button').css('color','white');
		$('.add_button').css('opacity','1');
		$('.add_button').css('left','0');
		build_menu_status = true;
	} else {
		$('#add_button').css('color','black');
		$('.add_button').css('opacity','0');
		$('.add_button').css('left','-200px');
		build_menu_status = false;
	}
}

function house_build_menu(elem, selected_house){
	$('.build_submenu').css('background-color','rgb(175, 175, 175)');
	$('.build_submenu').css('color','white');
	requested_model = selected_house;
	add_button_click();
	$(elem).css('background-color','gold');
	$(elem).css('color','black');
}

function house_build_button(elem){
	$('.add_button').css('background-color','rgb(175, 175, 175)');
	$('.add_button').css('color','white');
	$(elem).css('background-color','gold');
	$(elem).css('color','black');
	$('.build_submenu').css('opacity', '1');
	$('.build_submenu').css('left', '16px');
}
function tower_build_button(elem){
	$('.add_button').css('background-color','rgb(175, 175, 175)');
	$('.add_button').css('color','white');
	$(elem).css('background-color','gold');
	$(elem).css('color','black');
	requested_model = 'medium_tower';
	add_button_click();
}
function road_build_button(elem){
	$('.add_button').css('background-color','rgb(175, 175, 175)');
	$('.add_button').css('color','white');
	$(elem).css('background-color','gold');
	$(elem).css('color','black');
	requested_model = 'road';
	add_button_click();
}
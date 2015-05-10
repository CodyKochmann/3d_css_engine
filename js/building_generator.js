var requested_model = '';

function Building(id, x_grid_position, y_grid_position)
{
	this.id = id;
	this.x_grid_position = x_grid_position;
	this.y_grid_position = y_grid_position;
	this.inner_html ='<div id="' + this.id + '" class="cube" style="top: ' + ((x_grid_position-1) * 100).toString() + 'px;left: ' + ((y_grid_position-1) * 100).toString() + 'px;-webkit-transform: translateZ(50px) rotateX(-90deg) rotateY(-90deg);">' + get_building_style(this.id, requested_model) + '</div>';
	$("#ground").append(this.inner_html);
	$('.face').click(function(){
	$('#'+ $(this).attr("name")).remove();
});
}
var tile_toggled = false;


function tile_click(id){
  // 20 x 20 grid
  // 
  if(tile_toggled){
    // 10 will need to be changed when the city is scaled up
    var constructor_y_coordinates;
    if ((id%20) == 0){
      constructor_y_coordinates = 20;
    } else {
      constructor_y_coordinates = (id%20);
    }
  	var tmp = new Building(("building_"+(generate_id(id))),Math.ceil(id/20),constructor_y_coordinates);
  }
}
function add_button_click(){
	if (tile_toggled){
		//tile_toggled = false;
		//$('#add_button').css('color','white');
	} else {
		tile_toggled = true;
		$('#add_button').css('color','black');
	}
}

//========================================================
// generates unique ids for new buildings being made. 
//========================================================
var alphabet = ["a","b","c","d","e","f","g","h","i","j"];
var result_id = [];
var id_list = [];
function generate_id(num){
	var large_enough = false;
	var tmp_id_generator = 10;
	var letter_length = 1;
	// figure out how many letters you need in a base of 10
	while(!large_enough){
		if (tmp_id_generator >= num){
			large_enough = true;
		} else {
			letter_length++
			tmp_id_generator = tmp_id_generator * 10;
		}
	}
	tmp_id_generator = tmp_id_generator/10;
	for (var cnt = 0; cnt < letter_length; cnt++){
		result_id[cnt] = Math.floor(num/tmp_id_generator);
		num = num - (Math.floor(num/tmp_id_generator)*tmp_id_generator);
		tmp_id_generator = tmp_id_generator/10; 
	}
	var string_builder = '';
	for (var cnt = 0; cnt < letter_length; cnt++){
		string_builder += alphabet[result_id[cnt]]
	}
	result_id.length = 0;
	// ensure no duplicates
	for (var cnt = 0; cnt < id_list.length; cnt++){
		if(string_builder == id_list[cnt]){
			var duplicates_detected = true;
			while(duplicates_detected){
				string_builder = string_builder + 'a';
				var list_checker = 0;
				for (var dup = 0; dup < id_list.length; dup++){
					if (string_builder != id_list.length){
						list_checker++
						if(list_checker == id_list.length){
							duplicates_detected = false;
						}
					}
				}
			}
		}
	}
	id_list.push(string_builder);
	return(string_builder);
}
// end of id generator


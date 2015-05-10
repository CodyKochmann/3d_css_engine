var ground_style = 'rotateX(45deg) rotateY(0deg) rotateZ(0deg)';
var mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

var ground_x = 0;
var ground_z = 0;

//set ground transform here, not css.
$('#ground').css('-webkit-transform', 'rotateX(45deg) rotateY(0deg) rotateZ(0deg) ');

var x_begin, z_begin, x_change, z_change;


$( "#store_container" ).mousedown(function() {
  x_begin = event.pageY;
  z_begin = event.pageX;
});
$( "#store_container" ).mouseup(function() {
  ground_z = z_change;
  ground_x = x_change;
});
$(document).mousemove(function(){
  if(mouseDown){
      x_change =(ground_x + (x_begin - event.pageY)*1.5);
      z_change =(ground_z + (z_begin - event.pageX)*1.5);
      if(-x_change != 'NaNpx' && -z_change != 'NaNpx'){
      	ground_style = 'rotateX(45deg) rotateY(0deg) rotateZ(0deg)  translateX(' + -z_change + 'px) translateY(' + -x_change + 'px)';
      }//$('#ground').css('-webkit-transform', 'rotateX(45deg) rotateY(0deg) rotateZ(0deg)  translateX(' + -z_change + 'px) translateY(' + -x_change + 'px)');
}})



$(document).on('touchstart', '#store_container', function(e) {
  e.preventDefault(); 
  mouseDown = true;
  x_begin = e.originalEvent.touches[0].pageY;
  z_begin = e.originalEvent.touches[0].pageX;
  setTimeout(
    function(){
      if(!mouseDown){
        $(document.elementFromPoint(z_begin, x_begin)).click();
      }
    },200
  );
});
$(document).on('touchmove', '#store_container', function(b) {
  b.preventDefault(); 
  x_change =(ground_x + (x_begin - b.originalEvent.touches[0].pageY)*1.5);
  z_change =(ground_z + (z_begin - b.originalEvent.touches[0].pageX)*1.5);
  ground_style = 'rotateX(45deg) rotateY(0deg) rotateZ(0deg)  translateX(' + -z_change + 'px) translateY(' + -x_change + 'px)';
  $('#ground').css('-webkit-transform', 'rotateX(45deg) rotateY(0deg) rotateZ(0deg)  translateX(' + -z_change + 'px) translateY(' + -x_change + 'px)');
});
$(document).on('touchend', '#store_container', function(m) {
  m.preventDefault(); 
  mouseDown = false;
  ground_z = z_change;
  ground_x = x_change;
});
// simulate the click

//=======================================
// this keeps the ground from crashing
//=======================================
function manage_ground(){
	$('#ground').css('-webkit-transform',ground_style);
} setInterval(function(){manage_ground();},30);

// tree builder



function forest(){
  tile_toggled = true;
    for(var i =0;i<=399;i++){
      if( (Math.floor((Math.random() * 15) + 1) % 2) == 1 && i%2 == 1){
        new_tree();
        requested_model = 'tree_layout';
        tile_click(i+1);
      }
    }
    tile_toggled = false;
  //create_tree(100)
}

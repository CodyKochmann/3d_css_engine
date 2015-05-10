'<div id="' + this.id + '" class="cube" style="background-color: white;opacity: 0.6;top: ' + ((x_grid_position-1) * 100).toString() + 'px;left: ' + ((y_grid_position-1) * 100).toString() + 'px;-webkit-transform: translateZ(50px);">
<div name="' + this.id + '" class="face front"></div>
<div name="' + this.id + '" class="face back"></div>
<div name="' + this.id + '" class="face left">
</div><div name="' + this.id + '" class="face right">
</div><div name="' + this.id + '" class="face top">
</div><div name="' + this.id + '" class="face bottom"></div></div>';

'<div id="' + this.id + '" class="cube" style="background-color: white;opacity: 0.6;top: ' + ((x_grid_position-1) * 100).toString() + 'px;left: ' + ((y_grid_position-1) * 100).toString() + 'px;-webkit-transform: translateZ(50px);">' + get_building_style(this.id) + '</div>';
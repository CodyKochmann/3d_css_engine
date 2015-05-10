# get_building_style(this.id)

get_building_style = (id) ->
  building_type = 'white_box'
  '<div name="' + id + '" class="face front"></div>
<div name="' + id + '" class="face back"></div>
<div name="' + id + '" class="face left">
</div><div name="' + id + '" class="face right">
</div><div name="' + id + '" class="face top">
</div><div name="' + id + '" class="face bottom"></div></div>'

console.log get_building_style(14)
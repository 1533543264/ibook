
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $form = $('form')
      $perimeter = $('#perimeter'),
      $area = $('#area');
  //calc  button click event
$form.submit(function(e){
  e.preventDefault();
  //get value
  var w = Number($width.val()),
      h = Number($height.val());
  //calculate
  var p = 2 * (w+h),
      a = w*h;

  //output
  $perimeter.val(p);
  $area.val(a);
})
  
})

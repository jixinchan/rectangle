$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $form=$('form'),
      $area=$('#area'),
      $perimeter=$('#perimeter');


  $form.submit(function(){
    var rect = new rectangle($width.val(),$length.val());//eslint-disable-line no-undef
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());
  }); 

});

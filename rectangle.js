$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter');

  $btnCal.click(function(){
    var rect = new rectangle($width.val(),$length.val());//eslint-disable-line no-undef
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());
  });
});

$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter');

  $btnCal.click(function(){
    var w=Number($width.val()),l=Number($length.val());
    var p=2*(w+l);
    var a=w*l;
    $area.val(a);
    $perimeter.val(p);
  });
});

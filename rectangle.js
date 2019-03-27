$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $lengthValidation=$('#length-validation');

  $btnCal.click(function(){
    var w=$width.val(),l=$length.val();
    if(l===''){
      $lengthValidation.html('高度不能为空！');
    }
    if(w===''){
      $widthValidation.html('宽度不能为空！');
      return;
    }
    var rect = new rectangle($width.val(),$length.val());//eslint-disable-line no-undef
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());
  });
  $length.focusout(function(){
    var l = $length.val();
    var result = valid(l);
    if(!result.isOK){
      $lengthValidation.html('长度'+result.reason);
    }else{
      $lengthValidation.html('');
    }
     
  });
  $width.focusout(function(){
    var w = $width.val();
    var result = valid(w);
    if(!result.isOK){
      $widthValidation.html('宽度'+result.resaon);
    }else{
      $widthValidation.html('');
     }
  });

});

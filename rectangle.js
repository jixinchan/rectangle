$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $lengthValidation=$('#length-validation');

  /*
   * 表单级验证
   */
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
  
  /*
   *字符级校验
   */
  $length.focusout(function(){
    var l = $length.val();
    var result = valid(l);//eslint-disable-line no-undef
    if(!result.isOK){
      $lengthValidation.html('长度'+result.reason);
      $length.select();
    }else{
      $lengthValidation.html('');
    }
     
  });
  
  $width.focusout(function(){
    var w = $width.val();
    var result = valid(w);//eslint-disable-line no-undef
    if(!result.isOK){
      $widthValidation.html('宽度'+result.reason);
      $width.select();
    }else{
      $widthValidation.html('');
    }
  });

  /*
   *字符级校验
   */
  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
    if(e.key==='.'){
      if(e.target.value===''){
        e.preventDefault();
      }
      if(e.target.value.indexOf('.')!==-1){
        e.preventDefault();
      }else{
        if(e.target.selecttionStart===0) e.preventDefault();
      }
    } 
  });
  $length.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
    if(e.key==='.'){
      if(e.target.value===''){
        e.preventDefault();
      }
      if(e.target.value.indexOf('.')!==-1){
        e.preventDefault();
      }else{
        if(e.target.selecttionStart===0) e.preventDefault();
      }
    } 
  });

});

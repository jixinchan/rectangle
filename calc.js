/* exported Rectangle */
function rectangle(width,height) {//eslint-disable-line no-unused-vars
  var w = Number(width),
      h = Number(height);
  this.area = function() {
    return w * h;
  };
  this.perimeter = function() {
    return 2 * (w + h);          
  };
}

function valid(data){//eslint-disable-line no-unused-vars
  var result = {
    isOK:false,
    reason:''
  };

  if(data==''){
    result.reason='不能为空！';
    return result;                
  }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-])?(\d+)?$/.test(data)){
    result.reason='不是数字！';
    return result;                
  }else if(Number(data)<0){
    result.reason='不能为负！';
    return result;                 
  }else{
    result.reason='';
    result.isOK=true;
    return result;
  }
}

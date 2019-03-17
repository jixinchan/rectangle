var expect = chai.expect;//eslint-disable-line no-undef    
describe('计算矩形面积测试',function(){//eslint-disable-line no-undef    
  it('长是10，宽是2，面积是20',function(){//eslint-disable-line no-undef    
    var rect=new rectangle(10,2);//eslint-disable-line no-undef    
    expect(rect.area()).to.be.equal(20);
  });
  it('长是0.8，宽是0.3，面积是0.24',function(){//eslint-disable-line no-undef    
    var rect=new rectangle(0.8,0.3);//eslint-disable-line no-undef    
    expect(rect.area()).to.be.equal(0.24);
  });
  it('宽度和高度是整数字符串', function() {//eslint-disable-line no-undef
    var r = new rectangle('13', '2');//eslint-disable-line no-undef
    expect(r.area()).to.be.equal(26);            
  });
});

describe('矩形计算器周长计算功能测试套件', function(){//eslint-disable-line no-undef
  it('宽度和高度是整数', function(){//eslint-disable-line no-undef
    var r = new rectangle(4, 5);//eslint-disable-line no-undef
    expect(r.perimeter()).to.be.equal(18);             
  });

  it('宽度和高度是小数', function() {//eslint-disable-line no-undef
    var r = new rectangle(0.3, 0.8);//eslint-disable-line no-undef
    expect(r.perimeter()).to.be.equal(2.2000000000000001);              
  });

  it('宽度和高度是整数字符串', function() {//eslint-disable-line no-undef
    var r = new rectangle('4', '5');//eslint-disable-line no-undef
    expect(r.perimeter()).to.be.equal(18);
              
  });

});

var expect = chai.expect;
describe('计算矩形面积测试',function(){
  it('长是10，宽是2，面积是20',function(){
    var rect=rectangle();
    expect(rect.area(10,2)).to.be.equal(20);
  });
  it('长是8，宽是3，周长是22',function(){
    var rect=rectangle();
    expect(rect.perimeter(8,3)).to.be.equal(22);
  })
});

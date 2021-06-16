// it / test
const { add } = require("../index");
it('1+2=3 ', async () => {
    //写单元测试的逻辑
    const a = 1;
    const b = 2;
    const result = add(a,b);
    //验证是否和正确的一样
    //console.log(result===2);
    //具有可读性
    //toBe -> jest 匹配器
    expect(result).toBe(1);
});
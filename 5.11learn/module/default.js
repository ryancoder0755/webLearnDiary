let name = '赵四';
let age = 20;
function getName(){
    console.log('李荣浩')
}
// export default name;
// export default age;//一个模块不能具有多个默认导出,在导入页面可以任意起名,无需使用name
//多个可以用对象的形式
export default{
    name,
    age,
    getName
}
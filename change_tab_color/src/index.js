//1. 使用ES6导入语法，导入jquery
import $ from 'jquery'
// 导入样式 在webpack中一切皆模块 都可以通过ES6导入语法进行导入使用
import '@/css/index.css'
import '@/css/index.less'
// 导入图片，得到图片文件
import logo from '../test/logo.gif'
// 指向的是一个base64字符串
console.log(logo);
$('.box').attr('src',logo)
// 2.定义jq的入口函数
$(function () {
    // 3.实现奇数行变色 odd选择奇数行
    $('li:odd').css('background-color', 'yellow')
    $('li:even').css('background-color', 'skyblue')
})
// 定义装饰器函数
function info(target){
    target.info = 'Person info is here'
}
// 定义一个普通的类 
@info
// class Person{}
console.log(Person.info);

import msg from '@/msg.js'
console.log(msg);
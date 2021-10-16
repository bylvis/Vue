//1. 使用ES6导入语法，导入jquery
import $ from 'jquery'

// 2.定义jq的入口函数
$(function(){
    // 3.实现奇数行变色 odd选择奇数行
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','green')
})
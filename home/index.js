
;$(function($,window){
    "use strict";
    var page = {
        // 初始化实例
        init:function(){
            page.bind();
            page.method();
        },
        // 绑定元素事件
        bind:function(){
            $("#search").on('click',function(){
                console.log("获取到的输入城市值：",$("#searchValue").val())
            })
        },
        // 函数方法集合
        method:function(){
             // 页面轮播图功能实现函数
            $('.carousel').carousel();
        }
    };
    page.init()
});
;
$(function ($, window) {
    "use strict";
    // 模拟后台数据（临时使用）
    var cityAreaData = {
        "华中": [{
                name: "华中五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华中五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华中五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华中五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "华南": [{
                name: "华南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华南五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "华东": [{
                name: "华东五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华东五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华东五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "华北": [{
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "华北五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "东北": [{
                name: "东北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "东北五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "西南": [{
                name: "西南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "西南五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "西南五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
        "西北": [{
                name: "西北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "西北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "西北五洲",
                imgUrl: "./public/images/logo.png"
            },
            {
                name: "西北五洲",
                imgUrl: "./public/images/logo.png"
            },
        ],
    }
    var page = {
        // 初始化实例
        init: function () {
            page.bind();
            page.methods();
            page.initAreaEle(cityAreaData['华南']);
        },
        // 绑定元素事件
        bind: function () {
            // 搜索城市
            $("#search").on('click', function () {
                console.log("获取到的输入城市值：", $("#searchValue").val())
            });
            // 搜索区域
            $("#area-tabsID").on('click', 'span', function (e) {
                $(e.target).addClass("activeBG");
                $(e.target).siblings().removeClass("activeBG");
            });
            // 区域tabs按钮的点击事件
            $("#cityAreaItem").on('click', 'span', function (e) {
                $(e.target).addClass("activeBG");
                $(e.target).siblings().removeClass("activeBG");
                const eleText = e.target.innerText;
                page.initAreaEle(cityAreaData[eleText]);
            });
            // 兼容移动端上的点击操作
            $(".carousel-control-next-icon").on('click',function(e){
                $('.carousel').carousel('next')
            });
            $(".carousel-control-prev-icon").on('click',function(e){
                $('.carousel').carousel('prev')
            })
        },
        // 函数方法集合
        methods: function () {
            // 页面轮播图功能实现函数
            $('.carousel').carousel({
                touch:true
            });
        },
        // 初始化区域元素
        initAreaEle: function (cityList) {
            var item = null;
            $("#companyItems").empty();
            cityList.map(function (value, index, array) {
                item = '<div class="company-item"><img src="' + value.imgUrl + '" alt="公司照片" class="company-image">';
                item += '<span>公司名称:<span>' + value.name + '</span></span></div>';
                $("#companyItems").append(item)
            })
        }
    };
    page.init()
});
(function () {

    'use strict';

    // 渲染容器
    var $this;
    // 目标时间
    var targetTime, endStr;
    // 计时器
    var timer = null;

    // time: 结束时间, str: 过期时输出的字符串
    $.fn.countDown = function(time, str) {
        // 设置全局变量
        targetTime = time;
        endStr = str;
        // DOM对象
        $this = $(this);
        // 开始...
        init();
    }

    // 执行
    var init = function() {

        // 格式化处理 把传入的 2017-03-16 转为 2017/03/16
        targetTime = targetTime.substring(0,19).replace(/-/g,'/');

        timer = setInterval(go, 1);
        // go();

    };

    var go = function() {
        render(computed());
    }

    // 处理倒计时数据
    var computed = function() {

        // 设置 当前时间和结束时间
        var endTime = new Date(targetTime),
            nowTime = new Date();

        // 时间差
        var distanceTime = endTime - nowTime;

        // 结果字符串
        var resultStr = '';

        if(distanceTime > 0) {

            // 计算
            var ms = Math.floor(distanceTime%1000);
            var sec = Math.floor(distanceTime/1000%60);
            var min = Math.floor(distanceTime/1000/60%60);
            var hour =Math.floor(distanceTime/1000/60/60%24);
            ms = Math.floor(ms/10);
            // console.log(ms/10);

            if(ms<10){
                ms = '0'+ ms;
            }
            if(sec<10){
                sec = '0'+ sec;
            }
            if(min<10){
                min = '0'+ min;
            }
            if(hour<10){
                hour = '0'+ hour;
            }

            // hour + ':' +min + ':' +sec + ':' +ms
            resultStr = min + ':' +sec + ':' + ms;

        } else {

            clearInterval(timer);
            resultStr = endStr;
            
        }

        return resultStr;

    };

    // 输出数据
    var render = function(str) {
        $this.html(str);
    };
 
})();
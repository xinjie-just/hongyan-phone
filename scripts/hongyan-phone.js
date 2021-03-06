/**
 * Created by lixinjie on 2017/8/16.
 */
/* rem 与 px 之间的转换
 * 当前屏幕宽度 / 375 = 当前屏幕宽度的font-size / 100
 * */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// 侧滑导航切换
$("#menu").on("tap", function(e) {
    $("#navWrapper").toggle();
    $(document).on("tap", function () {
        $("#navWrapper").hide();
    });
    e.stopPropagation();
});
$("#nav").on("tap", function (e) {
    e.stopPropagation();
});

/*回到顶部图标的显示与影藏*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
        $("#toTop").show(400).css("display", "block"); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").hide(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});

// 回到顶部
/*$("#toTop").on("tap", function () {
    $("html, body").({scrollTop: 0}, 300);
    return false;
});*/

$.fn.scrollTo =function(options){

    var defaults = {
        toT : 0,    //滚动目标位置
        durTime : 500,  //过渡动画时间
        delay : 30,     //定时器时间
        callback:null   //回调函数
    };
    var opts = $.extend(defaults,options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(),//滚动条当前的位置
        subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function(t){
            index++;
            var per = Math.round(subTop/dur);
            if(index >= dur){
                _this.scrollTop(t);
                window.clearInterval(timer);
                if(opts.callback && typeof opts.callback == 'function'){
                    opts.callback();
                }
                return;
            }else{
                _this.scrollTop(curTop + index*per);
            }
        };
    timer = window.setInterval(function(){
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};

$("#toTop").on("tap", function () {
    $("body").scrollTo({toT: 0});
    return false;
});

/*返回*/
$("#back").on("tap", function () {
    history.go(-1);
});
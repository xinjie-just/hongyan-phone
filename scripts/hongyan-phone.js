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

/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
        $("#toTop").show(400).css("display", "block"); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").hide(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").on("tap", function () {
    $("html, body").animate({scrollTop: 0}, 300); /* 持续时间为 300ms */
    return false;
});

/*返回*/
$("#back").on("tap", function () {
    history.go(-1);
})
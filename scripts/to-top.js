/**
 * Created by lixinjie on 2017/8/2.
 */
/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
        $("#toTop").fadeIn().css("display", "block"); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").on("click", function () {
    $("html, body").animate({scrollTop: 0}, 300); /* 持续时间为 300ms */
    return false;
});
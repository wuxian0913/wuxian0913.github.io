/**
 * Author: Ruo
 * Create: 2018-03-26
 * Description:
 */

$(document).ready(function () {
    const boxes = $(".box"); // 盒子们
    $.each(boxes, (index, box) => {
        box = $(box);
        const initState = box.attr('initState');
        const btn = box.children('span');
        const content = box.children('div');
        if(initState) extend(initState === 'extend', content, btn, false);
        btn.on('click', function() {
            if (content.css('display') === 'none') { // 不可见的时候
                extend(true, content, btn);
            } else { // 可见的时候
                extend(false, content, btn);
            }
        });
    });
    /**
     * 盒子缩放动画的方法
     * @param isExtend 设定动画方式
     * @param content 盒子
     * @param btn 按钮
     * @param animate 是否执行动画
     */
    function extend(isExtend, content, btn, animate = true) {
        if (isExtend) {
            content.animate({display: 'block'}, 0, () => {
                content.show(animate ? 400 : 0);
            });
            btn.text('收缩');
        } else {
            content.hide(animate ? 400 : 0, () => {
                content.css({display: 'none'})
            });
            btn.text('展开');
        }
    }
});
// var msg = ["你真伟大","你真漂亮","该吃饭了"];
// alert(msg[Math.floor(Math.random() * msg.length)]);
//单击显示随机文字
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("路见不平一声吼，吼完继续往前走。", "咸鱼翻身，还是咸鱼。", "水能载舟，亦能煮粥！",
            "明月几时有，抬头自己瞅。", "天哪！我的衣服又瘦了。", "听君一席话，回家烤白薯。", "流氓不可怕，就怕流氓有文化。",
            "知识就像内裤，看不见但很重要。", "为了祖国下一代，再丑也得谈恋爱。", "穷玩车，富玩表，牛B加班敲电脑。",
            "英雄不问出路，流氓不看岁数。", "我们的目标：向钱看，向厚赚。", "帅有个屁用！到头来还不是被卒吃掉！");
        //生成随机数num，使用random
        var num = Math.random() * 13;
        num = parseInt(num, 10);
        var $i = $("<span/>").text(a[num]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF69B4"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
});
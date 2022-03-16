 $(document).ready(function ($) {
   //  当前选中的文字
   var num = 0;
   //  当前显示的类型
   var typeIndex = 0
   //  音频对象
   let audio = null
   var round = (max, min) => Math.round(Math.random() * (max - min) + min)
   //  随机字符串数组
   var a = [
     "不必太纠结于当下， 也不必太忧虑未来， 当你经历过一些事情的时候， 眼前的风景已经和从前不一样了。",
     "一个拥有虚拟身份的人， 可以随时随地的接入这个虚拟世界， 而这个世界， 有着自我不断发展的文化内容和经济系统， 同时也能满足个体的社交、 游戏、 经济生活等需求。",
     "一座山， 隔不了两两相思， 一天涯， 断不了两两无言， 且听风吟， 吟不完我一生思念。",
     "我常常对自己说， 别告诉别人你不开心， 勤奋点做事， 没什么事便早点回家睡觉去。",
     "生活坏到一定程度就会好起来， 因为它无法更坏。 努力过后， 才知道许多事情， 坚持坚持。",
   ]
   //  赋值给文字输入框
   $(".audioInput").val(a[num])

   //  文字切换
   $(".audioToggle").click(function (e) {
     //生成随机数num，使用random
     num = round(4, 0);
     console.log(num);
     //  赋值
     $('.audioInput').val(a[num])
   });


  //  data-src="0/0/1.wav"  .playAudio


   //  音频播放
   $('.playAudio').click(function (e) {
     //  阻止默认事件
     e.preventDefault()
     //  判断当前音频是否正在被播放
     if ($(this).children().hasClass('active')) return false
     //  判断音频是否在播放
     if (audio) audio.remove()

     //  当前路径 
     const path = $(this).attr('data-src')
     console.log(path);

     //  给当前元素播放
     $(this).children().addClass('active')
     //  清空播放的兄弟节点样式
     $(this).siblings().children().removeClass('active')

     audio = new Audio()
     console.log(audio);
     audio.volume = 0.2
     audio.src = `./audio/${path}`
     audio.controls = true
     audio.play()
     //  音频播放完毕删除元素并还原样式
     audio.onended = () => {
       $('.playAudio').children().removeClass('active')
       //  audio.remove()
     }

     $('#audio_inner').append(audio)
   })

   //  音频类型切换
   $('.audioTypeToggle').click(function () {
     //  赋值当前选中类型下标
     typeIndex = $(this).index()
     //  切换当前分类被选中的样式
     $(this).addClass('active').siblings().removeClass('active')

     // 判断音频对象是否存在
     if (audio) {
       audio.remove()
     }

     //  复原播放的音频样式
     $('.playAudio').children().removeClass('active')
     //  切换显示的音频容器
     $('.audio-content section').eq($(this).index()).addClass('active').siblings().removeClass('active');
   })


 });
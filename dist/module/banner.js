define(function(){
  function Banner(){}
  Banner.prototype.init = function(){
    $(".bann").load("/html/banner.html #banner",function(){
      $(function(){
            var uii = $("#banner .btn li"),
            oii = $("#banner .aBtn li");
            // 获取要操作的元素

            var index = 1;//记录当前的图片是第几张
            var flag = false; //标记位 标记当前轮播图处于没有播放的状态
            // oii.addClass("ac")
            oii.on("click",function(){
              if(!flag){//(!flag反选 说明轮播图开始运动了)
                flag = true;//当前播放结束前禁止进入新的轮播
                $(this).addClass("ac").siblings().removeClass("ac");
                //this指当前触发它的元素 addClass向元素添加一个类名 siblibgs找到this的所有同级元素，这里找到所有的li
                //removeClass去除类名
                //本句代码的完整意义  给this添加ac 同时获取同级的元素并除去他们的ac siblings是获取同级的其他元素，不会取到this本身
                console.log(index)
                uii.eq(index).stop().fadeOut(500);
                index = $(this).index();
                uii.eq(index).stop().fadeIn(500,function(){
                  flag = false;
                });
              }
            });
            var time = null;
          function auto(){
            time = setInterval(function(){
              uii.eq(index).stop().fadeOut(500);
              index++;
              if(index>1){
                index=0;
              }
              oii.eq(index).addClass("ac").siblings().removeClass("ac");
              uii.eq(index).stop().fadeIn(500);
            },3000);
          }
          auto();
          $("#banner").hover(function(){
           clearInterval(time);
          },auto);
          
      });
    })
  }
  return new Banner();
});
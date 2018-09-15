define(function(){
  function Atama(){}
  Atama.prototype.init = function(){
    $(function(){
      var nav = $(".nav"),
          offset = nav.offset();
      var serch = $(".serch"),
          atama = $(".atama");
          $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            if(offset.top<scrollTop){
              nav.css({"position":"fixed","top": "0"});
              serch.css({"display":"none"});
              atama.css({"display":"block"});
            }else{
              nav.css({"position":"relative"});
              serch.css({"display":"block"});
              atama.css({"display":"none"});
            }
          });

          $("#u").on("click",function(){
            window.location.href = "/html/login.html";
          });

          $("#p").on("click",function(){
            window.location.href = "/html/cart.html";
          });

    });
  };
  return new Atama();
});
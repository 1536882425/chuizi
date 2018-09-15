define(function(){
  function Detial(){};
  Detial.prototype.init = function(){
    $(function(){
      var obj={};
      var str="";
      var buy=$(".buy");
      var add=$(".add");
      obj.id=window.location.search.split("=")[1]
      $.post("http://localhost/chuizi/v1/detail.php",obj,function(datas){
        // window.location.search.split("=")[1]
        $.each(datas,function(i,item){
          str=`${item.name}`;
          console.log(str);
          $(".r_t h3").html(str);
        });
        },"json");

        $(".hs").on("click",function(){
          $(".hs").css({"background":"black","border":"2px solid #999999"});
          $("#tu")[0].src = "/images/detailIMG/black.png"
          $(".bs").css({"background":"#ffffff","border":"2px solid #999999"});
        });
        $(".bs").on("click",function(){
          $(".bs").css({"background":"#ddcdcd","border":"2px solid #999999"});
          $("#tu")[0].src = "/images/detailIMG/white.png"
          $(".hs").css({"background":"#ffffff","border":"2px solid #999999"});
        });

        buy.on("click",function(){
         window.location.href = "/html/cart.html";
        });

        buy.on("cliclk",function(){
                  
        });

        add.on("click",function(){
          // window.location.href = "/html/cart.html";
        })

        add.on("click",function(){
          $.post("http://localhost/chuizi/v1/add.php",obj,function(datas){
          console.log(datas);
          if(datas){
            alert("加入购物车成功");
          }

          });
        });

    });
  }
  return new Detial();
});
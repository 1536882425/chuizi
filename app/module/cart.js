define(function(){
  function Cart(){}
  Cart.prototype.init = function(){
      $(function(){
        var xg = $("#xg");
        var car = $(".car");
        var car2 = $(".car2");
        xg.on("click",function(){
          window.location.href = ("/");
        });


        var obj={};
        var str="";
        var carr2=$(".carr2");
        var zj=0;
        var str1="";
        obj.id=window.location.search.split("=")[1];
        $.post("http://localhost/chuizi/v1/car.php",obj,function(datas){
        if(datas){
          car.css({"display":"none"});
          car2.css({"display":"block"});
        }
        $.each(datas,function(i,item){
          str+=` <div class="list" data-id=${item.id}>
          <a href="javascript:;"><span class="check"></span></a>
          <a href="javascript:;"><span class="shop"><img src="/images/chuizi/${item.img}" alt=""></span>
          <ul>
            <li>${item.name}</li>
            <li>${item.information}</li>
          </ul>
          <span class="single">${item.price}</span>
          <a href="javascript:;"><span class="min"></span></a>
          <span class="num">${item.car}</span>
          <a href="javascript:;"><span class="max"></span></a>
          <a href="javascript:;"><span class="none"></span></a>
        </div>`;
        carr2.append(str);
        zj+=parseInt(item.price);
        });
        $(".money").html(zj);
        $(".max").on("click",function(){
          $.post("http://localhost/chuizi/v1/add.php",{id:$(this).parents(".list").attr("data-id")},function(data){
            console.log(data)
          $.each(data,function(i,item){
            str1+=`<span class="num">${item.car}</span>`;
            carr2.append(str1);
          });
          },"json");
        });

        },"json");

        

      });
      
  }
  return new Cart();
});
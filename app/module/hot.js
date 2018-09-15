define(function(){
  function Hot(){}
  Hot.prototype.init = function(){
    $(function(){
      var left = $("#left"),
          right = $("#right"),
          ul = $(".phone ul"),
          li = $(".phone ul li");

          left.on("click",function(){
            // ul.css({"transform":"translate(0px,0px)"});
            ul.animate({left:"0px"},1000);
            if(ul.css({"left":"0"})){
              left.css({"cursor":"not-allowed"});
              right.css({"cursor":"pointer"});
            }
          });
          right.on("click",function(){
            // ul.css({"transform":"translate(-1220px,0px)"});
            ul.animate({left:"-1220px"},1000);
            if(ul.css({"left":"0"})){
              right.css({"cursor":"not-allowed"});
              left.css({"cursor":"pointer"});
            }
          });
          left.on();
          
          var obj={};
          var str="";
          var cann = $("#cann");
          $.post("http://localhost/chuizi/v1/hot.php",obj,function(datas){
          // console.log(datas);
            $.each(datas,function(i,item){
              str+=`<li><a href="http://localhost:2333/html/detail.html?id=${item.id}"><div><img src="/images/chuizi/${item.img}"></div><h4>${item.name}</h4><h6>${item.information}</h6><h2>${item.price}</h2></a></li>`
            });
            cann.append(str);
          },"json");
// window.location.search.split("=")[1]
    });
  };
  return new Hot();
});
define(function(){
  function Base(){}
  Base.prototype.init = function(){
    $(".header").load("/html/header.html #header",function(){
      $("#user").on("click",function(){
        window.location.href = "/html/login.html";
      });

      $("#pay").on("click",function(){
        window.location.href = "/html/cart.html";
      });

      $(".logo").on("click",function(){
        window.location.href = "/index.html";
      });

    })
    $(".footer").load("/html/footer.html #footer", function(){

    })
  }
  return new Base();
});
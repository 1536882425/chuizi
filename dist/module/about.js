define(function(){
  function About(){}
  About.prototype.init = function(){
    $(".abo").load("/html/about.html #about",function(){

    })
  }
  return new About();
});
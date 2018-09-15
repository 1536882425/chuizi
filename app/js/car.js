require(["config"],function(){
  require(["cart","about","base"],function(cart,about,base){
    cart.init();
    about.init();
    base.init();
  });
});
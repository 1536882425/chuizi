require(["config"],function(){
  require(["detaill","about","base"],function(detaill,about,base){
    detaill.init();
    about.init();
    base.init();
  })
});
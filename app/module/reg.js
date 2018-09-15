define(function(){
  function Reg(){}
  Reg.prototype.init = function(){
    $(function(){
      var regg = $("#regg"),
          sj = $("#sj"),
          mm1 = $("#mm1"),
          mm2 = $("#mm2"),
          usern = $("#usern"),
          passw = $("#passw"),
          passw1 = $("#passw1"),
          owari = $("#owari"),
          arr = [false,false,false],
          isReg = true;

          usern.blur("click",function(){
            var str = this.value;
            var reg = /0?(13|14|15|18)[0-9]{9}/;
            var regg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if((reg.test(str))||(regg.test(str))){
              arr[0] = true;
              sj.hide();
            }else{
              arr[0] = false;
              sj.show();
            }
          //   $.each(arr,function(i,item){
          //     if(!item){
          //       isReg=false;
          //     }
          //   })
          // if(isReg){
          //   regg.css({"background": "red"});
          // }
          });

          passw.blur("click",function(){
            var str = this.value;
            var reg = /^[a-zA-Z]{3}\d{3}/;
            if(reg.test(str)){
              arr[1] = true;
              mm1.hide();
            }else{
              arr[1] = false;
              mm1.show();
            }
         

          //   $.each(arr,function(i,item){
          //     if(!item){
          //       isReg=false;
          //     }
          //   })
          // if(isReg){
          //   regg.css({"background": "red"});
          // }
          });


          passw1.blur("click",function(){
            if(passw1.val() == passw.val()){
              arr[2] = true;
              mm2.hide();
            }else{
              arr[2] = false;
              mm2.show();
            }
            
            $.each(arr,function(i,item){
              if(!item){
                isReg=false;
              }
            });

          if(isReg){
            regg.css({"background": "red"});
            $("#owari")[0].checked = "checked";
            //$("#owari")[0] == owari ; 左为原生对象 右为jquery方式
          }
          });

          regg.on("click",function(e){
            // e.preventDefault();//阻止默认事件 暂时用来看前台的提示
            var obj={};
            obj.us = usern.val();
            obj.pa = passw.val();
            
            $.post("http://localhost/chuizi/v1/register.php",obj,function(datas){
              console.log(datas);
            })
            var isSubmit =  arr.every(function(item){
              return item == true;
            });
          if(!isSubmit){
            e.preventDefault();
          }
        });


        $("#register_dl").on("click",function(){
          
          window.location.href = "/html/login.html";
        });

    });
  }
  return new Reg();
});


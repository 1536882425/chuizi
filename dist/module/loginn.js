define(function(){
  function Loginn(){}
  Loginn.prototype.init = function(){
    $(function(){
      var log = $("#log"),
          usern = $("#usern"),
          passw = $("#passw"),
          yh = $("#yh"),
          mm = $("#mm"),
          arr = [false,false];
          var isLog=true;
          usern.on("blur",function(){
            var str = this.value;
            var reg = /0?(13|14|15|18)[0-9]{9}/;
            var regg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if((reg.test(str))||(regg.test(str))){
              arr[0] = true;
              yh.css({"display":"none"});
            }else{
              arr[0] = false;
              yh.css({"display":"block"});
              // yh.html("已有账户");
              // yh.css({"display":"block"});
            };

          //   $.each(arr,function(i,item){
          //     if(!item){
          //       isLog=false;
          //     }
          //   })
          // if(isLog){
          //   log.css({"background": "red"});
          // }

          });

          passw.on("blur",function(){
            var str = this.value;
            var reg = /^[a-zA-Z]{3}\d{3}/;
            if(reg.test(str)){
              arr[1] = true;
              mm.hide();
            }else{
              arr[1] = false;
              mm.show();
            }
            $.each(arr,function(i,item){
              if(!item){
                isLog=false;
              }
            })
          if(isLog){
            log.css({"background": "red"});
          }
          });

          log.on("click",function(e){

            // e.preventDefault();
            var obj={};
            obj.us = usern.val();
            obj.pa = passw.val();
            $.post("http://localhost/chuizi/v1/login.php",obj,function(datas){
              // console.log(datas);
             if(datas==1){
             yh.html("欢迎回来");
              yh.css({"display":"block"});
             }else{
              yh.html("未注册账户");
              yh.css({"display":"block"});
             }
            });

            $.post("http://localhost/chuizi/v1/login1.php",obj,function(datas){
            if(datas==0){
              mm.html("请输入正确的密码");
              mm.css({"display":"block","left":"290px"});
            }
            });

            var isSubmit =  arr.every(function(item){
              return item == true;
            });
            
          if(!isSubmit){
            e.preventDefault();
          }
        });

          $("#login_zc").on("click",function(){
            window.location.href = "/html/register.html";
          });

    });
  }
  return new Loginn();
});
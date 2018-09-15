<?php
  header("Access-Control-Allow-Origin:*");
  $userName=$_POST["us"];//获取前台数据 取名=前台的提交方式【需要取值的地点】
  $passWord=$_POST["pa"];//获取前台数据 取名=前台的提交方式【需要取值的地点】
  mysql_connect("localhost","root","");//链接本地服务器
  mysql_select_db("chuizi");//获取数据库
  $sql1="select * from user where username='$userName'";//查询字段 where后跟条件，你要查询的具体是什么
  $result1=mysql_query($sql1);//执行语句 执行上面的php语句 执行之后必定会返回值
  $AllCount=mysql_fetch_assoc($result1);//把后台结果转为前台可以查看的语句 接收执行语句执行后的数据，并用一个名字接收（$AllCount）
  if($AllCount){
    echo "该用户已注册！";//echo 输出语句 类似console.log
  }else{
    $sql2="insert into user (username,password) values ('$userName','$passWord')";//插入语句
                      //表名         字段                             值  （字段和值一一对应）
    $res=mysql_query($sql2);
    if($res){
      echo "success";
    }else{
      echo "failed";
    }
  }
  
  // $sql="select * from pro where kind='xp' LIMIT $count,4";
  // mysql_query("set names 'utf8'");
  // $result = mysql_query($sql);
  // $arr=array();
  // while($row=mysql_fetch_assoc($result)){
  //     array_push($arr,$row);
  // }
  // $obj=array('allCount' => $AllCount[allcount],'data' => $arr);
  // echo json_encode($obj);
  mysql_close();//关闭后台链接
?>
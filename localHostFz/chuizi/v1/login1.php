<?php
  header("Access-Control-Allow-Origin:*");
  $userName=$_POST["us"];
  $passWord=$_POST["pa"];
  mysql_connect("localhost","root","");
  mysql_select_db("chuizi");
  // $sql="select * from user where username='$userName'";
  // // echo "$sql";
  // $result=mysql_query($sql);
  // $AllCount=mysql_fetch_assoc($result);
  // if($AllCount){
  //  echo "1";
  // }else{
  //   echo "0";
  // }
  $sql1="select * from user where password='$passWord'&&username='$userName'";
  $result1=mysql_query($sql1);
  $AllCount1=mysql_fetch_assoc($result1);
  if($AllCount1){
    echo "1";
  }else{
    echo "0";
  }

  mysql_close();
?>
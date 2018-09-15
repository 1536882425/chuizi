<?php
header("Access-Control-Allow-Origin:*");
$id=(int)$_POST["id"];
mysql_connect("localhost","root","");
mysql_select_db("chuizi");
$sql="select * from hot where id='$id'";
mysql_query("set names utf8");//修改字符编码
$result=mysql_query($sql);
$arr=array();
while($row=mysql_fetch_assoc($result)){
  array_push($arr,$row);//数据放入数组 第一个参数是数组 第二个是放入数组中的值
}//查询所有数据
echo json_encode($arr);//转换为json格式
mysql_close();
?>
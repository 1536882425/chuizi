<?php
header("Access-Control-Allow-Origin:*");//语句结束后跟分号结束这段代码 不然会报错
mysql_connect("localhost","root","");
mysql_select_db("chuizi");//引用数据库
$sql="select * from hot";
mysql_query("set names utf8");//修改字符编码
$result=mysql_query($sql);
$arr=array();//创建一个数组
while($row=mysql_fetch_assoc($result)){
  array_push($arr,$row);//数据放入数组 第一个参数是数组 第二个是放入数组中的值
}//查询所有数据
echo json_encode($arr);//转换为json格式
mysql_close();
?>
<?php
header("Access-Control-Allow-Origin:*");
$id=(int)$_POST["id"];
mysql_connect("localhost","root","");
mysql_select_db("chuizi");
$sql="select car from hot where id='$id'";
mysql_query("set names utf8");//修改字符编码
$result=mysql_query($sql);
while($arr=mysql_fetch_array($result)){
$car=$arr["car"];
$car++;
// echo $car;
$sql1="UPDATE hot SET car='$car' WHERE id=$id";
$result1=mysql_query($sql1);
if($result1){
  echo "1";
}else{
  echo "0";
}
};
mysql_close();
?>
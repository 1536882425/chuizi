/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : chuizi

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-15 18:15:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hot`
-- ----------------------------
DROP TABLE IF EXISTS `hot`;
CREATE TABLE `hot` (
  `id` int(11) NOT NULL auto_increment,
  `img` varchar(255) default NULL,
  `name` varchar(255) default NULL,
  `information` varchar(255) default NULL,
  `price` varchar(255) default NULL,
  `car` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hot
-- ----------------------------
INSERT INTO `hot` VALUES ('1', 'b07b9765e272f866da6acda4ee107d88.png', '坚果Pro2S', '双系统，无限屏', '1798.00', '6');
INSERT INTO `hot` VALUES ('2', 'efb9aacaab54e8a7fe5bbfbe8979adcd.png', '坚果R1', '次时代旗舰手机，内藏来自未来的“电脑”', '4999.00', '0');
INSERT INTO `hot` VALUES ('3', 'c71ce2297b362f415f1e74d56d867aed.png', '坚果3', '漂亮得不像实力派', '1499.00', '0');
INSERT INTO `hot` VALUES ('4', '718bcecced0df1cd23bbdb9cc1f70b7d.png', '坚果Pro2', '漂亮得不像实力派', '2699.00', '0');
INSERT INTO `hot` VALUES ('5', 'c71ce2297b362f415f1e74d56d867aed.png', '坚果Pro2特别版', '漂亮得不像实力派', '1899.00', '0');
INSERT INTO `hot` VALUES ('6', '71432ad30288fb860a4389881069b874.png', '畅呼吸智能空气净化器', '超强除甲醛，超低噪音', '2999.00', '0');
INSERT INTO `hot` VALUES ('7', '4a3af52ae7f6e93292668002767b6234.jpg', '牛津纺衬衫', '无拘无束的舒适', '149.00', '0');
INSERT INTO `hot` VALUES ('8', '71432ad30288fb860a4389881069b874.png', '空气净化器', '超长寿命', '2999.00', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15161864846', 'aaa111');
INSERT INTO `user` VALUES ('2', '13880325399', 'asd123');
INSERT INTO `user` VALUES ('3', '15928543475', 'asd123');
INSERT INTO `user` VALUES ('4', '13709078568', 'asd123');
INSERT INTO `user` VALUES ('5', '137555555555', 'aaa111');
INSERT INTO `user` VALUES ('6', '13764646464', 'asd123');
INSERT INTO `user` VALUES ('7', '', '');
INSERT INTO `user` VALUES ('8', '15999999999', 'qwe123');

create database conmodityDB;
use conmodityDB;
create table shop_jb(
	jb_id int primary key auto_increment,
	jb_name varchar(50) not null unique,
	jb_spec varchar(20) not null,
	jb_stock int not null default"0",
	jb_price numeric not null,
	jb_date	date not null
);
create table shop_yw(
	yw_id int primary key auto_increment,
	yw_name varchar(50) not null,
	yw_sex char(4) default"男",
	yw_age int not null,
	yw_tel varchar(11) not null,
	yw_address varbinary(50) not null,
	yw_salary numeric not null
);
create table shop_xs(
	xs_id int primary key auto_increment,
	xs_jb_id varchar(50) not null,		-- 
	xs_sale int not null default"0",
	xs_quantity int not null default"0",
	xs_date date,
	xs_ywid	date not null,-- 
    constraint foreign key (xs_jb_id) references positionTable (positionId),
    constraint foreign key (xs_ywid) references shop_jb (yw_id)
);
delete from shop_yw where yw_name="张三";--
update  shop_yw set  yw_salary=1500 where yw_age>15 and yw_age<18;
delete from shop_jb where jb_date>2014-1-9;--
update  shop_yw set  yw_salary=5000,yw_sex="女" where yw_name like "赵六%" and yw_tel<"13999090980 ";
update shop_yw set yw_age=yw_age+5 where yw_age<18;
update shop_jb set jb_stock=100,jb_price=15.22 where jb_stock=0 and jb_price=0;
update shop_jb set jb_date=2014-1-1 where jb_name="五粮液%";--
delete from shop_xs where xs_id=3 and xs_ywid=3;
truncate table shop_xs;
delete from shop_xs;



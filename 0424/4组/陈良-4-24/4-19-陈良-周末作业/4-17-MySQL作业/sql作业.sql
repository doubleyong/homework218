create database studentDB;
use studentDB;
create table studentBiao(
	stuNo int primary key auto_increment,
    stuName varchar(10),
    stuAge int,
    stuSex char(4),
    stuTel varchar(11),
    stuDe varchar(6),
    stuDirth date
);
insert into studentBiao values(null,A张三,22,男,123456,小学，1993-09-09);
insert into studentBiao values(null,B李四 ,22,男,119,中学，1994-09-01);
insert into studentBiao values(null,C王五,22,男,150,高中，1992-04-22);
insert into studentBiao values(null,D赵六,22,女,120,大学，1995-01-28);
insert into studentBiao values(null,E孙七 ,22,女,911,大专，1996-01-28);
insert into studentBiao values(null,C郑八,22,男,12580,中专，1990-01-28);
update studentBiao set stuDe="大专" where stuTel like "11%";
delete from studentBiao where stuName like "C%" and stuSex="男";
update studentBiao set stuTel=null where stuAge<22 and stuEd="大专";
create table t_student_bak select*from studentBiao;
delete from studentBiao where stuDirth>1990-01-01 and stuDirth<1992-12-1-31;
insert into studentBiao values(null,ccf,22,男,null,中专，1990-01-28);
update studentBiao set stuDirth=1024-08-08 where stuName=ccf;

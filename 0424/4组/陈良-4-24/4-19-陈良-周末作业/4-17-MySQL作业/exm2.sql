
use studentDB;
create table studentTable(
	stuNo int,
    stuName varchar(20),
	stuAge int,
	stuSex char(4),
	stuBirth date,
	inSchoolTime datetime,
	classNo varchar(20)
);
create table classTable(
	classBo varchar(20),
	className varchar(50),
	headTeacher varchar(20),
	createTime date    
);
create table result(
	id int,
	stuNo int,
	course varchar(40),
	courseResult int,
	testTime date
);
create table courseTable(
	courseNo varchar(40),
	courseName varchar(40)
);
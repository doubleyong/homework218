use BusDB;
create table t_bus(
b_id int,
b_name varchar(20),
b_busNo varchar(50),
b_reDate Date,
b_maxNo int
 );
 
 create table t_person(
	p_id int,
    p_name char(10),
    p_nationalId varchar(10),
	p_sex char(2),
	p_age int,
	p_birthday  date
 );

create table t_person(
	n_id int,
	n_nationalName varchar(20)
);
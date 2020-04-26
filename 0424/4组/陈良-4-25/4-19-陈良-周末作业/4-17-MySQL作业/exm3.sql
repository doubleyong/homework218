create database workerDB;
use workerDb;
create table departTable(
	departId int  primary key auto_increment,
	departName varchar(10) not null,
	createTime date not null
);
create table positionTable(
	positionId int primary key auto_increment,
	positionName varchar(30) not null
);
create table workerTable(
	workerId  int primary key auto_increment,
	workerName  varchar(20) not null,
	worker char(4)  default"男",
	workerAddress varchar(100),
	workerPhono varchar(11) not null unique,
	entryTime date not null,
	departId int not null,
	workerPositionId int not null,
    constraint foreign key (workerPositionId) references positionTable (positionId),
    constraint foreign key (departId) references departTable (departId)
);
CREATE DATABASE w218;
CHARSET SET 

USE w218;

CREATE TABLE student 
 (studentNo INT PRIMARY KEY AUTO_INCREMENT,
  studentName VARCHAR(50) NOT NULL,
  cardId VARCHAR(18) UNIQUE,
  sex NCHAR(2) DEFAULT "男",
  age INT,
  classNO INT REFERENCES class(classId),   -- 班级编号
  CONSTRAINT FOREIGN KEY (classNO) REFERENCES class (classId)
  );
  

CREATE TABLE class(
   classId INT PRIMARY KEY AUTO_INCREMENT,
   className NVARCHAR(20)
)  
  
DROP TABLE student;  
DROP TABLE class;

CREATE TABLE class2 SELECT * FROM class

ALTER TABLE class ADD createUser VARCHAR(20) DEFAULT 'doubleyong'

ALTER TABLE class CHANGE createUser createId VARCHAR(20) DEFAULT '1'

ALTER TABLE class DROP COLUMN createId



INSERT INTO class VALUES (NULL,'sunshine',DEFAULT);

INSERT INTO class(className) VALUES('song'),('吃播'),('英语')

UPDATE student SET sex = '男' WHERE cardId = '123' AND classNO = 2


DELETE FROM class WHERE classId = 10 AND className='song'

TRUNCATE TABLE student;

DELETE FROM class




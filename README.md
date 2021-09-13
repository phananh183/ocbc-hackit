# OCBC HACK-IT ROUND 2 SUBMISSION

This is the entry to OCBC HACK-IT round 2
Live website is currently hosted at http://13.251.49.123:3000/ on an AWS EC2 instance.

## Back End
Backend was created using Spring application with Spring Initializr with Spring Web, Spring Data JPA, and MySQL Driver as dependencies. MySQL will be used as the database of choice

Requirements:
* MySQL 5.6 or later
* JDK 1.8 or later
* Gradle 4+ or Maven 3.2+
* IntelliJ IDEA (or equivalent IDE)

**Create new database**
Type the following command in terminal `$ sudo mysql --password` to connect to MySQL

Inside MySQL prompt:

`mysql> create database db_example;` -- Creates the new database

`mysql> create user 'springuser'@'%' identified by 'ThePassword';` -- Creates the user

`mysql> grant all on db_example.* to 'springuser'@'%';` -- Gives all privileges to the new user on the newly created database



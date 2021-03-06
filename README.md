# OCBC HACK-IT ROUND 2 SUBMISSION

This is the entry to OCBC HACK-IT round 2
Live website is currently hosted at http://13.251.49.123:3000/ on an AWS EC2 instance.

## Back End
Backend was created using Spring application with Spring Initializr with Spring Web, Spring Data JPA, and MySQL Driver as dependencies. MySQL will be used as the database of choice.

Requirements:
* MySQL 5.6 or later
* JDK 1.8 or later
* Gradle 4+ or Maven 3.2+
* IntelliJ IDEA (or equivalent IDE)

### Create new database

Type the following command in terminal `$ sudo mysql --password` to connect to MySQL.  

Inside MySQL prompt: 

* `mysql> create database db_example;` -- Creates the new database
* `mysql> create user 'springuser'@'%' identified by 'ThePassword';` -- Creates the user
* `mysql> grant all on db_example.* to 'springuser'@'%';` -- Gives all privileges to the new user on the newly created database

Navigate into `spring-backend/src/main/resources/application.properties` and make sure that the content is as follows: 

```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/db_example
spring.datasource.username=springuser 
spring.datasource.password=ThePassword
spring.datasource.driver-class-name =com.mysql.jdbc.Driver
``` 
Open the `spring-backend` folder in your IDE, and run `./mvnw spring-boot:run` for Maven or `./gradlew bootRun` for Gradle. The Spring application should be running on `localhost:8080`. The list of available API routes are in `react-frontend/api.md`, all of which are implemented in `MainController.java`. 

## Front End 
Navigate inside `react-frontend` and run `npm install` to install all required node modules, and then run `npm start` for local development server. React app should be running on `localhost:3000`.

> If you are running Spring Boot server on `localhost:8080`, run:
>
> `REACT_APP_USE_LOCAL_SERVER=true npm start`
> 
> to use API for local Spring Boot server
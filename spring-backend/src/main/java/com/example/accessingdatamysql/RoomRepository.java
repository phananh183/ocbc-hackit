package com.example.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;

//Interface for generic CRUD operations on mySQL database for Room
public interface RoomRepository extends CrudRepository<Room, String> {
}

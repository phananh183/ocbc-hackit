package com.example.accessingdatamysql;

import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.LockModeType;
import java.util.Optional;

//Interface for generic CRUD operations on mySQL database for Seat
public interface SeatRepository extends CrudRepository<Seat, String> {
    //Obtain exclusive lock to prevent data from being updated
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<Seat> findById(String id);
}

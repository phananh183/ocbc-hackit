package com.example.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//Initialize a hard-coded seating plan of 5 by 5 on start
@Component
public class DatabaseLoader implements CommandLineRunner {
    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    public DatabaseLoader() {}

    @Override
    public void run(String... args) throws Exception {
        Integer row = 5;
        Integer col = 5;

        roomRepository.deleteAll();
        roomRepository.save(new Room("0", row, col));

        seatRepository.deleteAll();

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                seatRepository.save(new Seat(String.valueOf(i) + "-" + String.valueOf(j), false));
            }
        }
    }
}

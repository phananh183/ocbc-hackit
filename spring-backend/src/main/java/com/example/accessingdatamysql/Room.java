package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
//The purpose of this class is just to store values for rows and cols
public class Room {

    @Id private String id;
    private Integer _row;
    private Integer _col;

    public Room(String id, Integer _row, Integer _col) {
        this.id = id;
        this._row = _row;
        this._col = _col;
    }

    public Room() {}

    //getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getRow() {
        return _row;
    }

    public void setRow(Integer _row) {
        this._row = _row;
    }

    public Integer getCol() {
        return _col;
    }

    public void setCol(Integer _col) {
        this._col = _col;
    }
}
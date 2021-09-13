package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Seat {

	@Id private String id; //Id for seat is stored in database in the format of "x-y" coordinates for ease of generation
	private Boolean booked; //boolean for whether seat is booked

	public Seat(String id, Boolean booked) {
		this.id = id;
		this.booked = booked;
	}

	public Seat() {}

	//getters and setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Boolean getBooked() {
		return booked;
	}

	public void setBooked(Boolean booked) {
		this.booked = booked;
	}
}
package com.example.accessingdatamysql;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Optional;

class ResetDbRequest {
	private Integer _row;
	private Integer _col;

	public ResetDbRequest(Integer _row, Integer _col) {
		this._row = _row;
		this._col = _col;
	}

	public ResetDbRequest() {}

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

class BookSeatRequest {
	private String id;

	public BookSeatRequest(String id) {
		this.id = id;
	}

	public BookSeatRequest() {}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api")
public class MainController {
	@Autowired
	//Used to map between Java objects BookSeatRequest and ResetDbRequest in JSON objects, to be passed into response
	private ObjectMapper objectMapper;

	@PersistenceContext
	EntityManager entityManager;

	@Autowired
	private SeatRepository seatRepository;

	@Autowired
	private RoomRepository roomRepository;

	@PostMapping(path="/book")
	@Transactional
	public @ResponseBody ObjectNode book(@RequestBody BookSeatRequest body) {
		ObjectNode response = objectMapper.createObjectNode();

		String id = body.getId();

		Optional<Seat> seatQuery = seatRepository.findById(id);

		if (!seatQuery.isPresent()) {
			response.put("error", 1); //if Seat id is not found, error code is 1
			return response;
		} else {
			Seat seat = seatQuery.get();
			if (seat.getBooked()) {
				response.put("error", 2); //if Seat is updated as booked, error code is 2
				return response;
			} else {
				seat.setBooked(true);
				seatRepository.save(seat);
				return response; //return empty response object if booked successfully
			}
		}
	}

	@GetMapping(path="/get_seats_status")
	public @ResponseBody ObjectNode getSeatsStatus() {
		ObjectNode response = objectMapper.createObjectNode();

		try {
			Iterable<Seat> seatQuery = seatRepository.findAll();

			seatQuery.forEach(seat -> {
				//for each seat, include JSON objects within field status that map each seat id with its booked state
				response.with("data").with("status").put(seat.getId(), seat.getBooked());
			});

			// Hard code room to id 0
			Optional<Room> room = roomRepository.findById("0");

			if (!room.isPresent()) {
				throw new Exception();
			} else {
				//to return number of rows and columns from backend so frontend can render seating grid
				response.with("data").put("row", room.get().getRow());
				response.with("data").put("col", room.get().getCol());
			}
		} catch (Exception e) {
			response.removeAll();
			response.put("error", 500);
		}

		return response;
	}

	@PostMapping(path="/reset_db")
	@Transactional
	public @ResponseBody ObjectNode resetDb(@RequestBody ResetDbRequest body) {
		ObjectNode response = objectMapper.createObjectNode();

		try {
			//collect info of rows and columns from request body
			Integer row = body.getRow();
			Integer col = body.getCol();

			//clear database
			roomRepository.deleteAll();
			roomRepository.save(new Room("0", row, col));

			seatRepository.deleteAll();

			//re-initialize database based on new rows and cols
			for (int i = 0; i < row; i++) {
				for (int j = 0; j < col; j++) {
					seatRepository.save(new Seat(String.valueOf(i) + "-" + String.valueOf(j), false));
				}
			}
		} catch (Exception e) {
			response.put("error", 500); //response error code if there is error
		}

		return response; //else return empty response
	}
}

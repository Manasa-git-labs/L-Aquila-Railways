package it.univaq.sose.train.booking.model;

public class BookingModel {
	
	private int bookingId;
	
	private int userId;
	
	private int ticketId;
	
	private String seat;
	
	private String status;
	

	public BookingModel() {
		super();
	}

	public BookingModel(int bookingId, int userId, int ticketId, String seat, String status) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.ticketId = ticketId;
		this.seat = seat;
		this.status = status;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getSeat() {
		return seat;
	}

	public void setSeat(String seat) {
		this.seat = seat;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}

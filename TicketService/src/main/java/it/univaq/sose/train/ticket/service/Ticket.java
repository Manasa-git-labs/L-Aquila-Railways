package it.univaq.sose.train.ticket.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.AsyncHandler;
import javax.xml.ws.ResponseWrapper;

import it.univaq.sose.train.ticket.model.BookingModel;
import it.univaq.sose.train.ticket.model.TicketModel;
import it.univaq.sose.train.ticket.model.TrainAvailabilityModel;
import it.univaq.sose.train.ticket.model.TrainModel;

@WebService
public interface Ticket {
	@WebMethod
	TicketModel getTicket (int id);
	
	@WebMethod
	List<BookingModel> getBookingByUserId(int userId) throws SQLException;
	
	@WebMethod
	boolean setBooking(String firstname, String lastname, String gender, int age, String address, int idItinerary, int idClass, float price);
	
	@WebMethod
	@ResponseWrapper(localName = "trainAvailabilityResponse", 
	               className = "it.univaq.sose.train.ticket.model.TrainAvailabilityModel")
	public Map<TrainModel,Integer> getAvailability(String from, String to, String time);
	
	@WebMethod
	@ResponseWrapper(localName = "trainAvailabilityResponse",
			className = "it.univaq.sose.train.ticket.model.TrainAvailabilityModel")	
	Future<?> getAvailabilityAsync (String from, String to, String time, AsyncHandler<TrainAvailabilityModel> asyncHandler);

	@WebMethod
	public List<TicketModel> getTicketsByItinerary (int itineraryId);
	
	@WebMethod
	boolean setTicketPayed(int bookingId);
}

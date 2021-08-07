package it.univaq.sose.train.booking.service;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

import it.univaq.sose.train.booking.model.RouteModel;
import it.univaq.sose.train.ticket.service.BookingModel;
import it.univaq.sose.train.ticket.service.SQLException_Exception;
import it.univaq.sose.train.ticket.service.TicketModel;

@WebService
public interface Booking {
	
	@WebMethod
	List<RouteModel> getRoutes(String from, String to, String time);
	
	@WebMethod
	boolean setBooking (int userId, int ticketId, String seat);
	
	@WebMethod
	List<BookingModel> getUserBooking(int userId) throws SQLException_Exception;
	
	@WebMethod 
	List<TicketModel> getTicketsByItinerary(int itineraryId);
	
	@WebMethod
	boolean bookingPayment(int bookingId, String firstanme, String lastname, int cvc, String expiryDate, long cardNumber);

}

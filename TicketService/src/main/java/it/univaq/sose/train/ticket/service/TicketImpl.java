package it.univaq.sose.train.ticket.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;

import javax.xml.ws.AsyncHandler;

import org.apache.cxf.annotations.UseAsyncMethod;
import org.apache.cxf.jaxws.ServerAsyncResponse;

import it.univaq.sose.train.ticket.controller.TicketController;
import it.univaq.sose.train.ticket.dao.BookingDAO;
import it.univaq.sose.train.ticket.model.BookingModel;
import it.univaq.sose.train.ticket.model.TicketModel;
import it.univaq.sose.train.ticket.model.TrainAvailabilityModel;
import it.univaq.sose.train.ticket.model.TrainModel;

public class TicketImpl implements Ticket {

	@Override
	public TicketModel getTicket (int id) {
		return TicketController.getTicket(id);
	}
	
	@Override
	public List<BookingModel> getBookingByUserId (int userId) throws SQLException {
		return TicketController.getBookingByUserId(userId);
	}
	
	@Override
	public boolean setBooking(String firstname, String lastname, String gender, int age, String address, int idItinerary, int idClass, float price) {
		return BookingDAO.setBooking(firstname, lastname, gender, age, address, idItinerary, idClass, price);
	}
	
	@Override
	@UseAsyncMethod
	public Map<TrainModel, Integer> getAvailability(String from, String to, String time) {
		// TODO Auto-generated method stub
		return null;
	}	
	

	@Override
	public Future<?> getAvailabilityAsync(String from, String to, String time, AsyncHandler<TrainAvailabilityModel> asyncHandler) {
		
		final ServerAsyncResponse<TrainAvailabilityModel> asyncResponse = new ServerAsyncResponse<TrainAvailabilityModel>();
		
		new Thread() {
			public void run() {
				
				TrainAvailabilityModel response = new TrainAvailabilityModel();
				response.setTrainAvailability(TicketController.getAvailability(from, to, time));
				
				asyncResponse.set(response);
				asyncHandler.handleResponse(asyncResponse);
			}
		}.start();
		
		return asyncResponse;		
	
	}

	@Override
	public List<TicketModel> getTicketsByItinerary(int itineraryId) {
		return TicketController.getTicketsByItinerary(itineraryId);
	}

	@Override
	public boolean setTicketPayed(int bookingId) {
		return BookingDAO.setTicketPayed(bookingId);
	}

}

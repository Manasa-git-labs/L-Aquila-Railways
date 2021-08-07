package it.univaq.sose.train.booking.service;

import java.util.ArrayList;
import java.util.List;

import it.univaq.sose.train.booking.controller.BookingController;
import it.univaq.sose.train.booking.controller.RouteController;

import it.univaq.sose.train.booking.model.RouteModel;
import it.univaq.sose.train.ticket.service.BookingModel;
import it.univaq.sose.train.ticket.service.SQLException_Exception;
import it.univaq.sose.train.ticket.service.TicketModel;

public class BookingImpl implements Booking {
	
	@Override
	public List<RouteModel> getRoutes(String from, String to, String time) {	
		
		List<RouteModel> routes = new ArrayList<>();
		
		try {
			routes = RouteController.getRoutes(from, to, time);
			return routes;
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return routes;
	}

	@Override
	public boolean setBooking(int userId, int ticketId, String seat) {
		return BookingController.setBooking(userId, ticketId, seat);
	}

	@Override
	public List<BookingModel> getUserBooking(int userId) throws SQLException_Exception {
		return BookingController.getUserBooking(userId);
	}

	@Override
	public List<TicketModel> getTicketsByItinerary(int itineraryId) {
		return BookingController.getTicketsByItineraryId(itineraryId);
	}

	@Override
	public boolean bookingPayment(int bookingId, String firstanme, String lastname, int cvc, String expiryDate, long cardNumber) {
		return BookingController.bookingPayment(bookingId, firstanme, lastname, cvc, expiryDate, cardNumber);
	}

}

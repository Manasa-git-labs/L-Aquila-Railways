package it.univaq.sose.train.ticket.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import it.univaq.sose.train.ticket.dao.BookingDAO;
import it.univaq.sose.train.ticket.dao.ItineraryDAO;
import it.univaq.sose.train.ticket.dao.TicketDAO;
import it.univaq.sose.train.ticket.model.BookingModel;
import it.univaq.sose.train.ticket.model.ItineraryModel;
import it.univaq.sose.train.ticket.model.TicketModel;
import it.univaq.sose.train.ticket.model.TrainModel;

public class TicketController {
	
	public static TicketModel getTicket (int id) {
		return TicketDAO.getTicketByID(id);
	}

	public static List<BookingModel> getBookingByUserId(int userId) throws SQLException {
		// TODO Auto-generated method stub
		return BookingDAO.getUserBooking(userId);
	}
	
	public static List<TicketModel> getTicketsByItinerary (int itineraryId) {
		ItineraryModel itinerary = ItineraryDAO.getItineraryByID(itineraryId);
		List<TicketModel> ticket = TicketDAO.getTicketsByItinerary(itinerary);
		return ticket;
		
	}
	
	public static Map<Integer,Integer> getAvailability(String from, String to, String time) {
		
		Map<Integer,Integer> trainsAvailability = new HashMap<>();
		List<ItineraryModel> itineraries = ItineraryDAO.getItineraries(from, to, time);
		
		Iterator<ItineraryModel> iterator = itineraries.iterator();
		
		while (iterator.hasNext()) {
			ItineraryModel itinerary = iterator.next();
			TrainModel train = itinerary.getTrain();
			int booked = TicketDAO.getBookingByItineraryId(itinerary.getItineraryId());
			int availability = train.getCapacity()-booked;
			trainsAvailability.put(itinerary.getItineraryId(), availability);
		}

		return trainsAvailability;
		
	}

}

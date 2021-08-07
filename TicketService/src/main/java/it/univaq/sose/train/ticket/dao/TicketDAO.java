package it.univaq.sose.train.ticket.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import it.univaq.sose.train.ticket.model.ItineraryModel;
import it.univaq.sose.train.ticket.model.TicketModel;

public class TicketDAO {
	
	public static TicketModel getTicketByID (int id) {
		
		TicketModel train = null;
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sTicketById = connection.prepareStatement("SELECT * FROM tickets WHERE id=?");
			sTicketById.setInt(1, id);
			
			ResultSet resObj = sTicketById.executeQuery();
			
			while (resObj.next()) {
				String ticketClass = getClass(resObj.getInt("idclass"));
				train = new TicketModel(resObj.getInt("id"), resObj.getInt("noOfPeople"), resObj.getFloat("price"), ticketClass, ItineraryDAO.getItineraryByID(resObj.getInt("iditinerary")));
			}
			
			resObj.close();
			sTicketById.close();
			connection.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return train;
	}
	
	public static String getClass (int classId) {

		String ticketClass = null;

		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sClassById = connection.prepareStatement("SELECT * FROM class WHERE id=? LIMIT 1");
			sClassById.setInt(1, classId);
			
			ResultSet resObj = sClassById.executeQuery();
			
			while (resObj.next()) {
				ticketClass = resObj.getString("classType");
			}
			
			resObj.close();
			sClassById.close();
			connection.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return ticketClass;
		
	}
	
	public static Integer getBookingByItineraryId (int itineraryId) {
		
		int booked = 0;
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement getAvailabilityById = connection.prepareStatement("SELECT COUNT(*) AS booked FROM train_ticket_booking.usertickets "
					+ "JOIN tickets ON usertickets.idticket=tickets.id WHERE tickets.iditinerary=?");
			getAvailabilityById.setInt(1, itineraryId);
			
			ResultSet resObj = getAvailabilityById.executeQuery();
			
			while (resObj.next()) {
				booked = resObj.getInt("booked");
			}
			resObj.close();
			getAvailabilityById.close();
			connection.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return booked;
	}
	
	public static List<TicketModel> getTicketsByItinerary (ItineraryModel itinerary) {
		
		List<TicketModel> tickets = new ArrayList<>();
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sTicketsByItinerary = connection.prepareStatement("SELECT * FROM tickets WHERE iditinerary = ?");
			sTicketsByItinerary.setInt(1, itinerary.getItineraryId());
			
			ResultSet resObj = sTicketsByItinerary.executeQuery();
			
			while (resObj.next()) {
				String ticketClass = getClass(resObj.getInt("idclass"));
				TicketModel ticket = new TicketModel(resObj.getInt("id"), resObj.getInt("noOfPeople"), resObj.getFloat("price"), ticketClass, itinerary);
				tickets.add(ticket);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return tickets;
	}

}

package it.univaq.sose.train.ticket.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import it.univaq.sose.train.ticket.model.ItineraryModel;
import it.univaq.sose.train.ticket.model.TrainModel;

public class ItineraryDAO {
	
	public static List<ItineraryModel> getItineraries (String from, String to, String time) {
		
		List<ItineraryModel> itineraries = new ArrayList<ItineraryModel>();
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sItinerariesByTime = connection.prepareStatement("SELECT * FROM itinerary WHERE itinerary.from=? AND itinerary.to=? AND TIME(itinerary.departureTime)>?");
			sItinerariesByTime.setString(1, from);
			sItinerariesByTime.setString(2, to);
			sItinerariesByTime.setString(3, time);
			
			ResultSet resObj = sItinerariesByTime.executeQuery();
			
			while (resObj.next()) {
				TrainModel train = TrainDAO.getTrainByID(resObj.getInt("idtrain"));
				ItineraryModel itinerary = new ItineraryModel(resObj.getInt("id"), resObj.getString("from"), resObj.getString("to"), resObj.getTimestamp("departureTime").toLocalDateTime().toLocalTime(), resObj.getTimestamp("arrivalTime").toLocalDateTime().toLocalTime(), train);
				itineraries.add(itinerary);
			}
			
			resObj.close();
			sItinerariesByTime.close();
			connection.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return itineraries;
	}
	
	public static ItineraryModel getItineraryByID (int id) {
		
		ItineraryModel itinerary = null;
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sItineraryById = connection.prepareStatement("SELECT * FROM itinerary WHERE id=?");
			sItineraryById.setInt(1, id);
			
			ResultSet resObj = sItineraryById.executeQuery();
			
			while (resObj.next()) {
				TrainModel train = TrainDAO.getTrainByID(resObj.getInt("idtrain"));
				itinerary = new ItineraryModel(resObj.getInt("id"), resObj.getString("from"), resObj.getString("to"), resObj.getTimestamp("departureTime").toLocalDateTime().toLocalTime(), resObj.getTimestamp("arrivalTime").toLocalDateTime().toLocalTime(), train);
			}
			
			resObj.close();
			sItineraryById.close();
			connection.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return itinerary;
	}

}

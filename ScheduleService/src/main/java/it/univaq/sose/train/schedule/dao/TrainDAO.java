package it.univaq.sose.train.schedule.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import it.univaq.sose.train.schedule.model.TrainModel;

public class TrainDAO {
	
	public static TrainModel getTrainByID (int id) {
		
		TrainModel train = null;
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement sTrainById = connection.prepareStatement("SELECT * FROM trains WHERE id=?");
			sTrainById.setInt(1, id);
			
			ResultSet resObj = sTrainById.executeQuery();
			
			while (resObj.next()) {
				train = new TrainModel(resObj.getInt("id"), resObj.getInt("trainNo"), resObj.getString("trainName"), resObj.getInt("capacity"));
			}
			
			resObj.close();
			sTrainById.close();
			connection.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return train;
	}

}

package it.univaq.sose.train.ticket.model;

import java.util.Map;

public class TrainAvailabilityModel {
	
	private Map<Integer,Integer> trainAvailability;

	public Map<Integer, Integer> getTrainAvailability() {
		return trainAvailability;
	}

	public void setTrainAvailability(Map<Integer, Integer> trainAvailability) {
		this.trainAvailability = trainAvailability;
	}

	
}

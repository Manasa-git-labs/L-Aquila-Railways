package it.univaq.sose.train.booking.model;

import it.univaq.sose.train.schedule.service.ItineraryModel;
import it.univaq.sose.train.schedule.service.TrainModel;

public class RouteModel {
	
	private ItineraryModel schedule;
	
	private int availability;

	public RouteModel(ItineraryModel schedule, int availability) {
		super();
		this.schedule = schedule;
		this.availability = availability;
	}

	public ItineraryModel getSchedule() {
		return schedule;
	}

	public void setSchedule(ItineraryModel schedule) {
		this.schedule = schedule;
	}

	public int getAvailability() {
		return availability;
	}

	public void setAvailability(int availability) {
		this.availability = availability;
	}

}

package it.univaq.sose.train.ticket.model;

import java.time.LocalTime;

public class ItineraryModel {

	private int itineraryId;

	private String from;

	private String to;

	private LocalTime departureTime;

	private LocalTime arrivalTime;

	private TrainModel train;
	
	

	public ItineraryModel(int itineraryId, String from, String to, LocalTime departureTime, LocalTime arrivalTime,
			TrainModel train) {
		super();
		this.itineraryId = itineraryId;
		this.from = from;
		this.to = to;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.train = train;
	}

	public int getItineraryId() {
		return itineraryId;
	}

	public void setItineraryId(int itineraryId) {
		this.itineraryId = itineraryId;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public LocalTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public LocalTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}

	public TrainModel getTrain() {
		return train;
	}

	public void setTrain(TrainModel train) {
		this.train = train;
	}

}

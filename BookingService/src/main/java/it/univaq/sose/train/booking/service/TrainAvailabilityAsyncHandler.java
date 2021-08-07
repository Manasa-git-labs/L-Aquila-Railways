package it.univaq.sose.train.booking.service;

import javax.xml.ws.AsyncHandler;
import javax.xml.ws.Response;

import it.univaq.sose.train.ticket.service.TrainAvailabilityModel;

public class TrainAvailabilityAsyncHandler implements AsyncHandler<TrainAvailabilityModel> {
	
	private TrainAvailabilityModel trainAvailabilityResponse;

	@Override
	public void handleResponse(Response<TrainAvailabilityModel> res) {	
		try {
			trainAvailabilityResponse = res.get();
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	public TrainAvailabilityModel getResponse() {
		return trainAvailabilityResponse;
	}

}

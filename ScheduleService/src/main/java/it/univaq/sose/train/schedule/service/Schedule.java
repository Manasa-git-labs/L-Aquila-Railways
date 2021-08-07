package it.univaq.sose.train.schedule.service;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

import it.univaq.sose.train.schedule.model.ItineraryModel;

@WebService
public interface Schedule {
	@WebMethod
	List<ItineraryModel> getSchedule (String from, String to, String time);
	
	@WebMethod
	ItineraryModel getItineraryById (Integer id);

}

package it.univaq.sose.train.schedule.service;

import java.util.List;

import it.univaq.sose.train.schedule.dao.ItineraryDAO;
import it.univaq.sose.train.schedule.model.ItineraryModel;

public class ScheduleImpl implements Schedule {

	@Override
	public List<ItineraryModel> getSchedule (String from, String to, String time) {
		return ItineraryDAO.getItineraries(from, to, time);
	}

	@Override
	public ItineraryModel getItineraryById(Integer id) {
		return ItineraryDAO.getItineraryByID(id);
	}
	
}

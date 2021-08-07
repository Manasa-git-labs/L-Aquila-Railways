package it.univaq.sose.train.booking.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;
import java.util.stream.Collectors;

import it.univaq.sose.train.booking.model.RouteModel;
import it.univaq.sose.train.booking.service.TrainAvailabilityAsyncHandler;
import it.univaq.sose.train.schedule.service.ItineraryModel;
import it.univaq.sose.train.schedule.service.Schedule;
import it.univaq.sose.train.schedule.service.ScheduleImplService;
import it.univaq.sose.train.ticket.service.GetAvailability;
import it.univaq.sose.train.ticket.service.Ticket;
import it.univaq.sose.train.ticket.service.TicketImplService;
import it.univaq.sose.train.ticket.service.TrainAvailabilityModel;

public class RouteController {
	
	public static List<ItineraryModel> getItineraries (String from, String to, String time) {
		
		System.out.println("getItineraries");
		ScheduleImplService service = new ScheduleImplService();
		Schedule port = service.getScheduleImplPort();
		List<ItineraryModel> response = port.getSchedule(from, to, time);
		return response;
		
	}
	
	/*public static TrainAvailabilityModel getAvailabilities (String from, String to, String time) throws InterruptedException {
		
		TicketImplService service = new TicketImplService();
		Ticket port = service.getTicketImplPort();
		
		GetAvailability request = new GetAvailability();
		request.setArg0(from);
		request.setArg1(to);
		request.setArg2(time);
		
		TrainAvailabilityAsyncHandler trainAvailabilitySyncHandler = new TrainAvailabilityAsyncHandler();
		Future<?> response = port.getAvailabilityAsync(request, trainAvailabilitySyncHandler);
		
		while (!response.isDone()) {
			Thread.sleep(100);
		}
		
		TrainAvailabilityModel availabilities = trainAvailabilitySyncHandler.getResponse();
		System.out.println(availabilities.getTrainAvailability().getEntry().isEmpty());
		return availabilities;
		
	}*/
	
	public static List<RouteModel> getRoutes(String from, String to, String time) throws InterruptedException {
		
		List<ItineraryModel> itineraries = new ArrayList<>();
		
		TicketImplService service = new TicketImplService();
		Ticket port = service.getTicketImplPort();
		
		GetAvailability request = new GetAvailability();
		request.setArg0(from);
		request.setArg1(to);
		request.setArg2(time);
		
		TrainAvailabilityAsyncHandler trainAvailabilitySyncHandler = new TrainAvailabilityAsyncHandler();
		Future<?> response = port.getAvailabilityAsync(request, trainAvailabilitySyncHandler);
		
		do {
			if(itineraries.isEmpty()) itineraries = getItineraries(from, to, time);
		} while (!response.isDone());
		
		TrainAvailabilityModel availabilities = trainAvailabilitySyncHandler.getResponse();
		System.out.println(availabilities.getTrainAvailability().getEntry().isEmpty());
		
		List<RouteModel> routes = new ArrayList<>();
		
		itineraries.forEach( itinerary -> {
			
			Map<Integer,Integer> availabilitiesMap = availabilities.getTrainAvailability().getEntry().stream()
					.collect(Collectors.toMap(entry -> entry.getKey(), entry -> entry.getValue(), (a,b) -> a, () -> new LinkedHashMap<>()));
			
			int availability = availabilitiesMap.get(itinerary.getItineraryId());
			routes.add(new RouteModel(itinerary, availability));
		});
		
		return routes;
	}

}

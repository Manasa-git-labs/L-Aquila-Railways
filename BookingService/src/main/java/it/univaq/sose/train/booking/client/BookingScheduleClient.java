package it.univaq.sose.train.booking.client;

import java.util.List;

import it.univaq.sose.train.schedule.service.ItineraryModel;
import it.univaq.sose.train.schedule.service.Schedule;
import it.univaq.sose.train.schedule.service.ScheduleImplService;

public class BookingScheduleClient {

	public static void main(String[] args) {
		
		ScheduleImplService service = new ScheduleImplService();
		Schedule port = service.getScheduleImplPort();
		List<ItineraryModel> response = port.getSchedule("a", "b", "13:00");
		System.out.println(response.toString());

	}

}

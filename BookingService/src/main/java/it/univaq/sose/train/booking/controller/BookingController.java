package it.univaq.sose.train.booking.controller;

import java.util.List;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.cxf.jaxrs.client.WebClient;

import it.univaq.sose.train.ticket.service.BookingModel;
import it.univaq.sose.train.ticket.service.SQLException_Exception;
import it.univaq.sose.train.ticket.service.Ticket;
import it.univaq.sose.train.ticket.service.TicketImplService;
import it.univaq.sose.train.ticket.service.TicketModel;


public class BookingController {
	
	private static final String endpoint = "http://localhost:8080/PaymentService/rest/";

	public static boolean setBooking(int userId, int ticketId, String seat) {
		
		TicketImplService service = new TicketImplService();
		Ticket port = service.getTicketImplPort();
		boolean response = port.setBooking(userId, ticketId, seat);
		return response;
	}

	public static List<BookingModel> getUserBooking(int userId) throws SQLException_Exception {

		TicketImplService service = new TicketImplService();
		Ticket port = service.getTicketImplPort();
		List<BookingModel> response = port.getBookingByUserId(userId);
		return response;
	}
	
	public static List<TicketModel> getTicketsByItineraryId (int itineraryId) {
		
		TicketImplService service = new TicketImplService();
		Ticket port = service.getTicketImplPort();
		List<TicketModel> response = port.getTicketsByItinerary(itineraryId);
		return response;
		
	}
	
	public static boolean bookingPayment (int bookingId, String firstanme, String lastname, int cvc, String expiryDate, long cardNumber) {
		WebClient client = WebClient.create(endpoint + "payment/cardValidation?firstname="+firstanme+"&lastname="+lastname
				+"&cvc="+cvc+"&expiryDate="+expiryDate+"&cardNumber="+cardNumber);
		Response response = client.accept(MediaType.APPLICATION_JSON).get();
		
		String accepted = response.readEntity(String.class);
		System.out.print(accepted);
		boolean ticketResponse=false;
		
		if (accepted.equals("true")) {
			TicketImplService service = new TicketImplService();
			Ticket port = service.getTicketImplPort();
			ticketResponse = port.setTicketPayed(bookingId);
		}
		
		return ticketResponse;
	}
}

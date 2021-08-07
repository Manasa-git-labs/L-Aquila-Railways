package it.univaq.sose.train.ticket.model;

public class TicketModel {

	private int ticketId;

	private int noOfPeople;

	private float price;

	private String travelClass;

	private ItineraryModel itinerary;

	public TicketModel(int ticketId, int noOfPeople, float price, String travelClass, ItineraryModel itinerary) {
		super();
		this.ticketId = ticketId;
		this.noOfPeople = noOfPeople;
		this.price = price;
		this.travelClass = travelClass;
		this.itinerary = itinerary;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public int getNoOfPeople() {
		return noOfPeople;
	}

	public void setNoOfPeople(int noOfPeople) {
		this.noOfPeople = noOfPeople;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getTravelClass() {
		return travelClass;
	}

	public void setTravelClass(String travelClass) {
		this.travelClass = travelClass;
	}

	public ItineraryModel getItinerary() {
		return itinerary;
	}

	public void setItinerary(ItineraryModel itinerary) {
		this.itinerary = itinerary;
	}

}

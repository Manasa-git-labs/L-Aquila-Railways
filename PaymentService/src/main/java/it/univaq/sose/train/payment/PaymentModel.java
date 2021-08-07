package it.univaq.sose.train.payment;

public class PaymentModel {

	private int bookingid;
	private int cvc;
	private int cardNumber;
	private int paymentId;
	private String expiryDate;
	private String firstname;
	private String lastname;
	
	public PaymentModel() {
		super();
	}

	


	public PaymentModel(int bookingid, int cvc, int cardNumber, int paymentId, String expiryDate, String firstname,
			String lastname) {
		super();
		this.bookingid = bookingid;
		this.cvc = cvc;
		this.cardNumber = cardNumber;
		this.paymentId = paymentId;
		this.expiryDate = expiryDate;
		this.firstname = firstname;
		this.lastname = lastname;
	}



	public int getBookingid() {
		return bookingid;
	}




	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}




	public int getCvc() {
		return cvc;
	}


	public void setCvc(int cvc) {
		this.cvc = cvc;
	}


	public int getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(int cardNumber) {
		this.cardNumber = cardNumber;
	}


	public int getPaymentId() {
		return paymentId;
	}


	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}


	public String getExpiryDate() {
		return expiryDate;
	}


	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	
	
	
	
	
	
	
}

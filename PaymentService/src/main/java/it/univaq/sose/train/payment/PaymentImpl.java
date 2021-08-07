package it.univaq.sose.train.payment;


public class PaymentImpl implements Payment {

	public String checkCardDetails(String firstanme, String lastname, int cvc, String expiryDate, long cardNumber) {
		String response="false";
		System.out.println(Math.floor(Math.log10(cvc)));
		System.out.println(Math.floor(Math.log10(cardNumber)));
		
		if ((Math.floor(Math.log10(cvc)) == 2) && (Math.floor(Math.log10(cardNumber)) == 15)) {
			response = "true";
		}
		return response;

	}
}

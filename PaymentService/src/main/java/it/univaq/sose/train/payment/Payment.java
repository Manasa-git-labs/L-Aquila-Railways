package it.univaq.sose.train.payment;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/payment")
public interface Payment {

	@GET
	@Path("/cardValidation")
	@Produces({ MediaType.APPLICATION_JSON })
	public String checkCardDetails(@QueryParam("firstname") String firstanme,@QueryParam("lastname") String lastname, @QueryParam("cvc")int cvc,
			@QueryParam("expiryDate")String expiryDate, @QueryParam("cardNumber")long cardNumber);
	
	
}

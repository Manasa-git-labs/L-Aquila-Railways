package it.univaq.sose.train.account;

import java.sql.SQLException;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import it.univaq.sose.train.booking.service.SQLExceptionException;
import it.univaq.sose.train.ticket.service.BookingModel;

@Path("/account")
public interface Account {
	
	@POST
	@Path("/login")
	@Produces({ MediaType.APPLICATION_JSON })
	public AccountModel checkLogin(@QueryParam("uname") String username,@QueryParam("pass") String password)  throws SQLException, ClassNotFoundException;
	
	@POST
	@Path("/register")
	@Produces({ MediaType.APPLICATION_JSON })
	String registerAccount(@QueryParam("firstname") String firstname, @QueryParam("lastname") String lastname, @QueryParam("username") String username, 
			@QueryParam("password") String password, @QueryParam("age") int age, @QueryParam("gender") String gender, @QueryParam("address") String address) throws ClassNotFoundException;
	
	@POST
	@Path("/userTickets")
	@Produces({ MediaType.APPLICATION_JSON })
	List<BookingModel> accountTickets(@QueryParam("userid") int userid) throws SQLExceptionException ;

}

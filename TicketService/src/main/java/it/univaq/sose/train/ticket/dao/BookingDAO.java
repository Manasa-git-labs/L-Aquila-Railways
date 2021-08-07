package it.univaq.sose.train.ticket.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import it.univaq.sose.train.ticket.controller.TicketController;
import it.univaq.sose.train.ticket.model.BookingModel;

public class BookingDAO {
	
	public static boolean setBooking (String firstname, String lastname, String gender, int age, String address, int idItinerary, int idClass, float price) {
		
		boolean insert = true;
		
		try {
			
//			Save User Data -> return UserId
//			Firstname, lastname, gender, age, address
			Connection connection = DatabaseConnector.connessioneDB();
			System.out.println("Gender: "+gender);
			PreparedStatement insertUser = connection.prepareStatement("INSERT INTO user (firstname, lastname, age, gender, address, groupid, username, password)\r\n" +
					"VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
			insertUser.setString(1, firstname);
			insertUser.setString(2, lastname);
			insertUser.setInt(3, age);
			insertUser.setString(4, gender);
			insertUser.setString(5, address);
			insertUser.setInt(6, 2);
			insertUser.setString(7, "");
			insertUser.setString(8, "");
			insertUser.execute();
			
			PreparedStatement st = connection.prepareStatement("SELECT * from user");
			st.execute();
	        ResultSet rstest = st.getResultSet();
	        rstest.afterLast();
	        int userId = 0;
	        while(rstest.previous()){
	            userId = rstest.getInt("id");
	            break;//to read only the last row
	        }
	        st.close();
			
			System.out.println("Insert User Result: "+ userId);
			insertUser.close();
			
//			Save Ticket Data -> return TicketId
			PreparedStatement insertTicket = connection.prepareStatement("INSERT INTO tickets (noOfPeople, price, idclass, iditinerary)\r\n" +
					"VALUES (?, ?, ?, ?)");
			insertTicket.setInt(1, 0);
			insertTicket.setFloat(2, price);
			insertTicket.setInt(3, idClass);
			insertTicket.setInt(4, idItinerary);
			insertTicket.execute();
			
			st = connection.prepareStatement("SELECT * from tickets");
			st.execute();
	        rstest = st.getResultSet();
	        rstest.afterLast();
	        int ticketId = 0;
	        while(rstest.previous()){
	        	ticketId = rstest.getInt("id");
	            break;//to read only the last row
	        }
	        st.close();
	        
			System.out.println("Insert Ticket Result: "+ ticketId);
			insertTicket.close();
			
//			Save UserTicket Data -> return UserTicketId
			PreparedStatement insertUserTicket = connection.prepareStatement("INSERT INTO usertickets (iduser, idticket, seat, status, bookDate)\r\n" +
					"VALUES (?, ?, ?, ?, ?)");
			insertUserTicket.setInt(1, userId);
			insertUserTicket.setInt(2, ticketId);
			insertUserTicket.setInt(3, 1);
			insertUserTicket.setString(4, "PAYED");
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			String date = LocalDateTime.now().format(formatter);
			insertUserTicket.setString(5, date);
			insertUserTicket.execute();
			
			st = connection.prepareStatement("SELECT * from usertickets");
			st.execute();
	        rstest = st.getResultSet();
	        rstest.afterLast();
	        int userTicketId = 0;
	        while(rstest.previous()){
	        	userTicketId = rstest.getInt("id");
	            break;//to read only the last row
	        }
	        st.close();
	        
			System.out.println("Insert UserTicket Result: "+ userTicketId);
			insertUserTicket.close();
			
			connection.close();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			insert=false;
		}
		
		return insert;
	}
	
	public static boolean setTicketPayed (int bookingId) {
		
		boolean update = true;
		
		try {
			
			Connection connection = DatabaseConnector.connessioneDB();
			
			PreparedStatement updateTicketStatus = connection.prepareStatement("UPDATE usertickets SET status=? WHERE id=?");
			updateTicketStatus.setString(1, "PAYED");
			updateTicketStatus.setInt(2, bookingId);
			
			updateTicketStatus.execute();
			
			updateTicketStatus.close();
			connection.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
			update = false;
		}
		
		return update;
	}
	

	public static List<BookingModel> getUserBooking(int userId) {
		
		List<BookingModel> tickets= new ArrayList<>();
		
		try {
			
		Connection connection = DatabaseConnector.connessioneDB();

		String sql = "SELECT * FROM usertickets WHERE iduser = ?";
		PreparedStatement statement;
		
		statement = connection.prepareStatement(sql);

		statement.setInt(1, userId);

		ResultSet result = statement.executeQuery();

		BookingModel booking = null;		
		
		while (result.next()) {
			booking = new BookingModel();
			booking.setBookingId(result.getInt("id"));

			booking.setUserId(result.getInt("iduser"));
			booking.setTicket(TicketController.getTicket(result.getInt("idticket")));
			booking.setSeat(result.getString("seat"));
			booking.setStatus(result.getString("status"));
			booking.setBookingDate(result.getTimestamp("bookDate").toLocalDateTime().toLocalTime());
			
			tickets.add(booking);
		}

		connection.close();

		return tickets;		
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return tickets;
	}

}

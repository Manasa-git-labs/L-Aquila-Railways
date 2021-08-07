package it.univaq.sose.train.account;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import it.univaq.sose.train.booking.service.Booking;
import it.univaq.sose.train.booking.service.BookingImplService;
import it.univaq.sose.train.booking.service.SQLExceptionException;
import it.univaq.sose.train.ticket.service.BookingModel;


public class AccountImpl implements Account {

	@Override
	public AccountModel checkLogin(String username, String password) throws ClassNotFoundException, SQLException {
		String jdbcURL = "jdbc:mysql://localhost:3306/train_ticket_booking?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&useSSL=false&allowPublicKeyRetrieval=true";
		String dbUser = "admin";
		String dbPassword = "123$Weet";

		Class.forName("com.mysql.jdbc.Driver");
		Connection connection = DriverManager.getConnection(jdbcURL, dbUser, dbPassword);
		String sql = "SELECT * FROM user WHERE username = ? and password = ?";
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setString(1, username);
		statement.setString(2, password);

		ResultSet result = statement.executeQuery();

		AccountModel account = 	new AccountModel();

		if (result.next()) {
			account.setId(Integer.parseInt(result.getString("id")));
			account.setFirstname(result.getString("firstname"));
			account.setLastname(result.getString("lastname"));
			account.setGender(result.getString("gender"));
			account.setAddress(result.getString("address"));
			account.setAge(result.getInt("age"));
			account.setGroupid(result.getInt("groupid"));
		}

		connection.close();

		return account;
	}

	@Override
	public String registerAccount(String firstname, String lastname, String username, String password, int age,String gender,String address) throws ClassNotFoundException {
		String INSERT_USERS_SQL = "INSERT INTO user"
				+ "  (id, firstname, lastname, username, password, age, gender, address, groupid) VALUES "
				+ " (?, ?, ?, ?, ?, ?, ?, ?,2);";

		int result = 0;
		String response = "failure";

		Class.forName("com.mysql.jdbc.Driver");

		try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/train_ticket_booking?serverTimezone=UTC", "root",
				"MyNewPass");

				// Step 2:Create a statement using connection object
				PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL)) {
			String LAST_IDPARTCIPANT_SQL = ("SELECT id FROM user ORDER BY Id DESC LIMIT 1;");
			ResultSet rs = null;
			Statement st = connection.createStatement();
			rs = st.executeQuery(LAST_IDPARTCIPANT_SQL);
			int idp = 0;
			if (rs.next()) {
				idp = rs.getInt("id");
				System.out.println("id:" + idp);
			}

			preparedStatement.setInt(1, idp + 1);
			preparedStatement.setString(2, firstname);
			preparedStatement.setString(3, lastname);
			preparedStatement.setString(4, username);
			preparedStatement.setString(5, password);
			preparedStatement.setInt(6, age);
			preparedStatement.setString(7, gender);
			preparedStatement.setString(8, address);

			// Step 3: Execute the query or update query
			result = preparedStatement.executeUpdate();
			 if (result > 0) {
		            response = ("success");
		        }
			System.out.println(preparedStatement);

		} catch (SQLException e) {
			// process sql exception
			printSQLException(e);
		}
		return response;
	}
	
    //method for seeing booked tickets active and non active, made through wsdl and cxf?

	@Override
	public List<BookingModel> accountTickets(int userid) throws SQLExceptionException {
		
		BookingImplService service = new BookingImplService();
		Booking bookings = service.getBookingImplPort();
		List<BookingModel> accountTickets = bookings.getUserBooking(userid);
		
		return accountTickets;
	}

	private void printSQLException(SQLException ex) {
		for (Throwable e : ex) {
			if (e instanceof SQLException) {
				e.printStackTrace(System.err);
				System.err.println("SQLState: " + ((SQLException) e).getSQLState());
				System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
				System.err.println("Message: " + e.getMessage());
				Throwable t = ex.getCause();
				while (t != null) {
					System.out.println("Cause: " + t);
					t = t.getCause();
				}
			}
		}
	}
}

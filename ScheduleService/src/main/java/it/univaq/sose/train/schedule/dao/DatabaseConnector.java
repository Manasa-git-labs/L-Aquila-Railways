package it.univaq.sose.train.schedule.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnector {
	

    // JDBC Driver Name & Database URL
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String JDBC_DB_URL = "jdbc:mysql://localhost:3306/train_ticket_booking?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&useSSL=false&allowPublicKeyRetrieval=true";
    
    // JDBC Database Credentials
    static final String JDBC_USER = "admin";
    static final String JDBC_PASS = "123$Weet";
	
	public static Connection connessioneDB() {
		
		Connection conn = null;

	        try
	        {
	            Class.forName(JDBC_DRIVER);
	            conn = DriverManager.getConnection(JDBC_DB_URL, JDBC_USER, JDBC_PASS);
	        }
	        catch (SQLException ex)
	        {
	            System.out.println("SQLException: " + ex.getMessage());
	            System.out.println("SQLState: " + ex.getSQLState());
	            System.out.println("ERROR:" + ex.getErrorCode());
	            ex.printStackTrace();
	        }
	        catch (Exception ex)
	        {
	            ex.printStackTrace();
	        }

	        //System.out.println("Connessione al Database andata a buon fine");
	        return conn;
	 }

}

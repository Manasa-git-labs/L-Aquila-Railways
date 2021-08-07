package it.univaq.sose.train.account;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="AccountModel")
public class AccountModel {

	private int id;
	private String firstname;
	private String lastname;
	private int age;
	private int groupid;
	private String gender;
	private String address;
	private String username;
	private String password;
	
	public AccountModel() {
		
	}
	
	public AccountModel(int id) {
		this.id = id;
	}
	

	public AccountModel(int id, String firstname, String lastname, int age, int groupid, String gender, String address,
			String username, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.groupid = groupid;
		this.gender = gender;
		this.address = address;
		this.username = username;
		this.password = password;
	}
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getGroupid() {
		return groupid;
	}

	public void setGroupid(int groupid) {
		this.groupid = groupid;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	
}

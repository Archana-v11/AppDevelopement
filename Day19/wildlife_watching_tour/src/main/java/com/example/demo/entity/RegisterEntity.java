package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="form_register")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterEntity 
{
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private int registerId;
	 public int getRegisterId() {
		return registerId;
	}
	public void setRegisterId(int registerId) {
		this.registerId = registerId;
	}
	public String getFirstName() {
		return username;
	}
	public void setFirstName(String username) {
		this.username = username;
	}
	
	public String getEmail() {
		return emailid;
	}
	public void setEmail(String emailid) {
		this.emailid = emailid;
	}
	public String getMobileNo() {
		return mobileno;
	}
	public void setMobileNo(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	private String username;
	
	 private String emailid;
	 private String password;
	 
	 private String mobileno;
}
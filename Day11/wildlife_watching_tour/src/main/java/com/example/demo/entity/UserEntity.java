package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name="loginuser")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class UserEntity 
{
	   @Id
	   @GeneratedValue(strategy = GenerationType.AUTO)
	   private int userId;
	   private String username;
	   private String password;
	   public int getUserId() 
	   {
		return userId;
	   }
	   public void setUserId(int userId) 
	   {
		this.userId = userId;
	   }
	   public String getUserName() 
	   {
		return username;
	   }
	   public void setUserName(String username) 
	   {
		this.username = username;
	   }
	   public String getPassword() 
	   {
		return password;
	   }
	   public void setPassword(String password) 
	   {
		this.password = password;
	   }

}

package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserEntity;



public interface UserServiceInterface 
{
	public List<UserEntity>getUser();
	   
	   public void saveUser(UserEntity le);
	   public void updateUser(UserEntity le);
	   public void deleteUser(int id);

}

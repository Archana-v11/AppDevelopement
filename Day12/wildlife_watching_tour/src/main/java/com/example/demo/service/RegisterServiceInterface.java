package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.RegisterEntity;


public interface RegisterServiceInterface 
{
	public List<RegisterEntity> getRegister();
	   public void saveRegister(RegisterEntity re);
	   public void updateRegister(RegisterEntity re);
	   public void deleteRegister(int id);
	   
	

}

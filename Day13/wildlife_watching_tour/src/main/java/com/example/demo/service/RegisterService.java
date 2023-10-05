package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RegisterEntity;

import com.example.demo.repository.RegisterRepository;
import com.example.demo.repository.UserRepository;

@Service
public  class RegisterService implements RegisterServiceInterface
{
	@Autowired
	private RegisterRepository registerrepo;
	@Override
	public List<RegisterEntity> getRegister() 
	   {
		  return registerrepo.findAll();
	   }
	@Override
	   public void saveRegister(RegisterEntity re)
	   {
		  registerrepo.save(re);
	   }
	@Override
	   public void updateRegister(RegisterEntity re) 
	   {
		   registerrepo.save(re);
	   }
	@Override
	   public void deleteRegister(int id) 
	   {
		  registerrepo.deleteById(id);
	   }
	
  
}

package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;
@Service


public class UserService implements UserServiceInterface
{
	@Autowired
	private UserRepository userrepo;
	@Override
	public List<UserEntity> getUser() 
	   {
		  return userrepo.findAll();
	   }
	@Override
	   public void saveUser(UserEntity le)
	   {
		  userrepo.save(le);
	   }
	@Override
	   public void updateUser(UserEntity le) 
	   {
		   userrepo.save(le);
	   }
	@Override
	   public void deleteUser(int id) 
	   {
		  userrepo.deleteById(id);
	   }
	

	

}

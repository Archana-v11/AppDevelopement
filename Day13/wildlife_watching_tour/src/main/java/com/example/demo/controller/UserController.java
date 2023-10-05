package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

@RestController 
@CrossOrigin
public class UserController
{
	@Autowired
	private UserService us;
	@GetMapping("/getuser")
    public List<UserEntity>getLoginDetails1()
    {
    	return us.getUser();
    }
	
    @PostMapping("/postuser")
    public String saveDetails(@RequestBody UserEntity le)
    {
    	us.saveUser(le);
    	return "Successfully saved";
    }
    
    @PutMapping("/putuser")
    public String updateDetails(@RequestBody UserEntity le,@RequestParam int id)
    {
    	le.setUserId(id);
    	us.updateUser(le);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deleteuser")
    public String deleteDetails(@RequestParam int id)
    {
    	us.deleteUser(id);
    	return "Successfully deleted";
    }
}
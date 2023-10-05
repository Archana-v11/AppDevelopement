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

import com.example.demo.entity.RegisterEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.RegisterService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class RegisterController 
{
	@Autowired
	private RegisterService rs;
	@GetMapping("/getregister")
    public List<RegisterEntity> getLoginDetails1()
    {
    	return rs.getRegister();
    }
	
    @PostMapping("/postregister")
    public String saveDetails(@RequestBody RegisterEntity le)
    {
    	rs.saveRegister(le);
    	return "Successfully saved";
    }
    
    @PutMapping("/putregister")
    public String updateDetails(@RequestBody RegisterEntity le,@RequestParam int id)
    {
    	le.setRegisterId(id);
    	rs.updateRegister(le);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deleteregister")
    public String deleteDetails(@RequestParam int id)
    {
    	rs.deleteRegister(id);
    	return "Successfully deleted";
    }

}

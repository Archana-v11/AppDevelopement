package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.UserService;
import com.example.demo.model.Contact;
import com.example.demo.model.RequiredResponse;
import com.example.demo.repository.UserServiceRepository;





@RestController
@RequestMapping("/user")
public class UserServiceController {
	
	@Autowired
	private UserServiceRepository userRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@PostMapping(path ="/add")
	public ResponseEntity<UserService> addContact(@RequestBody UserService userService) {
		
		UserService userAdded = userRepo.save(userService);
		return new ResponseEntity<>(userAdded, HttpStatus.OK);
	}
	
	@RequestMapping(path ="/id/{id}")
	public ResponseEntity<RequiredResponse> getAllDadaBasedonUserId(@PathVariable Integer id)
	{
		RequiredResponse requiredResponse =  new RequiredResponse();
		
		UserService user  = userRepo.findById(id).get();
		requiredResponse.setUser(user);
		
		
		
		List<Contact > listOfCitizens = restTemplate.getForObject("http://CONTACTUSSERVICE/contact/id/"+id, List.class);
		requiredResponse.setContact(listOfCitizens);
		return new ResponseEntity<RequiredResponse>(requiredResponse, HttpStatus.OK);
	}
	
	
	
	
	

}
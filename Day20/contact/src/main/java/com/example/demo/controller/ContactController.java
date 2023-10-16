package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;


@RestController
@RequestMapping("/contact")
public class ContactController {
	
	@Autowired
	private ContactRepository repo; 

	@RequestMapping(path ="/test")
	public ResponseEntity<String> test() {
		return new ResponseEntity<>("hello", HttpStatus.OK);
	}
	
	@RequestMapping(path ="/id/{id}")
	public ResponseEntity<java.util.List<Contact>> getById(@PathVariable Integer id) 
	{
		
		List<Contact> listContact = repo.findByContactId(id);
		return new ResponseEntity<>(listContact, HttpStatus.OK);
	}
	
	@PostMapping(path ="/add")
	public ResponseEntity<Contact> addCitizen(@RequestBody Contact newContact) {
		
		Contact contact = repo.save(newContact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}
	
	
	
}
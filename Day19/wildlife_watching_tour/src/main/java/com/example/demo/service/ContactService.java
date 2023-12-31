package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;




@Service
public class ContactService 
{
	@Autowired
    private ContactRepository contactrepo;
	public List<Contact> getFeedback() 
	{
		return contactrepo.findAll();
	}
	public void saveFeedback(Contact registerEntity) 
	{
	        contactrepo.save(registerEntity);
	}
	public void updateFeedback(Contact registerEntity) 
	{
		contactrepo.save(registerEntity);	
	}
	public void deleteFeedback(int contactId) 
	{
		contactrepo.deleteById(contactId);
	}
}
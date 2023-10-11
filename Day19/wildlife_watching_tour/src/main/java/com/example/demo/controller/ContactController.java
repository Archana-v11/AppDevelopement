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

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;




@RestController
@CrossOrigin
public class ContactController 
{
   @Autowired
   private ContactService contactservice;
   
   
   @GetMapping("/getContact")
   public List<Contact> getFeedbackDetails()
   {
  	 return contactservice.getFeedback();
   }
   
   @PostMapping("/postContact")
   public String saveFeedbackDetails(@RequestBody Contact registerEntity)
   {
     contactservice.saveFeedback(registerEntity);
  	  return ("Successfully saved");
   }
   
   @PutMapping("/putContact")
   public String updateFeedbackDetails(@RequestBody Contact registerEntity,@RequestParam int contactId)
   {
   	registerEntity.setContactId(contactId);
  	    contactservice.updateFeedback(registerEntity);
  	    return ("Successfully Updated");
   }
   @DeleteMapping("/deleteContact")
   public String deleteFeedbackDetails(@RequestParam int feedbackId)
   {
    contactservice.deleteFeedback(feedbackId);
  	 return ("Successfully Deleted");
   }
}
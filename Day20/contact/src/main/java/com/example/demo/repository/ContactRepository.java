package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> 
{
	public List<Contact> findByContactId(Integer contactId);

}

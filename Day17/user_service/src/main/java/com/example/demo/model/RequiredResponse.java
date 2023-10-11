package com.example.demo.model;

import java.util.List;

import com.example.demo.entity.UserService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequiredResponse 
{
	private UserService user;
	private List<Contact> contact;

}

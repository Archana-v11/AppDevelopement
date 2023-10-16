package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact 
{
	private int contactId;
    private String firstname;
    private String lastname;
    private String email;
    private String mobileno;
    private String message;

}

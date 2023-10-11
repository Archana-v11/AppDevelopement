package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="contactt")
public class Contact
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int contactId;
    private String firstname;
    private String lastname;
    private String email;
    private String mobileno;
    private String message;
}

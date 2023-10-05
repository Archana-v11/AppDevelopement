package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.RegisterEntity;

public interface RegisterRepository extends JpaRepository<RegisterEntity, Integer> 
{
	
	 
}

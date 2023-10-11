package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.UserService;

public interface UserServiceRepository extends JpaRepository<UserService, Integer> {

	

}

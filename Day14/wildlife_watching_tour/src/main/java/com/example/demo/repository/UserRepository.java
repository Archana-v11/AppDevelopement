package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> 
{
	/*@Query(value="SELECT * FROM loginuser WHERE id=:userid",nativeQuery=true)
    public List<UserEntity> getAllUser(int id);*/
}

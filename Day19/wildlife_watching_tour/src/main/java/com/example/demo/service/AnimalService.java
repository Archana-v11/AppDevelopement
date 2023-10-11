package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Animal;
import com.example.demo.repository.AnimalRepository;



@Service
public class AnimalService 
{
	@Autowired
	private AnimalRepository animelRepository;

	public List<Animal> getAnimel() {
		
		return animelRepository.findAll();
	}

	public void saveAnimel(Animal animel) {
		animelRepository.save(animel);
		
	}

	public void updateAnimel(Animal animel) {
		animelRepository.save(animel);
		
	}

	public void deleteAnimel(int animelId) {
		animelRepository.deleteById(animelId);
		
	}

}
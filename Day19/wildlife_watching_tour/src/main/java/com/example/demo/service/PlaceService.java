package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Place;
import com.example.demo.repository.PlaceRepository;



@Service
public class PlaceService 
{
	@Autowired
	private PlaceRepository placerepo;
	
	public List<Place> getPlace() 
	   {
		  return placerepo.findAll();
	   }
	
	   public void savePlace(Place p)
	   {
		  placerepo.save(p);
	   }
	
	   public void updatePlace(Place re) 
	   {
		  placerepo.save(re);
	   }
	
	   public void deletePlace(int id) 
	   {
		  placerepo.deleteById(id);
	   }

}

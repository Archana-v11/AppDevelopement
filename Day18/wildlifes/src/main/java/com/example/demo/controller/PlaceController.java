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

import com.example.demo.entity.Place;
import com.example.demo.service.PlaceService;



@RestController
@CrossOrigin
public class PlaceController 
{
	@Autowired
	private PlaceService ps;
	@GetMapping("/getPlace")
    public List<Place> getPlaceDetails()
    {
    	return ps.getPlace();
    }
	
    @PostMapping("/postPlace")
    public String saveDetails(@RequestBody Place p)
    {
    	ps.savePlace(p);
    	return "Successfully saved";
    }
    
    @PutMapping("/putPlace")
    public String updateDetails(@RequestBody Place p,@RequestParam int id)
    {
    	p.setPlaceId(id);
    	ps.updatePlace(p);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deletePlace")
    public String deleteDetails(@RequestParam int id)
    {
    	ps.deletePlace(id);
    	return "Successfully deleted";
    }

}

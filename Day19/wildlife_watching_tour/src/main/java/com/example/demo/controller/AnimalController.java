package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Animal;
import com.example.demo.service.AnimalService;



@RestController

public class AnimalController 
{
    @Autowired 
    private AnimalService animelService;
    
    @GetMapping("/getAnimal")
    public List<Animal> getAnimelDetails()
    {
    	return animelService.getAnimel();
    }
    @PostMapping("/postAnimal")
    public String postAnimleDetails(@RequestBody Animal animel)
    {
    	animelService.saveAnimel(animel);
    	return("Sucessfully saved");
    }
    @PutMapping("/putAnimal")
    public String updateAnimelDetails(@RequestBody Animal animel,@RequestParam int animalId)
    {
    	animel.setAnimalId(animalId);
   	    animelService.updateAnimel(animel);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteAnimal")
    public String deleteAnimelDetails(@RequestParam int animelId)
    {
     animelService.deleteAnimel(animelId);
   	 return ("Successfully Deleted");
    }
}

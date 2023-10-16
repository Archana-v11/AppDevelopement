package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Video2;
import com.example.demo.repository.Video2Repository;


@RestController
@RequestMapping("/auth")

@CrossOrigin

public class Video2Controller 
{
    @Autowired 
    private Video2Repository videoRepository;
 
    @GetMapping("/getVideo2")
    public List<Video2> getAllVideos()
    {
    	return videoRepository.findAll();
    }
    
    @PostMapping("/postVideo2")
    public Video2 addVideo(@RequestBody Video2 video)
    {
    	return videoRepository.save(video);
    }
    
    @PutMapping("/putVideo2")
    public String putVide(@RequestBody Video2 video,@RequestParam int id)
    {
    	video.setId(id);
    	videoRepository.save(video);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deleteVideo2")
    public String deleteVideo(@RequestParam int id)
    {
    	videoRepository.deleteById(id);
    	return "Successfully deleted";
    }
}
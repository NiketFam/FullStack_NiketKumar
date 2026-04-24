package com.jobs.basic.controller;

import com.jobs.basic.entity.JobEntity;
import com.jobs.basic.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/all")
    public List<JobEntity> getAllJobs() {
        return jobService.getAllJobs();
    }

    @PostMapping("/add")
    public JobEntity addJob(@RequestBody JobEntity job) {
        return jobService.saveJob(job);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
    }
}
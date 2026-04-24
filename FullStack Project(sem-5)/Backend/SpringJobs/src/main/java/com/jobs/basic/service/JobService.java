package com.jobs.basic.service;

import com.jobs.basic.entity.JobEntity;
import com.jobs.basic.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<JobEntity> getAllJobs() {
        return jobRepository.findAll();
    }
    public JobEntity saveJob(JobEntity job) {
        return jobRepository.save(job);
    }
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
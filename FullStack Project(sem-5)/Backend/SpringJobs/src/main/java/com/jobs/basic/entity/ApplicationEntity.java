package com.jobs.basic.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="application")
@Data
public class ApplicationEntity {
	@Id
	private Long id;
	private String applicationName;
	private String applicationEmail;
	private Long jobId;
}

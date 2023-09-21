package com.aibiigae1221.cookcook3.data.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String uuid;
	
	@Column(unique = true)
	private String userId;
	
	@Column
	private String password;
	
	@Column
	private String nickname;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date createdDt;
}

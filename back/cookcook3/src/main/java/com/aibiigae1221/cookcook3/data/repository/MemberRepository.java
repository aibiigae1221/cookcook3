package com.aibiigae1221.cookcook3.data.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aibiigae1221.cookcook3.data.entity.Member;

public interface MemberRepository extends JpaRepository<Member, UUID>{

	Optional<Member> findByUserId(String userId);

}

package com.aibiigae1221.cookcook3.data.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aibiigae1221.cookcook3.data.entity.Member;
import com.aibiigae1221.cookcook3.data.repository.MemberRepository;
import com.aibiigae1221.cookcook3.web.dto.MemberDTO;

@Service
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public void signUpMember(MemberDTO dto) {
		Member member = transformMemberDtoToEntity(dto);
		memberRepository.save(member);
	}

	private Member transformMemberDtoToEntity(MemberDTO dto) {
		Member member = new Member();
		member.setUserId(dto.getUserId());
		String encodedPassword = passwordEncoder.encode(dto.getPassword());
		member.setPassword(encodedPassword);
		member.setNickname(dto.getNickname());
		member.setCreatedDt(new Date());
		return member;
	}
	
	
}

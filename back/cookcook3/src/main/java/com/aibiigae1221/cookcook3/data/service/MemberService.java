package com.aibiigae1221.cookcook3.data.service;

import com.aibiigae1221.cookcook3.data.entity.Member;
import com.aibiigae1221.cookcook3.web.dto.LoginDTO;
import com.aibiigae1221.cookcook3.web.dto.MemberDTO;

import jakarta.validation.Valid;

public interface MemberService {

	void signUpMember(MemberDTO dto);

	Member loginUser(@Valid LoginDTO dto);

	String generateJWT(Member member);

}

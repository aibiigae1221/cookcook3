package com.aibiigae1221.cookcook3.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aibiigae1221.cookcook3.data.service.MemberService;
import com.aibiigae1221.cookcook3.web.dto.MemberDTO;

import jakarta.validation.Valid;

@RestController
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	@PostMapping("/member/sign-up")
	public void signUpMember(@RequestBody @Valid MemberDTO member) {
		
		memberService.signUpMember(member);
	}
}

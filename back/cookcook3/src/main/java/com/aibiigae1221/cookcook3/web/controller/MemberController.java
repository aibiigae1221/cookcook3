package com.aibiigae1221.cookcook3.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aibiigae1221.cookcook3.data.entity.Member;
import com.aibiigae1221.cookcook3.data.service.MemberService;
import com.aibiigae1221.cookcook3.web.dto.LoginDTO;
import com.aibiigae1221.cookcook3.web.dto.MemberDTO;
import com.nimbusds.jose.shaded.gson.JsonObject;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class MemberController {

	@Autowired
	private MemberService memberService;

	
	@PostMapping(value="/member/sign-up")
	public void signUpMember(@RequestBody @Valid MemberDTO member) {
		log.info("{}", member);
		memberService.signUpMember(member);
	}
	
	@PostMapping("/member/log-in")
	public String loginUser(@RequestBody @Valid LoginDTO dto) {
		Member member = memberService.loginUser(dto);
		String jwt = memberService.generateJWT(member);
		log.info("로그인 성공 jwt: " + jwt);
		JsonObject json = new JsonObject();
		json.addProperty("jwt", jwt);
		return json.toString();
	}
}

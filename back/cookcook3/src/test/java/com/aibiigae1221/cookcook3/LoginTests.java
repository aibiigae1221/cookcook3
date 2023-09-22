package com.aibiigae1221.cookcook3;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.aibiigae1221.cookcook3.data.repository.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@AutoConfigureMockMvc
@SpringBootTest
public class LoginTests {

	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private MemberRepository memberRepository;
	
	private static final String MEMBER_ID = "testid123";
	private static final String MEMBER_PWD = "1234";
	private static final String MEMBER_NICKNAME = "경훈";
	
	
	@BeforeEach
	public void destroyRemainingResources() throws Exception {
		memberRepository.deleteAll();
		signUpFirst();
	}
	
	private void signUpFirst() throws Exception {
		JSONObject json = new JSONObject();
		json.put("userId", MEMBER_ID);
		json.put("password", MEMBER_PWD);
		json.put("nickname", MEMBER_NICKNAME);
		
		mvc.perform(post("/member/sign-up")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json.toString()))
		.andDo(print())
		.andExpect(status().isOk());
	}

	@Test
	public void loginSuccess() throws Exception {
		
		JSONObject json = new JSONObject();
		json.put("userId", MEMBER_ID);
		json.put("password", MEMBER_PWD);
		
		String responseRaw = mvc.perform(post("/member/log-in")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json.toString()))
		.andDo(print())
		.andExpect(status().isOk())
		.andReturn().getResponse().getContentAsString();
		
		log.info("result: [{}]", responseRaw);
	}
}

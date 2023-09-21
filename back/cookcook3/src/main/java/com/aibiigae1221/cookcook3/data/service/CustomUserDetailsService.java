package com.aibiigae1221.cookcook3.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.aibiigae1221.cookcook3.data.entity.Member;
import com.aibiigae1221.cookcook3.data.repository.MemberRepository;

public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new UsernameNotFoundException("존재하지 않는 계정 로그인 시도 (아이디: " + userId + ")"));
		return new User(member.getUserId(), member.getPassword(), List.of(new SimpleGrantedAuthority("normal")));
	}

}

package com.aibiigae1221.cookcook3.data.service;

import java.time.Instant;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import com.aibiigae1221.cookcook3.data.entity.Member;
import com.aibiigae1221.cookcook3.data.repository.MemberRepository;
import com.aibiigae1221.cookcook3.web.dto.LoginDTO;
import com.aibiigae1221.cookcook3.web.dto.MemberDTO;

import jakarta.validation.Valid;

@Service
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtEncoder encoder;
	
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

	@Override
	public Member loginUser(@Valid LoginDTO dto) {
		String userId = dto.getUserId();
		Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new UsernameNotFoundException(userId));
		boolean passwordMatched = passwordEncoder.matches(dto.getPassword(), member.getPassword());
		if(!passwordMatched) {
			throw new BadCredentialsException(dto.getUserId() + " 계정의 실패한 로그인 시도가 있었습니다");
		}
		return member;
	}

	@Override
	public String generateJWT(Member member) {
		Instant now = Instant.now();
		long expiry = 36000L;
		JwtClaimsSet claims = JwtClaimsSet.builder()
				.issuer("self")
				.issuedAt(now)
				.expiresAt(now.plusSeconds(expiry))
				.subject(member.getUserId())
				.claim("scope", member)
				.build();
		return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
	}
	
	
}

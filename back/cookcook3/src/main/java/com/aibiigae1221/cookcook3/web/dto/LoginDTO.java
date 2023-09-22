package com.aibiigae1221.cookcook3.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginDTO {

	@Size(min=6, max=20, message="유저 아이디를 6자리 이상 20자리 이하로 입력해주세요")
	@NotBlank(message="유저 아이디를 입력해주세요")
	private String userId;
	
	@Size(min=4, max=12, message="비밀번호를 4자리 이상 12자리 이하로 입력해주세요")
	@NotBlank(message="비밀번호를 입력해주세요")
	private String password;
}
